import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usepopUpControlStore = defineStore('popUpControl', {
  state: () => ({
    selectedAccount: null,
    showDeletePopUp: false,
    showBlockPopup: false,
    showDeactivatePopUp: false,
  }),
  
  actions: {
    promptDelete(account) {
      this.selectedAccount = account; // Store the selected account
      this.showDeletePopUp = true;    // Open the modal
    },
    
    promptBlock(account) {
      this.selectedAccount = account; // Store the selected account
      this.showBlockPopup = true;     // Open the modal
    },
    
    promptDeactivate(account) {
      this.selectedAccount = account; // Store the selected account
      this.showDeactivatePopUp = true; // Open the modal
    },
  }
});
