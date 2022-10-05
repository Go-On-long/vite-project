export const routes = [
    {
        path: "/",
        component: () => import("../components/HelloWorld.vue"),
        // component: () => import("../App.vue"),
        // children: [
        //     {
        //         path: "/hello",
        //         component: () => import("../components/HelloWorld.vue"),
        //     },
        // ],
    },
]
