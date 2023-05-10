import {defineStore} from "pinia";
import Cookies from "js-cookie";

export const useUserStore = defineStore('user', {
    state: () => {
        let user = Cookies.get('user');
        if (user != undefined) {
            return {
                user: JSON.parse(user)
            }
        }

        return {
            user: null
        }
    }
});