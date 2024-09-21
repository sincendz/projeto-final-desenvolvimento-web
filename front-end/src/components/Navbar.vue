<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <img src="../img/filtro-de-cafe.png" alt="Filtro de Café Logo" class="navbar-logo">
      <a class="navbar-brand">CoffeeShop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/home">Home</RouterLink>
          </li>
          <!-- Outras rotas se necessário -->
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <img v-if="isAuthenticated" src="../img//user.png" alt="Imagem Usuario" class="navbar-logo">
          <li class="nav-item" v-if="isAuthenticated">
            <span  class="nav-link">Olá, {{ user.username }}</span>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <button class="btn btn btn-danger" @click="logout">Logout</button>
          </li>
          <li class="nav-item" v-else>
            <RouterLink class=" btn btn-secondary" to="/login">Login</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { computed } from 'vue';
import { useAuth } from '@/stores/auth';

const auth = useAuth();
const router = useRouter();
const isAuthenticated = computed(() => auth.isAuthenticated());
const user = computed(() => auth.user);

function logout() {
  auth.clearAuth(); // Limpar a autenticação
  localStorage.removeItem('jwt'); // Remover o JWT do localStorage
  router.push('/login'); // Redirecionar para a página de login
}
</script>

<style scoped>
.navbar-logo {
  width: 40px;
}
</style>
