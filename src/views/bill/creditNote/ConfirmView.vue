<script setup lang="ts">
import { creditNoteData as items } from '@/fake-data/bill'
import { dateFormat } from '@/utils/formatters'
import { headers } from '@/utils/table/credit-note'
import type { CreditNote } from '@/utils/types'

const [loading, setLoading] = useState(false)
const [isPrint, setPrint] = useState(false)
const [isDialogOpen, setDialogOpen] = useState(false)
const [isAlert, setAlert] = useState(false)

const dateRange = ref<(string | Date)[]>([])

const selected = ref<CreditNote[]>([])

const hideFooter = computed(() => items.length < 10 || isPrint.value)

async function handlePrint(id?: string | number) {
  await setPrint(true)

  console.log(selected.value)

  const stop = useEventListener(window, 'afterprint', () => {
    setPrint(false)

    stop()
  })

  window.print()
}

function handleCheck() {
  if (!selected.value.length) {
    setAlert(true)

    return
  }

  setDialogOpen(true)
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
            text="確認折讓"
            prepend-icon="mdi-check"
            rounded="lg"
            variant="flat"
            :loading
            @click="handleCheck"
          />
          <v-btn
            text="列印"
            prepend-icon="mdi-printer-outline"
            rounded="lg"
            variant="outlined"
            color="indigo-darken-2"
            :loading="isPrint"
            @click="handlePrint"
          />
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

    <AlertDialog
      v-model="isDialogOpen"
      icon="mdi-help-circle"
      transition="scale-transition"
      persistent
      type="warning"
      size="xs"
    >
      <div v-if="selected.length === 1">
        確定要折讓
        <span class="bg-grey-lighten-4 pa-2 rounded-lg">{{ selected[0].invoice_number }}</span>
        嗎?
      </div>

      <div v-else>確定要折讓選取的 {{ selected.length }} 筆資料嗎?</div>

      <template #action>
        <v-btn text="確認" variant="flat" color="deep-purple-lighten-1" />
      </template>
    </AlertDialog>

    <SnackbarToast v-model="isAlert" type="error" rounded="lg">
      <div class="d-flex align-center ga-2">
        <v-icon icon="mdi-alert" />
        <span class="text-body-1">請選擇至少一筆資料</span>
      </div>
    </SnackbarToast>
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
