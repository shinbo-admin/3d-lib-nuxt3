module.exports = {
  root: true, // プロジェクトのルートで ESLint を実行することを示す
  env: {
    browser: true, // ブラウザ環境
    es2021: true, // ES2021 の機能を有効化
    node: true, // Node.js 環境
  },
  extends: [
    'eslint:recommended', // 基本的な ESLint 推奨ルール
    'plugin:vue/vue3-recommended', // Vue 3 用の推奨ルール
    'plugin:@typescript-eslint/recommended', // TypeScript 用の推奨ルール
    'plugin:prettier/recommended', // Prettier の推奨設定
  ],
  parser: 'vue-eslint-parser', // Vue コンポーネントを解析するためのパーサ
  parserOptions: {
    parser: '@typescript-eslint/parser', // TypeScript の解析を有効化
    ecmaVersion: 2021, // 最新の ECMAScript を使用
    sourceType: 'module', // ES Modules をサポート
  },
  plugins: [
    'vue', // Vue 用のプラグイン
    '@typescript-eslint', // TypeScript 用のプラグイン
  ],
  rules: {
    'no-console': 'warn', // console.log を警告
    'no-debugger': 'error', // debugger をエラー
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 未使用変数を警告
    'vue/multi-word-component-names': 'off', // Vue コンポーネント名が複数単語でなくても許可
    'prettier/prettier': ['warn', { singleQuote: true, semi: false }], // Prettier の設定をカスタマイズ
  },
}
