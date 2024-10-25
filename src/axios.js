// Axios setup
import axios from 'axios';
import { useAuthStore } from './stores/auth';

const instance = axios.create({
  baseURL: 'https://wequickpay-dc71d9e6cf03.herokuapp.com',
  withCredentials: true,
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const accessToken = authStore.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post('/auth/refresh', {'refresh': authStore.refreshToken}, { withCredentials: true });
        const newAccessToken = response.data.data.access;
        const authStore = useAuthStore();
        authStore.setTokens({ access: newAccessToken, refresh: authStore.refreshToken });
        // Retry the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        authStore.logOut(); //  log out the user if the refresh token fails
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
