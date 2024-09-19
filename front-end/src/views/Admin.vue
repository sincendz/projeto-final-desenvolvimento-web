<script lang="ts">
import { ref, onMounted } from "vue";
import { api, BASE_URL } from "@/api";
import type { Cafe } from "@/types/Cafe";

export default {
  setup() {
    const cafes = ref<Cafe[]>([]);
    const error = ref("");
    const success = ref("");

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
        success.value = ""; // Limpa a mensagem de sucesso após a atualização dos dados
      } catch (err: any) {
        error.value = `Erro ao buscar dados: ${err.message}`;
      }
    };

    onMounted(fetchData);

    return {
      cafes,
      error,
      success,
      BASE_URL,
      deletar,
    };
  },
};
</script>

<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 130vh; background-color: #f8f9fa;">
    <div class="container">
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <div v-if="success" class="alert alert-success" role="alert">
        {{ success }}
      </div>
      <div v-else>
        <div class="d-flex justify-content-between mb-3">
          <h2 class="text-primary">Lista de Cafés</h2>
          <RouterLink to="/create" type="button" class="btn btn-success">
            <i class="bi bi-plus-lg"></i> Novo Café
          </RouterLink>
        </div>
        <table class="table table-hover table-bordered table-striped shadow-sm">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Descrição</th>
              <th scope="col">Foto</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cafes" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.price.toFixed(2) }} R$</td>
              <td>{{ item.summary }}</td>
              <td v-if="item.foto && item.foto.length > 0">
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
                <button @click="deletar(item.id)" type="button" class="btn btn-danger btn-sm">
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
