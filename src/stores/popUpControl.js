import { defineStore } from "pinia";
import { ref } from "vue";

export const usepopUpControl = defineStore("popUpControl", {
  state: () => ({
    selectedAccount: null,
    showDeletePopUp: false,
    showBlockPopup: false,
    showDeactivatePopUp: false,
    showUpdateModal: false,
    showAddAgent: false,
    showRefundPopUp: false,
    showReversePopUp: false,
    showCancelPopUp: false,
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
    promptRefund(account) {
      this.selectedAccount = account;
      console.log("hehehe");
      this.showRefundPopUp = true;
    },
    promptReverse(account) {
      this.selectedAccount = account;
      this.showReversePopUp = true;
    },
    promptCancel(account) {
      this.selectedAccount = account;
      this.showCancelPopUp = true;
    },

    cancelDelete() {
      this.showDeletePopUp = false;
      this.showBlockPopup = false;
      this.showDeactivatePopUp = false;
      this.showRefundPopUp = false;
      this.showReversePopUp = false;
      this.showCancelPopUp = false;
    },
    openModal() {
      this.showUpdateModal = true;
    },
    showModal() {
      this.showAddAgent = true;
    },
  },
});
