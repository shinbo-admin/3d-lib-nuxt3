import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#03A9F4',
            secondary: '#0288D1',
            background: '#E1F5FE',
            surface: '#FFFFFF',
            header: '#0288D1',
            footer: '#01579B',
            error: '#D32F2F',
            info: '#1976D2',
            success: '#388E3C',
            warning: '#FFA000',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#03A9F4',
            secondary: '#0288D1',
            background: '#121212',
            surface: '#1E1E1E',
            header: '#0288D1',
            footer: '#01579B',
            error: '#EF9A9A',
            info: '#90CAF9',
            success: '#A5D6A7',
            warning: '#FFE082',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})

// カラー説明
// primary: アプリケーションの主要な色。
// secondary: 補助的な色。
// header: ヘッダーの背景色。
// footer: フッターの背景色。
// background: ページ全体の背景色。
// surface: カードやモーダルなど、表面要素の背景色。
// error: エラーメッセージやエラーステートを示す色。
// info: 情報メッセージやインフォメーションを示す色。
// success: 成功メッセージや成功ステートを示す色。
// warning: 警告メッセージや注意喚起を示す色。
