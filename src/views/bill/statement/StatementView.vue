<script setup lang="ts">
import { statementData as items } from '@/fake-data/bill'

const search = ref('')
const sortBy = ref([{ key: 'date', order: 'asc' }])

const headers = [
  { title: '日期', key: 'date' },
  { title: '發票號碼', key: 'invoice_number', sortable: false },
  { title: '產品代號', key: 'product_code', sortable: false },
  { title: '產品名稱', key: 'name', sortable: false },
  { title: '銷售數', key: 'sale', sortable: false },
  { title: '發票金額', key: 'price' },
  { title: '小計', key: 'subtotal' },
  { title: '備註', key: 'note' },
]
</script>

<template>
  <v-container class="py-8 py-md-10">
    <v-card class="pa-4">
      <v-card-title class="d-flex align-center pe-2">
        <v-icon icon="mdi-text-box-search-outline" /> &nbsp; 對帳單查詢

        <v-spacer />

        <TextField v-model="search" name="keyword" label="查詢" prepend-inner-icon="mdi-magnify" />
      </v-card-title>

      <v-data-table v-model:sort-by="sortBy" :headers :items multi-sort />
    </v-card>
  </v-container>
</template>

<style scoped></style>
