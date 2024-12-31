<template>
    <div class="bg-white">
          <table class="w-full border-collapse mt-8 overflow-hidden bg-white rounded-md">
          <thead>
            <tr class="bg-main text-white">
              <!-- Placeholder for checkbox column -->

              <th class="py-4 px-4 text-sm font-light text-start">
                Module Permission
              </th>
              <th class="py-4 px-4 text-sm font-light text-start">Read</th>
              <th class="py-4 px-4 text-sm font-light text-start">Write</th>
              <th class="py-4 px-4 text-sm font-light text-start">Delete</th>
              <th class="py-4 px-4 text-sm font-light text-start">Update</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b-2  border-slate-100">
              <td class="py-6 px-4 text-sm font-light text-start">
                Agents
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-4 px-4 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
            </tr>
            <tr class="border-b-2  border-slate-100">
              <td class="py-6 px-4 text-sm font-light text-start">
                Editors
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-4 px-4 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
            </tr>
            <tr class="border-b-2  border-slate-100">
              <td class="py-6 px-4 text-sm font-light text-start">
                Admins
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-4 px-4 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
            </tr>
            <tr class="border-b-2  border-slate-100">
              <td class="py-6 px-4 text-sm font-light text-start">
                Subscribers
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-6 px-6 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
              <td class="py-4 px-4 text-sm font-light text-start">
                <input
                  type="checkbox"
                  v-model="selectedAccounts"
                  :value="account"
                  class="h-4 aspect-square accent-indigo-800"
                />
              </td>
            </tr>
  
          </tbody>
        </table>
        <div class="bg-white py-6 px-4">
            <button class="bg-main ml-auto flex gap-4 justify-center items-center text-sm my-2 text-white py-3 px-10 rounded-3xl">Update Permission</button>
        </div>
    </div>
        
</template>
<script setup></script>