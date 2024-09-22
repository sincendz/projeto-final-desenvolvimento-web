import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types/Cafe'

export const useUserStore = defineStore('user', () => {

  const user = ref<User>({
    id: Number(localStorage.getItem('id')),
    username:  localStorage.getItem('username') || "",
    email: localStorage.getItem('email') || "",
    role: {
      name: localStorage.getItem('role') || ""
    }
  })

  const jwt = ref(localStorage.getItem('jwt') || '')

  const role = computed(() => user.value.role.name)
  const username = computed(() => user.value.username)
  const isAuthenticated = computed(() => jwt.value !== "")
  

  function authenticaded(authUser: User, token: string) {
    user.value = authUser
    jwt.value = token

    localStorage.setItem('username', authUser.username)
    localStorage.setItem('id', authUser.id.toString())
    localStorage.setItem('email', authUser.email)
    localStorage.setItem('role', authUser.role.name)
    localStorage.setItem('jwt', token)
  }

  function logout() {
    jwt.value = ""
    user.value = {} as User

    localStorage.clear()
  }


  return { user, username, jwt, role, isAuthenticated, authenticaded, logout}
})