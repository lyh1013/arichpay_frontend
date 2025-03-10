import AuthService from '@/services/auth'

export const useAuth = defineStore('auth', () => {
  const user = ref<Record<string, any> | null>()
  const token = ref<string>('')

  async function login(data: Record<string, any>) {
    // const { data: res } = await AuthService.login(data)
    // user.value = res
  }

  return {
    user,

    login,
  }
})
