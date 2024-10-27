// src/stores/auth.js
import { defineStore } from 'pinia';
import axios from '@/axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
  }),
  actions: {
    setTokens({ access, refresh }) {
      this.accessToken = access;
      this.refreshToken = refresh;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
    },
    async logOut() {
      try {
        await axios.put('/auth/logout', {'refresh': this.refreshToken }, { withCredentials: true });
        this.accessToken = null;
        this.refreshToken = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  }
});
