<script setup lang="ts">
import { useDisplay } from 'vuetify'

import { type DataTableHeader, type DataTable } from '@/utils/types'

const sortBy = defineModel<{ key: string; order: string }[]>('sortBy')
const selected = defineModel<string[] | number[]>('selected')

const { mdAndUp } = useDisplay()

const search = ref('')

const {
  title = '',
  headers = [],
  items = [],
  filterKeys = [],
  hideFooter = false,
  isPrint = false,
  showSelect = false,
  loading = false,
} = defineProps<{
  title: string
  headers: DataTableHeader[]
  items: DataTable[]
  filterKeys: string[]
  hideFooter?: boolean
  isPrint?: boolean
  showSelect?: boolean
  loading?: boolean
}>()
</script>

<template>
  <v-card class="pa-4 pb-0 animate__animated animate__fadeInUp">
    <v-card-text class="d-print-none">
      <v-row class="align-center ma-0 ga-md-3" :no-gutters="mdAndUp">
        <v-col cols="8" md="auto" class="order-1 me-auto">
          <v-card-title class="d-flex align-center pa-0">
            <v-icon icon="mdi-text-box-search-outline" /> &nbsp;
            <span class="font-weight-bold">{{ title }} </span>
          </v-card-title>
        </v-col>

        <v-col cols="12" md="3" class="order-3 order-md-2">
          <TextField v-model="search" label="查詢" prepend-inner-icon="mdi-magnify" />
        </v-col>

        <v-col cols="12" md="3" class="order-4 order-md-3">
          <slot name="header" />
        </v-col>

        <v-col
          v-if="$slots.actions"
          cols="4"
          sm="auto"
          class="order-2 order-md-4 d-flex justify-end"
        >
          <slot name="actions" />
        </v-col>
      </v-row>
    </v-card-text>

    <v-data-table
      v-model:sort-by="sortBy"
      v-model="selected"
      v-model:search="search"
      :filter-keys="filterKeys"
      :headers
      :items
      :hide-default-footer="hideFooter"
      :fixed-header="!isPrint"
      :show-select="showSelect"
      item-value="id"
      :loading
      class="table"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </v-data-table>
  </v-card>
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

:deep(.v-select__selection) {
  max-width: unset;
}
</style>
