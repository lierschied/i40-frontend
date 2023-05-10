import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import {router} from "./router.ts";
// @ts-ignore
import {createI18n} from "vue-i18n";
import {messages} from "./translations.ts";
import {createPinia} from "pinia";

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') ||'en',
    fallbackLocale: 'en',
    messages,
});

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .use(i18n)
    .mount('#app');
