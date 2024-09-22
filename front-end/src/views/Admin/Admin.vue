<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api, BASE_URL } from "@/api";
import type { Cafe } from "@/types/Cafe";
import { useUserStore } from "@/stores/auth";

const cafes = ref<Cafe[]>([]);
const error = ref("");
const success = ref("");
const idCafeDeletar = ref(0);

const auth = useUserStore();

function idCafe(id: number) {
  idCafeDeletar.value = id;
}

async function deletar(id: number) {
  try {
    const response = await api.delete(`/cafes/${id}`, {
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    });
    success.value = "Café excluído com sucesso!";
    await fetchData();
  } catch (err: any) {
    error.value = `Erro ao excluir café: ${err.response?.data?.message || err.message}`;
    console.error(err);
  }
}

const fetchData = async () => {
  try {
    const response = await api.get(BASE_URL + "/api/cafes?populate=*");
    cafes.value = response.data.data;
    success.value = "";
  } catch (err: any) {
    error.value = `Erro ao buscar dados: ${err.message}`;
  }
};

//Funçao para pegar os dados que devem ser atualizados

const cafesEditar = ref({
  id: 0,
  name: "",
  price: "",
  summary: "",
  foto: null as File | null,
});

function itensEditar(
  id: number,
  name: string,
  price: string,
  summary: string,
  foto: null
) {
  cafesEditar.value = { id, name, price, summary, foto };
  console.log("Foto atual: ", cafesEditar.value.foto);
}

async function handleFileUpload(event: Event) {
  //await deleteImg();
  const inputEvent = event as InputEvent;
  const target = inputEvent.target as HTMLInputElement;
  cafesEditar.value.foto = target.files?.item(0) as File;
}

function CreatehandleFileUpload(event: Event){
  const inputEvent = event as InputEvent;
  const target = inputEvent.target as HTMLInputElement;
  cafess.value.foto = target.files?.item(0) as File;
}

const submitForm = async () => {
  try {
    const formData = new FormData();
    if (cafesEditar.value.foto) {
      formData.append("files.foto", cafesEditar.value.foto);
    }
    formData.append(
      "data",
      JSON.stringify({
        name: cafesEditar.value.name,
        price: cafesEditar.value.price,
        summary: cafesEditar.value.summary,
      })
    );

    console.log(idCafeDeletar.value);
    const { data } = await api.put(`/cafes/${cafesEditar.value.id}`, formData, {
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
        "Content-Type": "multipart/form-data",
      },
    });
    fetchData();
    console.log("Café salvo:", data);
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
    // Aqui você pode tratar o erro para mostrar ao usuário
  }
};

const cafess = ref({
  name: "",
  price: "",
  summary: "",
  foto: null as File | null,
});

const CreatesubmitForm = async () => {
  try {
    const formData = new FormData();
    formData.append("files.foto", cafess.value.foto as File);
    formData.append(
      "data",
      JSON.stringify({
        name: cafess.value.name,
        price: cafess.value.price,
        summary: cafess.value.summary,
      })
    );

    const response = await api.post("/cafes", formData, {
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    });
    fetchData();
    cafess.value.name = ''
    cafess.value.price = ''
    cafess.value.summary = ''
    cafess.value.foto = null
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Descrição</th>
              <th scope="col">Foto</th>
              <th scope="col">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#criarCafe"
                  @click="
                    itensEditar(
                      item.id,
                      item.name,
                      item.price,
                      item.summary,
                      item.foto
                    )
                  "
                >
                  <i class="bi bi-pencil"></i> Novo café
                </button>
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
                  :src="BASE_URL + item.foto.url"
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
                  data-bs-target="#apagarCafe"
                >
                  <i class="bi bi-trash"></i>
                  Apagar
                </button>
                <!-- <button type="button" class="btn btn-warning btn-sm">
                  <i class="bi bi-pencil"></i>
                </button> -->
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  @click="
                    itensEditar(
                      item.id,
                      item.name,
                      item.price,
                      item.summary,
                      item.foto
                    )
                  "
                >
                  <i class="bi bi-pencil"></i> Editar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Modal Excluir os cafés -->
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
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Apagar item {{ idCafeDeletar }}</h1>
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
            @click="deletar(idCafeDeletar)"
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

  <!-- Modal editar café -->
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
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Editar Café ID: {{ cafesEditar.id }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="cafeName" class="form-label">Nome</label>
              <input
                v-model="cafesEditar.name"
                type="text"
                class="form-control"
                id="cafeName"
                placeholder="Digite o nome do café"
                required
              />
            </div>
            <div class="mb-3">
              <label for="cafePrice" class="form-label">Preço</label>
              <input
                v-model="cafesEditar.price"
                type="number"
                class="form-control"
                id="cafePrice"
                placeholder="Digite o preço do café"
                required
              />
            </div>
            <div class="mb-3">
              <label for="cafeDescription" class="form-label">Descrição</label>
              <textarea
                v-model="cafesEditar.summary"
                class="form-control"
                id="cafeDescription"
                rows="3"
                placeholder="Digite uma descrição do café"
                required
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="cafePhoto" class="form-label">Foto</label>
              <input
                type="file"
                class="form-control"
                id="cafePhoto"
                @change="handleFileUpload"
                required
              />
            </div>
          </form>
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
            @click="submitForm"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal criar cafe -->

  <div
    class="modal fade"
    id="criarCafe"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Criar Café</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="cafeName" class="form-label">Nome</label>
              <input
                v-model="cafess.name"
                type="text"
                class="form-control"
                id="cafeName"
                placeholder="Digite o nome do café"
                required
              />
            </div>
            <div class="mb-3">
              <label for="cafePrice" class="form-label">Preço</label>
              <input
                v-model="cafess.price"
                type="number"
                class="form-control"
                id="cafePrice"
                placeholder="Digite o preço do café"
                required
              />
            </div>
            <div class="mb-3">
              <label for="cafeDescription" class="form-label">Descrição</label>
              <textarea
              v-model="cafess.summary"
                class="form-control"
                id="cafeDescription"
                rows="3"
                placeholder="Digite uma descrição do café"
                required
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="cafePhoto" class="form-label">Foto</label>
              <input
                type="file"
                class="form-control"
                id="cafePhoto"
                @change="CreatehandleFileUpload"
                required
              />
            </div>
          </form>
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
            @click="CreatesubmitForm"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Salvar
          </button>
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
