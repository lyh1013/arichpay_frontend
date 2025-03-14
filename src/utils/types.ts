export type DataTableHeader = {
  title: string
  key: string
  sortable?: boolean
  align?: 'start' | 'center' | 'end'
}

export type DataTable = {
  id: string | number
  date: string
  invoice_number: string
  name: string
  count: string | number
  price: string
  subtotal?: string
  total?: string
  note?: string
  tax?: string
  tax_type?: string
}

export type Thresholds = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type CreditNote = {
  id: number
  date: string
  invoice_number: string
  name: string
  count: number
  price: string
  total: string
  tax: string
  tax_type: string
}
