import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/Set-New-password',
      name: 'New-password',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/new-password.vue')
    },
    {
      path: '/Reset-password',
      name: 'Reset-password',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResetPassword.vue')
    },
       {
      path: '/verify-otp',
      name: 'verify-otp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/verify-Otp.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dashboard.vue')
    },
    {
      path: '/AllUsers',
      name: 'All-users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AllUsers.vue')
    },
      {
      path: '/user-details',
      name: 'user-details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/userDetails.vue')
    },
    {
      path:'/Agents',
      name:'Agents',
      component:()=> import('../views/Agents.vue')
    },
    {
      path:'/Transactions',
      name:'Transactions',
      component:()=> import('../views/Transactions.vue')
    },
    {
      path:'/VerifyKYC',
      name:'VerifyKYC',
      component:()=> import('../views/Kyc.vue')
  },
  {
    path:'/transaction-details',
    name:'transaction-details',
    component:()=> import('../views/transactionDetails.vue')
},
{
  path:'/kyc-details',
  name:'kyc-details',
  component:()=> import('../views/kycDetails.vue')
},
{
  path:'/Notifications',
  name:'Notifications',
  component:()=> import('../views/notification.vue')
},
{
  path:'/Settings',
  name:'Settings',
  component:()=> import('../views/Settings.vue')
},
{
  path:'/Add-New-Role',
  name:'Add new role',
  component:()=>import('../views/AddNewRole.vue')
},{
  path:'/Update-Role',
  name:'Update',
  component:()=>import('../views/upDateRole.vue')
},{
  path:'/Faqs',
  name:'Faqs',
  component:()=>import('../views/Faqs.vue')
}
  ]
})

export default router
