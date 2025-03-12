<script setup lang="ts">
import { statementData as items } from '@/fake-data/bill'
import { dateFormat } from '@/utils/formatters'
import { headers } from '@/utils/table/statement'

const [loading, setLoading] = useState(false)
const [isPrint, setPrint] = useState(false)

const dateRange = ref<(string | Date)[]>([])
const search = ref('')
const sortBy = ref([{ key: 'date', order: 'asc' }])

const hideFooter = computed(() => items.length < 10 || isPrint.value)

async function handlePrint() {
  setLoading(true)

  await setPrint(true)

  const stop = useEventListener(window, 'afterprint', () => {
    console.log('列印結束！')

    setPrint(false)
    setLoading(false)

    stop()
  })

  window.print()
}

watch(
  () => dateRange.value,
  (newDateRange) => {
    newDateRange.forEach((date) => console.log(dateFormat(date)))
  },
)
</script>

<template>
  <v-container class="py-8">
    <v-card class="pa-4 pb-0 animate__animated animate__fadeInUp">
      <v-card-title class="d-flex align-center pe-2 mb-4 d-print-none">
        <v-icon icon="mdi-text-box-search-outline" /> &nbsp;
        <span class="font-weight-bold">對帳單查詢 </span>
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

          <v-btn
            text="列印"
            prepend-icon="mdi-printer-outline"
            rounded="lg"
            variant="flat"
            :loading
            @click="handlePrint"
          />
        </div>
      </v-card-title>

      <v-data-table
        v-model:sort-by="sortBy"
        v-model:search="search"
        :filter-keys="['name', 'invoice_number']"
        :headers
        :items
        :hide-default-footer="hideFooter"
        multi-sort
        fixed-header
        class="table"
      />

      <span />
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

@page {
  size: A4 landscape;
  margin: 0;
}

@media print {
  .table {
    width: 100%;
    height: auto;
  }

  :deep(.v-card) {
    box-shadow: none;
  }
}
</style>
