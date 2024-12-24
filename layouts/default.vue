<template>
  <div class="LayoutDefault">
    <LayoutHeader />
    <LayoutPageWrapper><slot /></LayoutPageWrapper>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.LayoutDefault {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: #fedefe;
}
</style>
