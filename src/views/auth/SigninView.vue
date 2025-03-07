<script setup lang="ts">
import '@/assets/styles/auth.css'

const [loading, setLoading] = useState(false)

const { handleSubmit } = useForm({
  validationSchema: { account: 'required', password: 'required' },
})

const onSubmit = handleSubmit((values: Record<string, string>) => {
  setLoading(true)

  console.log(values)
})
</script>

<template>
  <div class="auth-background">
    <v-container style="height: calc(100vh - 80px)" class="d-flex align-center justify-center">
      <v-row>
        <v-col cols="12" lg="4" md="6" sm="8" offset-lg="4" offset-md="3" offset-sm="2">
          <v-card class="pa-8" rounded="xl">
            <v-row class="ga-4">
              <v-col cols="12" class="d-flex justify-center align-center flex-column">
                <v-img max-width="200" width="200" src="@images/logo/logo.png" cover />
                <v-card-title class="mt-3 font-weight-bold">客戶服務平台</v-card-title>
              </v-col>

              <v-col cols="12">
                <v-form @submit.prevent="onSubmit">
                  <TextField name="account" label="帳號" prepend-inner-icon="mdi-account-outline" />

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

                  <v-btn
                    :loading
                    color="primary"
                    size="large"
                    type="submit"
                    variant="flat"
                    block
                    rounded
                    text="登入"
                  />
                </v-form>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
