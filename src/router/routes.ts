export const routes = [
  {
    name: 'login',
    path: '/',
    component: () => import('../layout/login.vue'),
    // component: () => import("../App.vue"),
    // children: [
    //     {
    //         path: "/hello",
    //         component: () => import("../components/HelloWorld.vue"),
    //     },
    // ],
  },
]
