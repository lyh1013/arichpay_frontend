<script setup lang="ts">
const [loading, setLoading] = useState(false)
const router = useRouter()
// const { login } = useAuth()

const { handleSubmit } = useForm({
  validationSchema: { account: 'required', password: 'required' },
  initialValues: {
    account: 'ideaxpress',
    password: 'arichpay',
  },
})

const onSubmit = handleSubmit(async (values: Record<string, string>) => {
  setLoading(true)

  // await login(values)

  router.push('/')

  setLoading(false)
})
</script>

<template>
  <v-row>
    <v-col cols="12" lg="4" md="6" sm="8" offset-lg="4" offset-md="3" offset-sm="2">
      <v-card class="pa-8">
        <v-row class="ga-4">
          <v-col cols="12" class="d-flex justify-center align-center flex-column">
            <v-img max-width="200" width="200" src="@images/logo/logo.png" cover />
          </v-col>

          <v-col cols="12">
            <v-form @submit.prevent="onSubmit">
              <v-row>
                <v-col cols="12">
                  <TextField name="account" label="帳號" prepend-inner-icon="mdi-account-outline" />
                </v-col>

                <v-col cols="12">
                  <div class="d-flex align-end flex-column w-100">
                    <RouterLink class="text-blue text-body-2" to="/forget" rel="noopener noreferrer"
                      >忘記密碼</RouterLink
                    >
                    <TextField
                      name="password"
                      type="password"
                      label="密碼"
                      prepend-inner-icon="mdi-lock-outline"
                      class="w-100"
                    />
                  </div>
                </v-col>

                <v-col cols="12">
                  <v-btn :loading size="large" type="submit" variant="flat" block text="登入" />
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
