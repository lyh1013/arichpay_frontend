import AuthService from '@/services/auth'

interface User {
  id: string
  name: string
  email: string
}

export const useAuth = defineStore('auth', () => {
  const user = ref<User | null>()
  const token = ref<string>('')

  async function login(data: { account: string; password: string }) {
    const res = await AuthService.login(data)

    if (!res) return

    user.value = res.data
  }

  return {
    user,

    login,
  }
})
