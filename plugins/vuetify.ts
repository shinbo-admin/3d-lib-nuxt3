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
      defaultTheme: 'dark',
      themes: {
        light: {
          dark: false,
          colors: {
            // 基本
            primary: '#FFFFFF',
            secondary: '#F5F5F5',
            background: '#FAFAFA',
            surface: '#E0E0E0',
            error: '#FFCDD2',
            info: '#E3F2FD',
            success: '#C8E6C9',
            warning: '#FFE082',
            // レイアウト
            header: '#FFFFFF',
            footer: '#F5F5F5',
            border: '#BDBDBD',
          },
        },
        dark: {
          dark: true,
          colors: {
            // 基本
            primary: '#000000',
            secondary: '#1C1C1C',
            background: '#121212',
            surface: '#1E1E1E',
            error: '#D32F2F',
            info: '#4A4A4A',
            success: '#2E7D32',
            warning: '#FF6F00',
            // レイアウト
            header: '#000000',
            footer: '#1C1C1C',
            border: '#424242',
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
