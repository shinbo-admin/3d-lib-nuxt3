<template>
  <div class="FormSelectMenu">
    <div class="SelectMenuInner">
      <FormLabel :label="label" :isIcon="isIcon" :icon="icon" :width="width" />
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
}
</style>
