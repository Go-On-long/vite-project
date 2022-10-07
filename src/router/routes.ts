export const routes = [
  {
    name: 'login',
    path: '/',
    component: () => import('../layout/login.vue'),
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('../layout/index.vue'),
    children: [
      {
        name: 'Order',
        path: '/Order',
        component: () => import('../components/Order/index.vue'),
      },
      {
        name: 'OrderForm',
        path: '/OrderForm',
        component: () => import('../components/OrderForm/index.vue'),
      },
      {
        name: 'UserCenter',
        path: '/UserCenter',
        component: () => import('../components/UserCenter/index.vue'),
      },
    ],
  },
]
