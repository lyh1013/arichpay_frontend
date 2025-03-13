<script setup lang="ts">
import { creditNoteData as items } from '@/fake-data/bill'
import { dateFormat } from '@/utils/formatters'
import { headers } from '@/utils/table/credit-note'

const [loading, setLoading] = useState(false)
const [isPrint, setPrint] = useState(false)

const dateRange = ref<(string | Date)[]>([])

const selected = ref([])
const sortBy = ref([{ key: 'date', order: 'asc' }])
const hideFooter = computed(() => items.length < 10 || isPrint.value)

async function handlePrint(id?: string | number) {
  setLoading(true)

  await setPrint(true)

  console.log(selected.value)

  const stop = useEventListener(window, 'afterprint', () => {
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
  <v-container class="py-8 py-md-6">
    <DataTable
      title="折讓單確認"
      v-model:sortBy="sortBy"
      v-model:selected="selected"
      :items
      :headers
      :filterKeys="['name', 'invoice_number']"
      :isPrint
      :hideFooter
      :show-select="true"
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
        <div class="d-flex align-center ga-3">
          <v-btn
            text="列印"
            prepend-icon="mdi-printer-outline"
            rounded="lg"
            variant="tonal"
            color="indigo-darken-2"
            :loading="isPrint"
            @click="handlePrint"
          />
          <v-btn text="確認折讓" prepend-icon="mdi-check" rounded="lg" variant="flat" :loading />
        </div>
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
  </v-container>
</template>

<style scoped>
:deep(.v-selection-control--dirty .v-selection-control__input > .v-icon),
:deep(.v-selection-control__input > .v-icon) {
  color: #3949ab;
}

@page {
  size: A4 landscape;
  margin: 5mm;
}

@media print {
  .table {
    height: auto;
    page-break-before: always;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  :deep(.v-card) {
    box-shadow: none;
  }
}
</style>
