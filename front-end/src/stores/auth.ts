import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("auth", () => {
  const jwt = ref(localStorage.getItem("jwt"));
  const user = ref(JSON.parse(localStorage.getItem("user")));

  // Função para definir o token JWT
  function setJwt(jwtValue: string) {
    localStorage.setItem("jwt", jwtValue);
    jwt.value = jwtValue;
  }

  // Função para definir o usuário
  function setUser(userValue: object) {
    localStorage.setItem("user", JSON.stringify(userValue));
    user.value = userValue;
  }

  //   // Função para limpar o JWT e o estado do usuário (Logout)
  //   function clearAuth() {
  //     localStorage.removeItem('jwt');
  //     localStorage.removeItem('user');
  //     jwt.value = null;
  //     user.value = null;
  //   }

  //   // Função para verificar se o usuário está autenticado
  //   function isAuthenticated() {
  //     return !!jwt.value;
  //   }

  return {
    setJwt,
    setUser,
    // user,
    // setJwt,
    // setUser,
    // clearAuth,
    // isAuthenticated
  };
});
