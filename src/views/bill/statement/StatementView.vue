<script setup lang="ts">
import { statementData as items } from '@/fake-data/bill'

const date = ref()
const search = ref('')
const sortBy = ref([{ key: 'date', order: 'asc' }])

const headers = [
  { title: '操作', key: 'actions', sortable: false },
  { title: '日期', key: 'date' },
  { title: '發票號碼', key: 'invoice_number', sortable: false },
  { title: '產品代號', key: 'product_code', sortable: false },
  { title: '產品名稱', key: 'name', sortable: false },
  { title: '銷售數', key: 'sale', sortable: false },
  { title: '發票金額', key: 'price' },
  { title: '小計', key: 'subtotal' },
  { title: '備註', key: 'note', sortable: false },
]

function print(id: string | number) {}

watch(
  () => date.value,
  (newDate) => {
    console.log(newDate)
  },
)
</script>

<template>
  <v-container class="py-8">
    <v-card class="pa-4 pb-0 animate__animated animate__fadeInUp">
      <v-card-title class="d-flex align-center pe-2 mb-4">
        <v-icon icon="mdi-text-box-search-outline" /> &nbsp; 對帳單查詢

        <v-spacer />

        <div class="d-flex align-center w-50 ga-3">
          <TextField v-model="search" label="查詢" prepend-inner-icon="mdi-magnify" />

          <v-date-input
            v-model="date"
            label="日期範圍"
            max-width="368"
            multiple="range"
            prepend-inner-icon="mdi-calendar-range"
            prepend-icon=""
            rounded="lg"
          />
        </div>
      </v-card-title>

      <v-data-table
        v-model:sort-by="sortBy"
        v-model:search="search"
        :filter-keys="['name']"
        :headers
        :items
        multi-sort
        fixed-header
        class="table"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn
            text="列印"
            prepend-icon="mdi-cloud-print-outline"
            @click="print(item.id)"
            variant="tonal"
          />
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<style scoped>
:deep(.v-data-table-footer) {
  padding: 16px 4px;
}

.table {
  height: calc(100vh - 240px);
}

:deep(.v-table__wrapper::-webkit-scrollbar) {
  width: 6px;
}

:deep(.v-table__wrapper::-webkit-scrollbar-track) {
  background: #f1f1f1;
  border-radius: 10px;
}

:deep(.v-table__wrapper::-webkit-scrollbar-thumb) {
  background: #ccc;
  border-radius: 10px;
}
</style>
