type Navigation = {
  [key: string | symbol]: {
    title: string
    icon?: {
      icon?: string
      size?: number
    }
  }
}

export const navigation = reactive<Navigation>({
  error: {
    title: 'Oops! 找不到頁面',
  },
  notauthorized: {
    title: '權限無法操作',
  },
  signin: {
    title: '登入',
  },
  forget: {
    title: '忘記密碼',
  },
  resetpwd: {
    title: '重設密碼',
  },
  home: {
    title: '首頁',
  },
  news: {
    title: '公告',
  },
  statement: {
    title: '對帳單查詢',
  },
  'credit-note': {
    title: '折讓單查詢',
  },
  profile: {
    title: '會員資料',
  },
})
