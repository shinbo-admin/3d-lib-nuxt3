<template>
  <div class="FormLabel" :style="{ height: `${height}px`, width: `${width}px` }">
    <div class="LabelInner" :style="{ lineHeight: `${height}px` }">
      <v-icon v-if="isIcon" :color="`${colors[color]}`" :icon="icon" :size="`${iconSize}px`" />
      <label :style="{ color: color, paddingLeft: `${iconSpace}px`, fontSize: `${fontSize}px` }">{{ label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { COLORS } from '~/constants/color'
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {
  isIcon?: boolean
  icon?: string
  iconSize?: number
  iconSpace?: number
  color?: string
  height?: number
  width?: number
  fontSize?: number
  label: string
}

const props = withDefaults(defineProps<Props>(), {
  isIcon: false,
  color: COLORS.COLOR,
  height: 30,
})

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const colors = useColor()
</script>

<style lang="scss">
.FormLabel {
  position: relative;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100%;

  .LabelInner {
    line-height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
