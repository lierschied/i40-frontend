import {defineStore} from "pinia";
import Cookies from "js-cookie";

type User = {
    id: string,
    email: string,
    name: string,
    jwt: string,
    icon: string,
}
export const useUserStore = defineStore('user', {
    state: (): { user: null } | { user: User } => {
        let userCookie: string | undefined = Cookies.get('user');
        if (userCookie === undefined) {
            return {
                user: null
            }
        }

        let user: User = JSON.parse(userCookie);

        //retrieving jwt payload
        let payload = user.jwt.split(".")[1];
        let pub = JSON.parse(atob(payload));
        let exp = new Date(pub.exp);
        //delete user cookie if it is expired
        if (exp > new Date()) {
            Cookies.remove('user');
            return {
                user: null
            };
        }
        return {
            user: user
        }

    },

    getters: {
        validJwt: (state) => {
            let pub = state.user.jwt.split(".")[1];
            return JSON.parse(atob(pub));
        }
    }
});