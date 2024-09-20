<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api, BASE_URL } from "@/api";
import type { Cafe } from "@/types/Cafe";

const cafes = ref<Cafe[]>([]);
const error = ref("");
const success = ref("");
// const modalDeletar = ref(false);
const idCafeDeletar = ref(0)


function idCafe(id:number){
  idCafeDeletar.value = id;
}

async function deletar(id: number) {
  try {
    await api.delete(`/cafes/${id}`);
    success.value = "Café excluído com sucesso!";
    await fetchData(); // Atualiza a lista de cafés
  } catch (err: any) {
    error.value = `Erro ao excluir café: ${err.message}`;
  }
}

const fetchData = async () => {
  try {
    const response = await api.get(BASE_URL + "/api/cafes?populate=*");
    cafes.value = response.data.data;
    // console.log(response.data.data)
    success.value = "";
  } catch (err: any) {
    error.value = `Erro ao buscar dados: ${err.message}`;
  }
};

onMounted(fetchData);
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <div v-if="success" class="alert alert-success" role="alert">
        {{ success }}
      </div>
      <div v-else>
        <table class="table table-hover table-bordered table-striped shadow-sm">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Descrição</th>
              <th scope="col">Foto</th>
              <th scope="col">
                <RouterLink to="/create" type="button" class="btn btn-success">
                  <i class="bi bi-plus-sm"></i> Novo Café
                </RouterLink>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cafes" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.price.toFixed(2) }} R$</td>
              <td>{{ item.summary }}</td>
              <td v-if="item.foto">
                <img
                  :src="BASE_URL + item.foto[0].url"
                  :alt="item.name"
                  class="img-fluid rounded"
                  style="max-width: 100px"
                />
              </td>
              <td v-else>
                <span class="text-muted">Sem foto disponível</span>
              </td>
              <td>
                <button
                  @click="idCafe(item.id)"
                  type="button"
                  class="btn btn-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="bi bi-trash"></i>
                </button>
                <button type="button" class="btn btn-warning btn-sm">
                  <i class="bi bi-pencil"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Modal Exluir os cafes -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Apagar item</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Voce realmente quer apagar esse item? Essa acao nao tem volta!</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
          <button @click="deletar(idCafeDeletar)" type="button" class="btn btn-primary" data-bs-dismiss="modal" >Apagar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-hover tbody tr:hover {
  background-color: #e9ecef;
}
thead.thead-dark {
  background-color: #343a40;
  color: white;
}
</style>
