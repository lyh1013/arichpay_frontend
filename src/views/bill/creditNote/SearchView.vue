<script setup lang="ts">
import { creditNoteData as items } from '@/fake-data/bill'
import { headers } from '@/utils/table/credit-note'

import { promiseTimeout } from '@vueuse/core'

const [loading, setLoading] = useState(false)
const [isPrint, setPrint] = useState(false)

const dateRange = ref()
const sortBy = ref([{ key: 'date', order: 'asc' }])

async function handlePrint(id: string | number) {
  setLoading(true)

  await setPrint(true)

  const stop = useEventListener(window, 'afterprint', () => {
    setPrint(false)
    setLoading(false)

    stop()
  })

  await promiseTimeout(500)

  window.print()
}

watch(
  () => dateRange.value,
  (newDate) => {
    console.log(newDate)
  },
)
</script>

<template>
  <v-container class="py-8">
    <DataTable
      title="折讓單查詢"
      v-model:sortBy="sortBy"
      :items
      :headers
      :filterKeys="['name', 'invoice_number']"
      :isPrint
      :hideFooter="items.length < 10"
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

      <template v-slot:item.actions="{ item }">
        <v-btn
          icon="mdi-printer-outline"
          @click="handlePrint(item.id)"
          variant="text"
          color="indigo-lighten-2"
        />
      </template>
    </DataTable>

    <v-img v-show="isPrint" src="@images/temp/table.png" cover class="print-img" />
  </v-container>
</template>

<style scoped>
.print-img {
  margin-top: 40px;
}

@page {
  size: A4 auto;
  margin: 3mm;
}

@media print {
  .print-img {
    margin-top: 0;
  }

  :deep(.v-card) {
    display: none;
  }
}
</style>
