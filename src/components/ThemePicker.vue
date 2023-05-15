<script setup lang="ts">
import {ref} from "vue";

const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];
const currentTheme = ref(localStorage.theme || 'bumblebee');
const changeTheme = (theme) => {
  document.querySelector('html').dataset.theme = theme;
}

const restoreTheme = () => {
  document.querySelector('html').dataset.theme = localStorage.theme || 'bumblebee';
}

const saveTheme = (theme) => {
  localStorage.theme = theme;
  currentTheme.value = theme;
  changeTheme(theme);
}

</script>

<template>
  <div class="p-2" v-for="theme in themes" :key="theme">
        <button @click="saveTheme(theme)"
                v-on:mouseover="changeTheme(theme)"
                v-on:mouseleave="restoreTheme"
                class="btn"
                :class="currentTheme === theme ? 'btn-primary' : 'btn-ghost'"
        >
          {{ theme }}
        </button>
  </div>
</template>

<style scoped>

</style>