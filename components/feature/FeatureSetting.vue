<template>
  <div class="FeatureSetting">
    <div class="SettingInner">
      <div class="Settings" v-for="(item, i) in setting" :key="i">
        <div v-if="item.key === 'title'" class="Setting" :style="{ paddingTop: '8px', paddingBottom: '8px' }">
          <FormLabel :label="item.label" :icon="item.icon" :isIcon="item.icon" :iconSpace="5" />
        </div>
        <div v-else-if="item.key === 'select'" class="Setting" :style="{ paddingBottom: '4px' }">
          <FormSelectMenu
            :label="item.label"
            :contents="item.contents"
            :height="item.height"
            :icon="item.icon"
            :isIcon="item.icon"
          />
        </div>
        <div v-else-if="item.key === 'color'" class="Setting" :style="{ paddingBottom: '4px' }">
          <FormColorPicker :label="item.label" :height="item.height" :icon="item.icon" :isIcon="item.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {
  setting: any[]
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{}>()

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss">
.FeatureSetting {
  position: relative;
  width: 250px;
  height: calc(100% - 50px);
  padding: 4px 12px 12px 12px;
  border: 1px solid rgb(var(--v-theme-border));
}

.SettingInner {
  position: relative;
  width: 100%;
}

.Setting {
}
</style>
