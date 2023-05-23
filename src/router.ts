import {createRouter, createWebHistory, Router, RouteRecordRaw, RouterView} from "vue-router";
import Dashboard from "./pages/Dashboard/Dashboard.vue";
import Login from "./pages/Login.vue";
import Start from "./pages/Dashboard/Start.vue";
import NotFound from "./pages/Dashboard/NotFound.vue";
import {isLoggedIn} from "./auth.ts";
import Sensors from "./pages/Dashboard/Station/Sensors.vue";
import Profile from "./pages/Dashboard/Profile/Profile.vue";
import Overview from "./pages/Dashboard/Station/Overview.vue";
import Sensor from "./pages/Dashboard/Station/Sensor.vue";
import Alarm from "./pages/Dashboard/Alarm.vue";

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
                name: 'dashboard',
                component: Start,
                meta: {
                    title: 'start',
                    breadcrumbs: []
                }
            },
            {
                path: 'profile',
                component: Profile,
                name: 'dashboard.profile',
                meta: {
                    title: 'profile',
                    breadcrumbs: [
                        'dashboard',
                    ]
                }
            },
            {
                path: 'alarm',
                component: Alarm,
                name: 'dashboard.alarm',
                meta: {
                    title: 'alarm',
                    breadcrumbs: [
                        'dashboard',
                    ]
                }
            },
            {
                path: '/station',
                component: RouterView,
                meta: {
                    title: 'stations',
                },
                children: [
                    {
                        path: '',
                        component: Overview,
                        name: 'dashboard.stations',
                        meta: {
                            title: 'overview',
                            breadcrumbs: [
                                'dashboard',
                            ]
                        },
                    },
                    {
                        path: ':station',
                        name: 'dashboard.station',
                        component: Sensors,
                        meta: {
                            title: 'sensors',
                            breadcrumbs: [
                                'dashboard',
                                'dashboard.stations',
                            ]
                        }
                    },
                    {
                        path: ':station/:sensor',
                        name: 'dashboard.station.sensor',
                        component: Sensor,
                        meta: {
                            title: 'sensor',
                            breadcrumbs: [
                                'dashboard',
                                'dashboard.stations',
                                'dashboard.station'
                            ]
                        }
                    },
                ]
            },

        ],
    },
    {
        path: '/login',
        name: 'login',
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