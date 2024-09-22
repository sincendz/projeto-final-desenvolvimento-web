import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import { useUserStore } from "@/stores/auth"; // Importe o store de autenticação
import Admin from "@/views/Admin/Admin.vue";
import Usuarios from "@/views/Admin/usuarios.vue";
import Carrinho from "@/views/Carrinho.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/home",
    name: "home-alias",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: { requiresAuth: true, requiresRole: "admin" }, // Adicione um meta campo para verificar autenticação
  },
  {
    path: "/carrinho",
    name: "carrinho",
    component: Carrinho,
    meta: { requiresAuth: true}
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useUserStore();

  // console.log("Rota destino:", to.name);
  // console.log("Usuário autenticado:", auth.isAuthenticated);
  // console.log("Papel do usuário:", auth.user.role?.name);

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next("/login");
  } else if (
    to.meta.requiresRole &&
    auth.user.role?.name !== to.meta.requiresRole
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
