<script setup lang="ts">
</script>

<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li v-for="(matched, idx) in this.$route.matched"
          :key="idx">
        <router-link
            :to="matched.path">
          {{ $t('page.' + matched.meta.title) }}
        </router-link>
      </li>
    </ul>
  </div>

</template>
