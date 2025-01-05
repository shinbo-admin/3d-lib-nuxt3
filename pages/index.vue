<template>
  <div class="Page">
    <FeatureTester :setting="setting" />
  </div>
</template>

<script setup lang="ts">
import { ICONS_TYPE, SETTING_KEY } from '~/constants/constant'

const setting = [
  { key: SETTING_KEY.TITLE, label: 'LIBRARY SETTINGS', icon: ICONS_TYPE.COG_OUTLINE },
  { key: SETTING_KEY.SELECT, label: 'Version', contents: [], height: 70, icon: ICONS_TYPE.BOX_OUTLINE },
  { key: SETTING_KEY.SELECT, label: 'Renderer', contents: [], height: 70, icon: ICONS_TYPE.BOARD },
  { key: SETTING_KEY.TITLE, label: 'SCENE CONTROLS', icon: ICONS_TYPE.HORIZONTAL },
  { key: SETTING_KEY.SELECT, label: 'Camera Type', contents: [], height: 70, icon: ICONS_TYPE.EYE_OUTLINE },
  { key: SETTING_KEY.COLOR, label: 'Background', height: 70, icon: ICONS_TYPE.PALETTE_OUTLINE },
]

function onChange(value: string) {
  console.log(value)
}
</script>

<style lang="scss">
.Page {
  position: relative;
  height: calc(100% - 50px);
}
</style>
