type Statement = {
  id: number
  date: string
  invoice_number: string
  product_code: string
  name: string
  sale: string
  price: string
  subtotal: string
  note: string
}

export const statementData: Statement[] = [
  {
    id: 1,
    date: '2025/03/10',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '20盒',
    price: '12,300',
    subtotal: '11,138',
    note: '',
  },
  {
    id: 2,
    date: '2025/03/15',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '3000粒',
    price: '34,300',
    subtotal: '15,138',
    note: '',
  },
  {
    id: 3,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
]
