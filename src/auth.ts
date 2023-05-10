import {useUserStore} from "./stores/user.ts";
import Cookies from "js-cookie";


export type User =
{
    name: string,
    email: string,
    jwt: string
}

export const isLoggedIn = () => {
    const userStore = useUserStore();
    return userStore.user !== null;
}

export const signIn = (user: User) => {
    const userStore = useUserStore();
    userStore.user = user;
    Cookies.set('user', JSON.stringify(user));
}

export const signOut = () => {
    const userStore = useUserStore();
    userStore.user = null;
    Cookies.remove('user');
}