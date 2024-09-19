import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import { useAuth } from "@/stores/auth"; // Importe o store de autenticação
import Admin from "@/views/Admin.vue";
import { Component } from "react";
import CreateProduct from "@/views/createProduct.vue";
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
    path: "/teste",
    name: "admin",
    component: Admin,
     meta: { requiresAuth: true }  // Adicione um meta campo para verificar autenticação
  },
  {
    path:'/create',
    name:"create",
    component: CreateProduct
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Guarda de navegação global para verificar autenticação
router.beforeEach((to, from, next) => {
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated();
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });  // Redireciona para a página de login se não autenticado
  } else {
    next();  // Permite a navegação se o usuário estiver autenticado ou a rota não exigir autenticação
  }
});

export default router;
