import { defineStore } from "pinia";
import { ref } from "vue";

interface User {
  // Defina a estrutura do usuário de acordo com seu modelo
  id: string;
  name: string;
  email: string;
}

export const useAuth = defineStore("auth", () => {
  const jwt = ref<string | null>(localStorage.getItem("jwt"));
  const user = ref<User | null>(JSON.parse(localStorage.getItem("user") || "null"));

  // Função para definir o token JWT
  function setJwt(jwtValue: string) {
    localStorage.setItem("jwt", jwtValue);
    jwt.value = jwtValue;
  }

  // Função para definir o usuário
  function setUser(userValue: User) {
    localStorage.setItem("user", JSON.stringify(userValue));
    user.value = userValue;
  }

  // Função para limpar o JWT e o estado do usuário (Logout)
  function clearAuth() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    jwt.value = null;
    user.value = null;
  }

  // Função para verificar se o usuário está autenticado
  function isAuthenticated() {
    return !!jwt.value;
  }

  return {
    setJwt,
    setUser,
    clearAuth,
    user,
    jwt,
    isAuthenticated
  };
});
