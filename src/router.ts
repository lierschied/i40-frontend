import {createRouter, createWebHistory, Router, RouteRecordRaw, RouterView} from "vue-router";
import Dashboard from "./pages/Dashboard/Dashboard.vue";
import Login from "./pages/Login.vue";
import Default from "./pages/Dashboard/Default.vue";
import NotFound from "./pages/Dashboard/NotFound.vue";
import {isLoggedIn} from "./auth.ts";
import Station from "./pages/Dashboard/Stations/Station.vue";
import PalletStorage from "./pages/Dashboard/Stations/PalletStorage.vue";
import Sensors from "./pages/Dashboard/Stations/Sensors.vue";
import Index from "./pages/Dashboard/Stations/Index.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Dashboard,
        meta: {
            requiresAuth: true,
            title: 'dashboard',
        },
        children: [
            {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: {title: 'not_found'}},
            {
                path: '',
                component: Default,
                meta: {
                    title: 'start',
                }
            },
            {
                path: '/station',
                component: RouterView,
                meta: {
                    title: 'station'
                },
                children: [
                    {
                        path: '',
                        component: Station,
                        meta: {
                            title: 'overview'
                        },
                    },
                    {
                        path: 'pallet-storage',
                        component: Index,
                        meta: {
                            title: 'pallet_storage'
                        },
                        children: [

                            {
                                path: 'sensors',
                                component: Sensors,
                                meta: {
                                    title: 'sensors'
                                }
                            },
                            {
                                path: 'overview',
                                component: PalletStorage,
                                meta: {
                                    title: 'overview',
                                }
                            }
                        ],
                    },
                ]
            },

        ],
    },
    {
        path: '/login',
        component: Login,
        meta: {
            requiresAuth: false,
            title: 'Login'
        },
        beforeEnter: (from) => {
            if (isLoggedIn()) {
                return from;
            }
        }
    },
];

export const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    if (to.meta.requiresAuth && !isLoggedIn()) {
        return {
            path: '/login',
            query: {redirect: to.fullPath},
        };
    }
})

// function isLoggedIn(): boolean {
//     return localStorage.getItem('jwt') !== null;
// }

export function isActive(path: string): boolean {
    return router.currentRoute.value.path == path;
}