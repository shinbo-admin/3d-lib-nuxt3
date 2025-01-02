<template>
  <div class="PartSelectMenu" :style="{ width: `${width}px` }">
    <div class="SelectMenuInner">
      <v-select
        class="SelectMenu"
        :items="items"
        v-model="item"
        :density="heightStr"
        hide-details
        @update:menu="onChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {
  items: string[]
  width?: number
  heightStr?: 'default' | 'comfortable' | 'compact'
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
  (e: 'update:value', value: string): void
  (e: 'update:error', value: string): void
}>()

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const item = ref('')

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onChange() {
  emit('update:value', item.value)
}
</script>

<style lang="scss">
.PartSelectMenu {
  position: relative;

  .SelectMenuInner {
    position: relative;
  }
}
</style>
