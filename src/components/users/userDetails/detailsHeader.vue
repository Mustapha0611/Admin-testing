<template>
    <div class="bg-slate-50 rounded-xl h-56 w-full flex flex-col items-end justify-between p-5">
        <div><router-link to="/AllUsers" class="flex bg-main text-white rounded-3xl py-2 px-6 gap-2"><img src="@/assets/arrow-back.svg" class="w-5 h-4"><span class="text-sm font-semibold">Back</span></router-link></div>
        <aside class="flex gap-5">
            <div class="flex flex-col gap-2 items-center">
                <img src="@/assets/update.png" alt="updates" class="w-12">
                <button class="text-xs" @click="popUpControl.openModal">Update</button>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <img src="@/assets/inactive.png" alt="updates" class="w-12">
                <button class="text-xs" @click="popUpControl.promptDeactivate">Deactivate</button>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <img src="@/assets/blockprofile.png" alt="updates" class="w-12">
                <button class="text-xs" @click="popUpControl.promptBlock">Block</button>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <img src="@/assets/deleteprofile.png" alt="updates" class="w-12">
                <button class="text-xs" @click="popUpControl.promptDelete">Delete</button>
            </div>
        </aside>
        <transition-group name="fade">
          <confirmDialog
            v-if="popUpControl.showDeletePopUp"
            :img="deleteicon"
            title="Notice"
            message="Click 'Delete' to permanently remove this user. If you're unsure, click 'Cancel' to stop this action."
            @confirm="confirmDelete"
            @cancel="popUpControl.cancelDelete"
            button="Delete"
          />

          <confirmDialog
            v-if="popUpControl.showBlockPopup"
            :img="deactivate"
            title="Notice"
            message="Click 'Block' to deny this user access to perform any transaction in WeQuickPay. If you're unsure, click 'Cancel' to stop this action."
            @confirm="confirmBlock"
            @cancel="popUpControl.cancelDelete"
            button="Block"
          />

          <confirmDialog
            v-if="popUpControl.showDeactivatePopUp"
            :img="deactivate"
            title="Notice"
            message="Click 'Deactivate' to temporarily suspend this user's access to WeQuickPay. If you're uncertain, click 'Cancel' to abort this action."
            @confirm="confirmDeactivate"
            @cancel="popUpControl.cancelDelete"
            button="Deactivate"
          />
        </transition-group>
    </div>
</template>
<script setup>
import confirmDialog from "../confirmDialog.vue";
import deleteicon from "@/assets/delete.svg";
import deactivate from "@/assets/deactivate.svg";
import { usepopUpControl } from "@/stores/popUpControl.js";

// Access the store
const popUpControl = usepopUpControl();


const confirmBlock = () => {
  // Logic to block the account
  console.log("Account blocked");
  popUpControl.showBlockPopup = false;
};

const confirmDeactivate = () => {
  // Logic to deactivate the account
  console.log("Account deactivated");
};

// Function to confirm deletion
const confirmDelete = async () => {
//   try {
//     const response = await axios.delete(
//       `https://api.example.com/accounts/${selectedAccount.value.id}`
//     );
//     if (response.status === 200) {
//       // Remove the account from the list after successful deletion
//       accounts.value = accounts.value.filter(
//         (account) => account.id !== selectedAccount.value.id
//       );
//       console.log("Account deleted successfully");
//     }
//   } catch (error) {
//     console.error("Error deleting account:", error);
//   } finally {
//     // Close the modal and clear the selected account
//     popUpControl.showDeactivatePopUp = false;
//   }
console.log('deleteed')
};

</script>