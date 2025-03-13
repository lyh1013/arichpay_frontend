import { type DataTableHeader } from '../types'

export const headers: DataTableHeader[] = [
  { title: '操作', key: 'actions', sortable: false, align: 'center' },
  { title: '日期', key: 'date' },
  { title: '發票號碼', key: 'invoice_number' },
  { title: '產品名稱', key: 'name', sortable: false },
  { title: '數量', key: 'count' },
  { title: '單價', key: 'price' },
  { title: '金額', key: 'total' },
  { title: '營業稅額', key: 'tax' },
  { title: '課稅別', key: 'tax_type' },
]
