<script setup lang="ts">
import { creditNoteData as items } from '@/fake-data/bill'
import { headers } from '@/utils/table/credit-note'

const dateRange = ref()
const search = ref('')
const sortBy = ref([{ key: 'date', order: 'asc' }])

function print(id: string | number) {}

watch(
  () => dateRange.value,
  (newDate) => {
    console.log(newDate)
  },
)
</script>

<template>
  <v-container class="py-8">
    <v-card class="pa-4 pb-0 animate__animated animate__fadeInUp">
      <v-card-title class="d-flex align-center pe-2 mb-4">
        <v-icon icon="mdi-text-box-search-outline" /> &nbsp;
        <span class="font-weight-bold">折讓單查詢 </span>
        <v-spacer />

        <div class="d-flex align-center w-50 ga-3">
          <TextField v-model="search" label="查詢" prepend-inner-icon="mdi-magnify" />

          <v-date-input
            v-model="dateRange"
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
        :filter-keys="['name', 'invoice_number']"
        :headers
        :items
        :hide-default-footer="items.length < 10"
        multi-sort
        fixed-header
        class="table"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn icon="mdi-printer-outline" @click="print(item.id)" variant="text" />
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

:deep(.v-table > .v-table__wrapper > table > tbody > tr > td),
:deep(.v-table > .v-table__wrapper > table > thead > tr > th) {
  white-space: nowrap;
}
</style>
