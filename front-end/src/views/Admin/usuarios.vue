<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api, BASE_URL } from "@/api";
import { useUserStore } from "@/stores/auth";
import type { User } from "@/types/Cafe";

const users = ref<User[]>([]);
const error = ref("");
const success = ref("");
const auth = useUserStore();

const username = ref("");
const password = ref("");
const email = ref("");
const role = ref("");
const idUsuario = ref(0);

function editarElementos(id:number,un:string,e_mail:string){
    idUsuario.value = id
    username.value = un
    email.value = e_mail
}


async function deletar(id: number) {
  try {
    const response = await api.delete(`/users/${idUsuario.value}`, {
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    });
    //success.value = "Café excluído com sucesso!";
    await fetchData(); // Atualiza a lista de cafés
  } catch (error) {
    console.log(error);
  }
}

const fetchData = async () => {
  try {
    const response = await api.get(BASE_URL + "/api/users/", {
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
      params: {
        populate: "role",
      },
    });
    users.value = response.data;
    //console.log(response.data);
  } catch (err) {
    error.value = `Erro ao buscar dados: ${err.message}`;
  }
};

const createUser = async () => {
  try {
    const response = await api.post(
      "/auth/local/register",
      {
        username: username.value,
        email: email.value,
        password: password.value,
        // Certifique-se de que 'role' é um objeto ou string compatível com a API
        role: role.value,
      },
      {
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      }
    );

    // Exibe uma mensagem de sucesso
    //success.value = "Usuário criado com sucesso!";

    // Atualiza a lista de usuários
    fetchData();
    // Reseta o formulário
    resetForm();
  } catch (err) {
    // Log detalhado do erro
    console.error(err.response?.data);
    error.value = `Erro ao criar usuário: ${
      err.response?.data?.message || err.message
    }`;
  }
};

function editUser(){
    try {
        console.log("Edit")
    } catch (error) {
        console.log("Deu ruim")
    }
}

const resetForm = () => {
  username.value = "";
  email.value = "";
  password.value = "";
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Role</th>
          <th scope="col">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#criarUsuario"
            >
              Criar Usuário
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role.type }}</td>
          <td>
            <button
              type="button"
              class="btn btn btn-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#apagarUsuario"
              @click="idUsuario = user.id"
            >
              Deletar
            </button>
            <button
              type="button"
              class="btn btn btn-warning btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#editarUsuario"
              @click="editarElementos(user.id,user.username,user.email)"
            >
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-if="success" class="alert alert-success">{{ success }}</div>
  </div>

  <!-- Modal criar usuario -->
  <div
    class="modal fade"
    id="criarUsuario"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Criar Usuário
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createUser">
            <div class="mb-3">
              <label for="userName" class="form-label">Nome</label>
              <input
                type="text"
                class="form-control"
                id="userName"
                v-model="username"
                placeholder="Digite o nome do usuário"
                required
              />
            </div>
            <div class="mb-3">
              <label for="userEmail" class="form-label">E-mail</label>
              <input
                type="email"
                class="form-control"
                id="userEmail"
                v-model="email"
                placeholder="Digite o e-mail do usuário"
                required
              />
            </div>
            <div class="mb-3">
              <label for="userPassword" class="form-label">Senha</label>
              <input
                type="password"
                class="form-control"
                id="userPassword"
                v-model="password"
                placeholder="Digite a senha do usuário"
                required
              />
            </div>
            <div class="mb-3">
              <label for="userRole" class="form-label">Role</label>
              <select class="form-select" id="userRole" v-model="role" required>
                <option value="" disabled selected>Selecione a role:</option>
                <option value="authenticated">Autenticado</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal apagar usuario -->
  <div
    class="modal fade"
    id="apagarUsuario"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Apagar item {{ idUsuario }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Você realmente quer apagar esse usuario? Essa ação não tem volta!
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
          <button
            @click="deletar(idUsuario)"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Apagar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal editar Usuario -->
  <div
    class="modal fade"
    id="editarUsuario"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Editar Usuário {{ idUsuario }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createUser">
            <div class="mb-3">
              <label for="userName" class="form-label">Nome</label>
              <input
                type="text"
                class="form-control"
                id="userName"
                v-model="username"
                placeholder="Digite o nome do usuário"
                required
              />
            </div>
            <div class="mb-3">
              <label for="userEmail" class="form-label">E-mail</label>
              <input
                type="email"
                class="form-control"
                id="userEmail"
                v-model="email"
                placeholder="Digite o e-mail do usuário"
                required
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="editUser()"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
