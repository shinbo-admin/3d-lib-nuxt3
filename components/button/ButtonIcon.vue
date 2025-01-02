<template>
  <div class="ButtonIcon">
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
}

const props = withDefaults(defineProps<Props>(), {
  size: 30,
  color: COLORS.COLOR,
})

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const colors = useColor()
</script>

<style lang="scss">
.ButtonIcon {
  position: relative;

  .IconInner {
    position: relative;
  }
}
</style>
