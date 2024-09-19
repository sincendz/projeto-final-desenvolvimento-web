<template>
  <div class="container mt-5">
    <form @submit.prevent="submitForm">
      <!-- Formulário -->
      <div class="mb-3">
        <label for="name" class="form-label">Nome do Café</label>
        <input
          type="text"
          id="name"
          v-model="cafe.name"
          class="form-control"
          placeholder="Digite o nome do café"
          required
        />
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Preço</label>
        <input
          type="number"
          id="price"
          v-model="cafe.price"
          class="form-control"
          placeholder="Digite o preço"
          required
        />
      </div>

      <div class="mb-3">
        <label for="summary" class="form-label">Resumo</label>
        <textarea
          id="summary"
          v-model="cafe.summary"
          class="form-control"
          rows="3"
          placeholder="Digite um resumo do café"
          required
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="foto" class="form-label">Imagem de Capa</label>
        <input
          type="file"
          class="form-control"
          id="foto"
          @change="handleFileUpload"
        />
      </div>

      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { api } from '@/api';

const cafe = ref({
  name: '',
  price: '',
  summary: '',
  foto: null,
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    cafe.value.foto = file;
  }
};

const submitForm = async () => {
  try {
    const formData = new FormData();
    formData.append('data', JSON.stringify({
      name: cafe.value.name,
      price: cafe.value.price,
      summary: cafe.value.summary,
    }));
    if (cafe.value.foto) {
      formData.append('files.foto', cafe.value.foto);
    }

    const response = await api.post('/cafes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Limpar o formulário após o envio
    cafe.value = {
      name: '',
      price: '',
      summary: '',
      foto: null,
    };

    // Mostrar mensagem de sucesso
    alert('Café enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar dados:', error.response ? error.response.data : error.message);
    if (error.response) {
      console.error('Detalhes do erro:', error.response.data);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 50px;
}

.form-control, .form-control-file {
  border-radius: 0.25rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>
