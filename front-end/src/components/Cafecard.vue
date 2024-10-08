<template>
  <div>
    <div class="container">
      <div class="row g-4">
        <!-- g-4 adiciona espaçamento entre os cards -->
        <div
          class="col-md-4 d-flex align-items-stretch"
          v-for="item in cafes"
          :key="item.id"
        >
          <div class="card mb-4 h-100">
            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-center mb-3">
                <img
                  :src="BASE_URL + item.foto.url"
                  :alt="item.name"
                  class="img-fluid card-image"
                />
              </div>
              <h5 class="card-title text-center">{{ item.name }}</h5>
              <p class="card-text text-center">{{ item.summary }}</p>
              <div class="mt-auto">
                <p class="card-text">
                  <strong>Preço:</strong> R$ {{ item.price.toFixed(2) }}
                  <button
                    @click="pegarIdCafe(item.id)"
                    class="btn btn-outline-primary"
                  >
                    <i class="fa-solid fa-cart-plus"></i>
                  </button>
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    Criado em:
                    {{ new Date(item.createdAt).toLocaleDateString() }}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api, BASE_URL } from "@/api";
import { useCounterStore } from "@/stores/counter";

const idUsuario = localStorage.getItem("id"); // ID do usuário logado
const jwt = localStorage.getItem("jwt");
const idCafe = ref(0);

const cafes = ref([]);
const error = ref("");

const counter = useCounterStore();

function pegarIdCafe(id: number) {
  idCafe.value = id;
  counter.increment;
  addItensCarrinho();
}

const addItensCarrinho = async () => {
  const cafes = await api.get(`/cafes/${idCafe.value}`);
  const cafe = cafes.data.data;
  //console.log(cafe);
  const usuarios = await api.get(`/users/${idUsuario}`);
  const usuario = usuarios.data;
  //console.log(usuario);

  try {
    const response = await api.post("/pedidos", {
      data: {
        quantidade: 1,
        user: usuario,
        cafes: cafe,
      },
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log(response);
  } catch (error) {
    if (error.response) {
      console.log(
        "Erro ao incluir os cafes no carrinho:",
        error.response.status,
        error.response.data
      );
    } else {
      console.log("Erro ao incluir os cafes no carrinho:", error.message.data);
    }
  }
};

const fetchData = async () => {
  try {
    const response = await api.get(BASE_URL + "/api/cafes?populate=*");
    cafes.value = response.data.data;
    //console.log(response.data.data);
  } catch (err) {
    error.value = `Erro ao buscar dados: ${err.message}`;
  }
};


// Modal Registra usuario


onMounted(fetchData);
</script>

<style scoped>
.card {
  width: 100%;
  min-height: 400px; /* Altura mínima para garantir que todos os cards tenham o mesmo tamanho */
}

.card-image {
  max-height: 150px; /* Limite de altura para a imagem */
  object-fit: cover; /* A imagem mantém a proporção dentro do limite */
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-body:hover {
  transform: scale(1.08);
  background-color: aqua;
}

.card-title,
.card-text {
  text-align: center; /* Centralizando o texto */
}
</style>
