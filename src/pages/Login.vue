<script setup lang="ts">
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {signIn} from "../auth.ts";
import {useI18n} from "vue-i18n";
const {locale} = useI18n();
const router = useRouter();

const credentials = reactive({
  username: '',
  password: ''
});

const errors = reactive({
  username: false,
  password: false
});

const setLocale = () => {
  localStorage.setItem('locale', locale.value);
}

async function login() {
  if (credentials.username == '' || credentials.password == '') {
    errors.username = credentials.username == '';
    errors.password = credentials.password == '';
    return;
  }
  let formData = new FormData();
  formData.append('email', credentials.username);
  formData.append('password', credentials.password);
  await fetch('http://127.0.0.1:8080/signin', {
    body: new URLSearchParams(formData),
    method: 'POST'
  }).then((r) => r.json().then(
      (json) => {
        signIn(json);
        router.push('/');
      }
  )).catch(e => {
    errors.password = e.message;
    errors.username = e.message;
    return;
  });
}
</script>

<template>
  <div class="bg-white">
    <div class="flex justify-center h-screen">
      <div class="hidden bg-cover lg:block lg:w-2/3"
           style="background-image: url(https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1612&q=80)">
        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <h2 class="text-4xl font-bold text-white">I4.0 Dashboard</h2>
            <p class="max-w-xl mt-3 text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
              molestiae
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-gray-700">I4.0 Dashboard</h2>

            <p class="mt-3 text-gray-500">{{ $t('login.signin_long') }}</p>
            <select class="select" v-model="$i18n.locale" @change="setLocale">
              <option v-for="x in $i18n.availableLocales" :key="`locale-${x}`" :value="x" >{{ x }}</option>
            </select>
          </div>

          <div class="mt-8">
            <form>
              <div>
                <label for="email"
                       class="block mb-2 text-sm text-gray-600">
                  {{ $t('login.email') }}
                </label>
                <input v-model="credentials.username" type="email" name="email" id="email"
                       placeholder="example@example.com"
                       class="block bg-transparent w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 border rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                       :class="errors.username ? 'border-red-500' : 'border-gray-200'"/>
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600">
                    {{ $t('login.password') }}
                  </label>
                  <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">
                    {{ $t('login.forgot_password') }}
                  </a>
                </div>
                <input v-model="credentials.password" type="password" name="password" id="password"
                       placeholder="Your Password"
                       class="block bg-transparent w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                       :class="errors.password ? 'border-red-500' : 'border-gray-200'"/>
              </div>

              <div class="mt-6">
                <button @click.prevent="login()"
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  {{ $t('login.signin') }}
                </button>
              </div>

            </form>

            <p class="mt-6 text-sm text-center text-gray-400">
              {{ $t('login.account_creation_phrase') }}&nbsp;
              <a href="#"
                 class="text-blue-500 focus:outline-none focus:underline hover:underline">
                {{ $t('login.signup') }}
              </a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>