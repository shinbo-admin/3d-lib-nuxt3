<template>
  <div class="ButtonIcon" :class="{ Cursor: isCursor }">
    <div class="IconInner">
      <v-icon :color="`${colors[color]}`" :icon="icon" :size="`${size}px`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { COLORS } from '~/constants/color'
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {
  icon: string
  size?: number
  color?: string
  isCursor?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 30,
  color: COLORS.COLOR,
  isCursor: false,
})

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const colors = useColor()
</script>

<style lang="scss">
.ButtonIcon {
  position: relative;

  &.Cursor {
    cursor: pointer;
  }

  .IconInner {
    position: relative;
  }
}
</style>
