import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usepopUpControl = defineStore('popUpControl', {
  state: () => ({
    selectedAccount: null,
    showDeletePopUp: false,
    showBlockPopup: false,
    showDeactivatePopUp: false,
    showUpdateModal:false,
    showAddAgent:false
  }),
  
  actions: {
    promptDelete(account) {
      this.selectedAccount = account;
      this.showDeletePopUp = true;
    },
    
    promptBlock(account) {
      this.selectedAccount = account;
      this.showBlockPopup = true;
    },
    
    promptDeactivate(account) {
      this.selectedAccount = account;
      this.showDeactivatePopUp = true;
    },

    cancelDelete() {
      this.showDeletePopUp = false;
      this.showBlockPopup = false;
      this.showDeactivatePopUp = false;
    },
    openModal(){
      this.showUpdateModal = true
    },
    showModal(){
      this.showAddAgent = true
    }
  }
});
