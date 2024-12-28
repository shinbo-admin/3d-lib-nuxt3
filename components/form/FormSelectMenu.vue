<template>
  <div class="FormSelectMenu" :style="{ height: `${height}px` }">
    <div class="SelectMenuInner">
      <FormLabel :label="label" :isIcon="isIcon" :icon="icon" :width="width" :iconSpace="5" />
      <PartSelectMenu :items="contents" :width="width" :heightStr="heightStr" @update:value="onChange" />
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
  contents: string[]
  width?: number
  heightStr?: 'default' | 'comfortable' | 'compact'
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  heightStr: 'compact',
})

const emit = defineEmits<{}>()

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const item = ref('')

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onChange(value: string) {
  console.log(value)
}
</script>

<style lang="scss">
.FormSelectMenu {
  position: relative;
}

.SelectMenuInner {
  position: relative;
  height: 100%;
}
</style>
