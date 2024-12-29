<template>
  <div class="PartCodeEditor" :style="{ width: `${width}px` }">
    <div class="CodeEditorInner">
      <MonacoEditor class="CodeEditor" v-model="code" :options="{ theme: 'vs-dark', language: 'typescript' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {
  width?: number
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
  (e: 'update:value', value: string): void
  (e: 'update:error', value: string): void
}>()

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const code = ref('')

watch(
  () => code.value,
  (value) => {
    emit('update:value', value)
  }
)
</script>

<style lang="scss">
.PartCodeEditor {
  position: relative;
  height: 100%;
}

.CodeEditorInner {
  position: relative;
  height: 100%;
}

.CodeEditor {
  position: relative;
  height: 100%;
}
</style>
