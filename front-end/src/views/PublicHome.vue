<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '@/api';
import { isAxiosError } from 'axios';
import type { ApplicationError, Cafe } from '@/types/Cafe';

const cafes = ref([] as Cafe[]);
const loading = ref(true);
const exception = ref<ApplicationError | null>(null);

onMounted(async () => {
  try {
    const { data } = await api.get('/cafes', {
      params: {
        populate: 'cover',
      },
    });
    cafes.value = data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      // Garantir que 'message' esteja presente
      exception.value = {
        error: {
          name: error.name, // 'name' vem de AxiosError
          message: error.response?.data?.message || 'Erro desconhecido ao carregar os cafés.', // Mensagem obrigatória
          code: error.response?.status || 500, // 'code' é opcional
        },
      };
    }
  } finally {
    loading.value = false; // Finaliza o carregamento
  }
});

</script>

<template>
  <div v-if="exception" class="alert alert-danger" role="alert">
    {{ exception.error.message }}
  </div>

  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <CafeCard
      v-for="cafe in cafes"
      :key="cafe.id"
      :id="cafe.id"
      :name="cafe.name"
      :price="cafe.price"
      :summary="cafe.summary"
      :cover="cafe.cover"
    />
  </div>
</template>
