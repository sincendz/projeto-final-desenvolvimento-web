<script setup lang="ts">
import { BASE_URL, api } from "@/api";
import { ref, onMounted } from "vue";

const idUsuario = localStorage.getItem("id"); // ID do usuário logado

const pedidos = ref([]);
const error = ref("");

const pedidoId = ref(0);

function idPedido(id: number) {
  pedidoId.value = id;
}

const fetchData = async () => {
  try {
    const response = await api.get("/pedidos/?populate=*");
    // Filtrar os pedidos que pertencem ao usuário logado
    pedidos.value = response.data.data.filter(
      (pedido) => pedido.user.id == idUsuario
    );
    //console.log(pedidos.value);
  } catch (err) {
    error.value = `Erro ao buscar dados: ${err.message}`;
  }
};

async function deletar() {
  try {
    const response = await api.delete(`/pedidos/${pedidoId.value}`);
    fetchData();
  } catch (error) {
    console.log("Erro ao deletar Pedido" + error);
  }
}

// Função para incrementar a quantidade
const incrementar = async (pedido) => {
  pedido.quantidade++;

  try {
    // Envia a quantidade atualizada no formato esperado pela API
    const response = await api.put(`/pedidos/${pedido.id}`, {
      data: { quantidade: pedido.quantidade },
    });
  } catch (error) {
    console.log(
      "Erro ao incrementar quantidade:",
      error.response?.data || error
    );
  }
};

// Função para decrementar a quantidade
const decrementar = async (pedido) => {
  if (pedido.quantidade > 1) {
    pedido.quantidade--;

    try {
      const response = await api.put(`/pedidos/${pedido.id}`, {
        data: { quantidade: pedido.quantidade },
      });
    } catch (error) {
      console.log(
        "Erro ao decrementar quantidade:",
        error.response?.data || error
      );
    }
  }
};

onMounted(fetchData);
</script>

<template>
  <h1>Tabela de Produtos</h1>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Nome do Produto</th>
        <th>Quantidade</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pedido in pedidos" :key="pedido.id">
        <td v-for="cafe in pedido.cafes" :key="cafe.id">{{ cafe.name }}</td>
        <td>
          <!-- Input group para botões de + e - com a quantidade -->
          <div class="input-group input-group-sm">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="decrementar(pedido, pedido.id)"
            >
              -
            </button>
            <input
              type="text"
              class="form-control text-center"
              :value="pedido.quantidade"
              readonly
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="incrementar(pedido, pedido.id)"
            >
              +
            </button>
          </div>
        </td>
        <td>
          <button
            @click="idPedido(pedido.id)"
            type="button"
            class="btn btn-danger btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#apagarCafe"
          >
            <i class="bi bi-trash"></i>
            Apagar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-if="error">{{ error }}</p>

  <!-- Modal Excluir do Carrinho -->
  <div
    class="modal fade"
    id="apagarCafe"
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
        <div class="modal-body">
          Você realmente quer apagar esse item? Essa ação não tem volta!
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
            @click="deletar(pedidoId)"
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
</template>

<style scoped>
.table {
  width: 100%;
  margin-top: 20px;
}
.input-group {
  max-width: 150px;
}
</style>
