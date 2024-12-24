<template>
  <div class="LayoutHeader">
    <div class="HeaderInner">
      <div class="LeftSide">
        <ButtonIcon class="mr-2" :icon="ICONS_TYPE.COG_OUTLINE" />
        <h3>3D Library Tester</h3>
      </div>

      <div class="RightSide"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICONS_TYPE } from '~/constants/constant'
</script>

<style lang="scss">
.LayoutHeader {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: rgb(var(--v-theme-header));
  border: 1px solid rgb(var(--v-theme-border));
}

.HeaderInner {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 10px;
}

.LeftSide {
  display: flex;
}
</style>
