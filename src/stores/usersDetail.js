// src/stores/auth.js
import { defineStore } from 'pinia';
import axios from '@/axios';

export const useDetails = defineStore('userDetails', {
  state: () => ({
    users: null,
  }),
  actions: {
    async getUsersAgg() {
      try {
        const response = await axios.get('/aggregates', { withCredentials: true });
        console.log(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }
  },
 
});
