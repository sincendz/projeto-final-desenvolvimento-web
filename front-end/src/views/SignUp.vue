<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-dark">
    <form
      class="p-4 bg-white border rounded shadow-sm"
      style="width: 520px"
      @submit.prevent="handleSubmit"
    >
      <img
        src="../img/aplicativo-web.png"
        class="img-fluid mx-auto d-block mb-3"
        alt="Imagem de Login"
        style="height: 80px; width: 80px"
      />
      <div class="row form-group mb-3">
        <div class="col">
          <label for="firstName" class="form-label">Primeiro Nome</label>
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            class="form-control"
            placeholder="Primeiro nome"
          />
        </div>
        <div class="col">
          <label for="lastName" class="form-label">Último Nome</label>
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            class="form-control"
            placeholder="Último nome"
          />
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
        <div v-if="passwordMismatch" class="text-danger mt-2">
          As senhas não coincidem.
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary w-100"
        :disabled="passwordMismatch"
      >
        Criar Conta
      </button>
      <!-- Modal de erro -->
      <div v-if="deuruim" class="modal fade show" style="display: block;">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"> Este e-mail já possui cadastro!</h5>
              <button type="button" class="btn-close" @click="funDeuRuim"></button>
            </div>
            <div class="modal-body">
              <p>{{ errorMessage }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="funDeuRuim">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { api } from "@/api";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";


const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const deuruim = ref(false);
const errorMessage = ref("");

const router = useRouter();

function funDeuRuim() {
  deuruim.value = false;
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
}

const passwordMismatch = computed(
  () => password.value !== confirmPassword.value
);

const handleSubmit = async () => {
  if (passwordMismatch.value) {
    return; 
  }

  try {
    const response = await api.post("/auth/local/register", {
      username: firstName.value + " " + lastName.value,
      email: email.value,
      password: password.value,
    });
    console.log("Usuário criado:", response.data);

    router.push('/login')

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  } catch (error) {
    deuruim.value = true;
    errorMessage.value =
      error.response?.data?.message || "Erro ao criar usuário.";
    console.error(error);
  }
};
</script>

<style scoped>
img {
  max-height: 80px;
  max-width: 80px;
}
.modal-backdrop {
  display: none; /* Esconder fundo do modal */
}
</style>
