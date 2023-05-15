import {defineStore} from "pinia";
import TimeAgo from "javascript-time-ago";
import de from "javascript-time-ago/locale/de.json";
import en from "javascript-time-ago/locale/en";

export const useTimeAgoStore = defineStore('timeAgo', {
    state:  () => {
        TimeAgo.addDefaultLocale(en);
        TimeAgo.addLocale(de);

        const locale = localStorage.getItem('locale') || 'en';

        return {
            timeAgo: new TimeAgo(locale)
        };
    }
});