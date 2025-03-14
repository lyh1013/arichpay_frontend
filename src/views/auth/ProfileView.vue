<script setup lang="ts">
import { validationSchema } from '@/utils/form/profile'

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    account: 'ideaxpress',
    name: '艾創點工程師',
  },
})

const onSubmit = handleSubmit(async (values: Record<string, unknown>) => {
  console.log(values)
})
</script>

<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-card class="pa-4">
        <v-card-text>
          <h4 class="form-title mb-2">基本資料</h4>

          <div class="mb-8">
            <!-- <v-alert type="success"> 已啟用電子對帳功能，啟用狀態:紙本折讓 </v-alert> -->

            <v-alert type="warning">
              目前尚未啟用電子對帳功能，如需啟用，請下載申請書，並於填畢之後上傳您的文件。
            </v-alert>
          </div>

          <v-form @submit="onSubmit">
            <v-row>
              <v-col cols="12" sm="6">
                <TextField
                  name="account"
                  prepend-inner-icon="mdi-account-outline"
                  label="帳號"
                  readonly
                  variant="plain"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <TextField
                  name="name"
                  prepend-inner-icon="mdi-account-outline"
                  label="名稱"
                  readonly
                  variant="plain"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <TextField
                  name="id_number"
                  prepend-inner-icon="mdi-card-text-outline"
                  label="統一編號"
                  readonly
                  variant="plain"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <TextField
                  name="payment_term"
                  prepend-inner-icon="mdi-comment-text-outline"
                  label="付款條件"
                  readonly
                  variant="plain"
                />
              </v-col>

              <v-col cols="12">
                <TextField
                  name="cashier"
                  prepend-inner-icon="mdi-account-cash-outline"
                  label="收款員"
                  readonly
                  variant="plain"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <TextField name="tel" label="電話" prepend-inner-icon="mdi-phone-outline" />
              </v-col>

              <v-col cols="12" sm="6">
                <TextField name="email" label="E-mail" prepend-inner-icon="mdi-email-outline" />
              </v-col>

              <v-col cols="12" sm="6">
                <TextField
                  name="invoice_address"
                  label="發票地址"
                  prepend-inner-icon="mdi-invoice-text-outline"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <TextField
                  name="delivery_address"
                  label="送貨地址"
                  prepend-inner-icon="mdi-package-variant-closed-check"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <TextField
                  name="password"
                  type="password"
                  label="密碼"
                  prepend-inner-icon="mdi-lock-outline"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <TextField
                  name="password_confirmation"
                  type="password"
                  label="確認密碼"
                  prepend-inner-icon="mdi-lock-outline"
                  placeholder="請再輸入一次密碼"
                />
              </v-col>
              <!-- <v-col cols="12" md="6">
                <v-row class="ga-2">
                  <v-col cols="12">
                    <TextField
                      name="account"
                      prepend-inner-icon="mdi-account-outline"
                      label="帳號"
                      readonly
                      variant="plain"
                    />
                  </v-col>

                  <v-col cols="12">
                    <TextField
                      name="name"
                      prepend-inner-icon="mdi-account-outline"
                      label="名稱"
                      readonly
                      variant="plain"
                    />
                  </v-col>

                  <v-col cols="12">
                    <TextField
                      name="id_number"
                      prepend-inner-icon="mdi-card-text-outline"
                      label="統一編號"
                      readonly
                      variant="plain"
                    />
                  </v-col>

                  <v-col cols="12">
                    <TextField
                      name="payment_term"
                      prepend-inner-icon="mdi-comment-text-outline"
                      label="付款條件"
                      readonly
                      variant="plain"
                    />
                  </v-col>

                  <v-col cols="12">
                    <TextField
                      name="cashier"
                      prepend-inner-icon="mdi-account-cash-outline"
                      label="收款員"
                      readonly
                      variant="plain"
                    />
                  </v-col>
                </v-row>
              </v-col> -->

              <!-- <v-col cols="12" md="6">
                <v-row>
                  <v-col cols="12">
                    <TextField name="tel" label="電話" prepend-inner-icon="mdi-phone-outline" />
                  </v-col>

                  <v-col cols="12">
                    <TextField name="email" label="E-mail" prepend-inner-icon="mdi-email-outline" />
                  </v-col>

                  <v-col cols="12">
                    <TextField
                      name="invoice_address"
                      label="發票地址"
                      prepend-inner-icon="mdi-invoice-text-outline"
                    />
                  </v-col>

                  <v-col cols="12">
                    <TextField
                      name="delivery_address"
                      label="送貨地址"
                      prepend-inner-icon="mdi-package-variant-closed-check"
                    />
                  </v-col>

                  <v-col cols="12">
                    <TextField
                      name="password"
                      type="password"
                      label="密碼"
                      prepend-inner-icon="mdi-lock-outline"
                    />
                  </v-col>
                </v-row>
              </v-col> -->

              <v-col cols="12">
                <v-file-upload density="compact" title="上傳檔案" clearable rounded="lg" />
              </v-col>

              <v-col cols="12" class="d-flex justify-center align-center ga-2 mt-2">
                <v-btn type="submit" text="確認修改" variant="flat" />
                <v-btn text="下載申請書" variant="outlined" />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
:deep(.mdi-cloud-upload::before) {
  color: rgb(var(--v-theme-primary));
}
</style>
