<template>
  <div class="FormColorPicker" :style="{ height: `${height}px` }">
    <div class="ColorPickerInner">
      <FormLabel :label="label" :isIcon="isIcon" :icon="icon" :width="width" :iconSpace="5" />
      <PartColorPicker :width="width" :height="40" @update:value="onChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {
  label: string
  isIcon?: boolean
  icon?: string
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{}>()

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const color = ref('')

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onChange(value: string) {
  color.value = value
}
</script>

<style lang="scss">
.FormColorPicker {
  position: relative;

  .ColorPickerInner {
    position: relative;
    height: 100%;
  }
}
</style>
