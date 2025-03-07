<script setup lang="ts">
import '@/assets/styles/auth.css'

const [loading, setLoading] = useState(false)

const { handleSubmit } = useForm({
  validationSchema: { email: 'required|email' },
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
              <v-col cols="12" class="d-flex justify-center">
                <v-img max-width="200" src="@images/logo/logo.png" cover />
              </v-col>

              <v-col cols="12">
                <v-form @submit.prevent="onSubmit">
                  <TextField name="email" label="E-mail" prepend-inner-icon="mdi-email-outline" />

                  <v-btn
                    :loading
                    color="primary"
                    size="large"
                    type="submit"
                    variant="flat"
                    block
                    rounded
                    text="送出"
                  />
                </v-form>

                <div class="text-center mt-3">
                  <span v-text="'已經有帳戶？'" />
                  <RouterLink class="text-blue ms-1" to="signin" v-text="'登入'" />
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
