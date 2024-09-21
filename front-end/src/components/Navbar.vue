<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <!-- Logo e Marca -->
      <div class="d-flex align-items-center">
        <img
          src="../img/filtro-de-cafe.png"
          alt="Filtro de Café Logo"
          class="navbar-logo me-2"
        />
        <a class="navbar-brand">CoffeeShop</a>
      </div>

      <!-- Toggler para mobile -->
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

      <!-- Links e conteúdo da Navbar -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Links de navegação à esquerda -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/home"
              >Home</RouterLink
            >
          </li>
          <!-- Outras rotas se necessário -->
        </ul>

        <!-- Área do usuário e carrinho à direita -->
        <ul class="navbar-nav ms-auto d-flex align-items-center">
          <!-- Imagem e saudação do usuário -->
          <li class="nav-item d-flex align-items-center" v-if="isAuthenticated">
            <img
              src="../img/user.png"
              alt="Imagem Usuario"
              class="navbar-logo me-2"
            />
            <span class="nav-link">Olá, {{ user.username }}</span>
          </li>

          <!-- Botão de Logout -->
          <li class="nav-item" v-if="isAuthenticated">
            <button class="btn btn-danger ms-3" @click="logout">Logout</button>
          </li>

          <!-- Botão de Login -->
          <li class="nav-item" v-else>
            <RouterLink class="btn btn-secondary ms-3" to="/login"
              >Login</RouterLink
            >
          </li>

          <!-- Carrinho de compras -->
          <li class="nav-item ms-4">
            <div id="shopping-cart">
              <button type="button" class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" >
                <i class="fas fa-shopping-cart"></i> Carrinho
                <span class="badge bg-secondary"> {{ counter.count }}</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- offcanvas pedidos -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </div>
      <div class="dropdown mt-3">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" @click="counter.count = 0" >Limpar carrinho</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useAuth } from "@/stores/auth";
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
const auth = useAuth();
const router = useRouter();
const isAuthenticated = computed(() => auth.isAuthenticated());
const user = computed(() => auth.user);

function logout() {
  auth.clearAuth(); // Limpar a autenticação
  localStorage.removeItem("jwt"); // Remover o JWT do localStorage
  router.push("/login"); // Redirecionar para a página de login
}
</script>

<style scoped>
.navbar-logo {
  width: 40px;
}
.navbar-nav .nav-link {
  color: white;
}
</style>
