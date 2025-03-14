<script setup lang="ts">
import { statementData as items } from '@/fake-data/bill'
import { dateFormat } from '@/utils/formatters'
import { headers } from '@/utils/table/statement'

const [loading, setLoading] = useState(false)
const [isPrint, setPrint] = useState(false)

const dateRange = ref<(string | Date)[]>([])

const hideFooter = computed(() => items.length < 10 || isPrint.value)

async function handlePrint() {
  await setPrint(true)

  const stop = useEventListener(window, 'afterprint', () => {
    setPrint(false)

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
    <DataTable
      title="對帳單查詢"
      :items
      :headers
      :filterKeys="['name', 'invoice_number']"
      :isPrint
      :hideFooter
      :loading
    >
      <template #header>
        <v-date-input
          v-model="dateRange"
          label="日期範圍"
          multiple="range"
          prepend-inner-icon="mdi-calendar-range"
          prepend-icon=""
          rounded="lg"
        />
      </template>

      <template #actions>
        <v-btn
          text="列印"
          prepend-icon="mdi-printer-outline"
          rounded="lg"
          variant="flat"
          :loading="isPrint"
          @click="handlePrint"
        />
      </template>
    </DataTable>
  </v-container>
</template>

<style scoped>
@page {
  size: A4 landscape;
  margin: 5mm;
}

@media print {
  .table {
    height: auto;
  }

  :deep(.v-card) {
    box-shadow: none;
  }
}
</style>
