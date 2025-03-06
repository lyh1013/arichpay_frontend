<script setup lang="ts">
import { newsData } from '@/fake-data/news'
</script>

<template>
  <vscrollbar style="height: calc(100vh - 300px)">
    <v-table fixed-header class="table">
      <thead>
        <tr>
          <th width="">發布日期</th>
          <th width="">訊息摘要</th>
          <th width="50%">訊息描述</th>
          <th width="">發布人</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in newsData" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.short }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.publisher }}</td>
        </tr>
      </tbody>
    </v-table>
  </vscrollbar>
</template>

<style scoped>
.v-table.v-table--fixed-header > .v-table__wrapper > table > thead > tr > th {
  font-weight: 600;
  font-size: 1rem;
}

.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td {
  padding: 12px 16px;
}

.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td:first-child {
}
</style>
