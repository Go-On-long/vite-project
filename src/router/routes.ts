export const routes = [
  {
    name: 'login',
    path: '/',
    component: () => import('../layout/login.vue'),
    meta: {
      title: '登录页',
      Authentication: false,
    },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('../layout/index.vue'),
    meta: {
      title: '首页',
      Authentication: true,
    },
    children: [
      {
        name: 'Order',
        path: '/Order',
        component: () => import('../components/Order/index.vue'),
        meta: {
          title: '点餐',
          Authentication: true,
        },
      },
      {
        name: 'OrderForm',
        path: '/OrderForm',
        component: () => import('../components/OrderForm/index.vue'),
        meta: {
          title: '订单',
          Authentication: true,
        },
      },
      {
        name: 'UserCenter',
        path: '/UserCenter',
        component: () => import('../components/UserCenter/index.vue'),
        meta: {
          title: '个人中心',
          Authentication: true,
        },
      },
    ],
  },
]
