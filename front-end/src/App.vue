<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import AppNavBar from './components/AppNavBar.vue'
</script>

<template>
  <nav>
    <AppNavBar />
  </nav>

  <RouterView />
</template>

<style scoped></style>
