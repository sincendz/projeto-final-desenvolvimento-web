<template>
  <header>
    <Navbar/>
  </header>

  <main class="pt-5"> <!-- Ajuste o valor da margem conforme necessário -->
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
header {
  position: relative;
}

main {
  padding-top: 56px; /* Ajuste este valor para corresponder à altura da sua navbar */
}
</style>
