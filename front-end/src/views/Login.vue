<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-dark">
    <form
      @submit.prevent="login"
      class="p-4 bg-white border rounded shadow-sm"
      style="width: 300px"
    >
      <img
        src="../img/aplicativo-web.png"
        class="img-fluid mx-auto d-block mb-3"
        alt="Imagem de Login"
        style="height: 80px; width: 80px"
      />
      <div class="form-group mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Digite seu e-mail"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputPassword1" class="form-label">Senha</label>
        <input
          v-model="user.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Digite sua senha"
          required
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
import { api, BASE_URL } from "@/api";
import { useUserStore } from "@/stores/auth";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRouter();

const auth = useUserStore();

const user = reactive({
  email: "",
  password: "",
});

async function login() {
  try {
    // Correção: Usando o endpoint correto "/auth/local"
    const { data } = await api.post("/auth/local", {
      identifier: user.email, // O campo "identifier" é o e-mail ou username no Strapi
      password: user.password, // O campo "password" é a senha
    });

    const { jwt } = data;
   // console.log(jwt);
    //console.log("Login bem-sucedido:", data.user.username);

    const res = await api.get("/users/me", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      params: {
        populate: "role",
      },
    });
    auth.authenticaded(res.data, jwt);

    //console.log(res.data);

    // console.log(res);

    const role = res.data.role.type;
    // console.log(res);
    //console.log(role);

    route.push(role === 'admin' ? '/admin' : '/home');

    // console.log("Usarname " + auth.username);
    // console.log("Role = " + auth.user.role.name)

    // Você pode salvar o token JWT retornado para manter a sessão
    localStorage.setItem("jwt", jwt);
    //route.push("\home");
  } catch (error) {
    console.error(
      "Erro de login:",
      //error.response ? error.response.data : error.message
    );
  }
}
</script>

<style scoped>
img {
  max-height: 80px;
  max-width: 80px;
}
</style>
