<template>
  <div class="PartColorPicker" :style="{ width: `${width}px` }">
    <div class="ColorPickerInner">
      <input class="Color" type="color" v-model="color" @change="onChange" />
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
const color = ref('')

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onChange() {
  emit('update:value', color.value)
}
</script>

<style lang="scss">
.PartColorPicker {
  position: relative;
}

.ColorPickerInner {
  position: relative;
  width: 100%;
}

.Color {
  width: 100%;
}
</style>
