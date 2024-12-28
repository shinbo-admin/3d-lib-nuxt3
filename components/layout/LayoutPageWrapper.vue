<template>
  <div class="LayoutPageWrapper">
    <div class="PageWrapperInner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.LayoutPageWrapper {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(var(--v-theme-background));
}

.PageWrapperInner {
  position: relative;
  height: 100%;
}
</style>
