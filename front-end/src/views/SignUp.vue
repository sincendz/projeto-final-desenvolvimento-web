<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <form class="p-4 bg-white border rounded shadow-sm" style="width: 520px" @submit.prevent="handleSubmit">
        <img
          src="../img/aplicativo-web.png"
          class="img-fluid mx-auto d-block mb-3"
          alt="Imagem de Login"
          style="height: 80px; width: 80px"
        />
        <div class="row form-group mb-3">
          <div class="col">
            <label for="firstName" class="form-label">Primeiro Nome</label>
            <input type="text" id="firstName" v-model="firstName" class="form-control" placeholder="Primeiro nome" />
          </div>
          <div class="col">
            <label for="lastName" class="form-label">Último Nome</label>
            <input type="text" id="lastName" v-model="lastName" class="form-control" placeholder="Último nome" />
          </div>
        </div>
        <div class="form-group mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password" class="form-label">Senha</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="Digite sua senha"
          />
        </div>
        <div class="form-group mb-3">
          <label for="confirmPassword" class="form-label">Repetir Senha</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            class="form-control"
            placeholder="Repita sua senha"
          />
          <div v-if="passwordMismatch" class="text-danger mt-2">As senhas não coincidem.</div>
        </div>
        <div class="form-check mb-3">
          <input type="checkbox" id="rememberMe" v-model="rememberMe" class="form-check-input" />
          <label class="form-check-label" for="rememberMe">Lembrar-me</label>
        </div>
        <button type="submit" class="btn btn-primary w-100" :disabled="passwordMismatch">Criar Conta</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const rememberMe = ref(false);
  
  const passwordMismatch = computed(() => password.value !== confirmPassword.value);
  
  const handleSubmit = () => {
    if (passwordMismatch.value) {
      return; // Não submeter o formulário se as senhas não coincidirem
    }
    // Adicione sua lógica de envio aqui
    console.log({ firstName: firstName.value, lastName: lastName.value, email: email.value, password: password.value, rememberMe: rememberMe.value });
  };
  </script>
  
  <style scoped>
  img {
    max-height: 80px;
    max-width: 80px;
  }
  </style>
  