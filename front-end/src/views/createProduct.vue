<template>
  <div class="container">
    <h2>Adicionar Café</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="cafe.name"
          required
        />
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Preço</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="cafe.price"
          required
        />
      </div>

      <div class="mb-3">
        <label for="summary" class="form-label">Descrição</label>
        <textarea
          class="form-control"
          id="summary"
          v-model="cafe.summary"
          required
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="photo" class="form-label">Foto</label>
        <input
          type="file"
          class="form-control"
          id="photo"
          @change="handleFileUpload"
        />
      </div>

      <button type="submit" class="btn btn-primary">Adicionar Café</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { BASE_URL, api } from '@/api';
import { useAuth } from '@/stores/auth';
import { ref } from 'vue';

const auth = useAuth()

const cafe = ref({
  name: "",
  price: "",
  summary: "",
  foto: null as File | null,
});

function handleFileUpload(event: Event) {
  const inputEvent = event as InputEvent
  const target = inputEvent.target as HTMLInputElement
  cafe.value.foto = target.files?.item(0) as File
}

const submitForm = async () =>{
  try {
    const formData = new FormData();
    formData.append('files.foto', cafe.value.foto as File)
    formData.append("data",JSON.stringify({
      name: cafe.value.name,
      price: cafe.value.price,
      summary: cafe.value.summary,
    }))

    const response = await api.post('/cafes', formData,{
      headers:{
        Authorization: `Bearer ${auth.jwt}`
      }
    })
    console.log(response.data.data)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
