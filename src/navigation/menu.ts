// type Child = { to: string }
// type Children = Child & { name: string }
// const a: Children = { to: '', name: '' }

type Menu = {
  to?: string
  title: string
  icon?: string
  children?: Menu[]
}

export const menus: Menu[] = [
  {
    to: '/',
    title: '首頁',
    icon: 'mdi-home-outline',
  },
  {
    to: '/news',
    title: '公告',
    icon: 'mdi-newspaper-variant-outline',
  },
  {
    title: '帳款資訊',
    icon: 'mdi-text-box-search-outline',
    children: [
      {
        to: '/statement',
        title: '對帳單查詢',
      },
      {
        to: '/credit-note',
        title: '折讓單查詢',
      },
    ],
  },
]
