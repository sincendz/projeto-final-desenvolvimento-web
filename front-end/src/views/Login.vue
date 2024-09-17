<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <form class="p-4 bg-white border rounded shadow-sm" style="width: 300px">
      <img
        src="../img/aplicativo-web.png"
        class="img-fluid mx-auto d-block mb-3"
        alt="Imagem de Login"
        style="height: 80px; width: 80px"
      />
      <div class="form-group mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Digite seu e-mail"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputPassword1" class="form-label">Senha</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Digite sua senha"
        />
      </div>
      <div class="form-check mb-3">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Lembrar-me</label>
      </div>
      <button type="submit" class="btn btn-primary w-100">Entrar</button>

      <router-link to="/signup"> Sing Up </router-link>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
</script>

<style scoped>
img {
  max-height: 80px;
  max-width: 80px;
}
</style>
