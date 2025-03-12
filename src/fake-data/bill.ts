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

type CreditNoote = {
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

export const statementData: Statement[] = [
  {
    id: 1,
    date: '2025/03/10',
    invoice_number: 'GV19573623',
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
  {
    id: 4,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '止膿敏點眼液 150ML * 50 瓶/盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 5,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 6,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 7,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 8,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 9,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 10,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 11,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 12,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 13,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '帕金寧定(盒裝) 2毫克 1000粒 / 盒',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 14,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '諾安命注射液',
    sale: '30盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
  {
    id: 15,
    date: '2025/03/20',
    invoice_number: 'GV19573624',
    product_code: 'A-ONSD',
    name: '諾安命注射液',
    sale: '50盒',
    price: '12,300',
    subtotal: '12,138',
    note: '',
  },
]

export const creditNoteData: CreditNoote[] = [
  {
    id: 1,
    date: '2025/03/12',
    invoice_number: 'AB62186791',
    name: 'Robestar SDZ TW 10mg 3x10/Bx',
    count: 30,
    price: '63.40',
    total: '1902',
    tax: '500',
    tax_type: '1',
  },
  {
    id: 2,
    date: '2025/03/15',
    invoice_number: 'AB62186792',
    name: 'Berotec N 10ml(HFA) MA 100mcg',
    count: 40,
    price: '63.40',
    total: '2002',
    tax: '200',
    tax_type: '1',
  },
  {
    id: 3,
    date: '2025/03/30',
    invoice_number: 'AB62186793',
    name: 'Robestar SDZ TW 10mg 3x10/Bx',
    count: 50,
    price: '63.40',
    total: '11902',
    tax: '1500',
    tax_type: '1',
  },
]
