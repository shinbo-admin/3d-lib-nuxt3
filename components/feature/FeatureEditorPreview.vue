<template>
  <div class="FeatureEditorPreview">
    <div class="EditorPreviewInner">
      <div class="EditorSide">
        <div class="Header">
          <div class="LeftSide">
            <ButtonIcon class="mr-4" :icon="ICONS_TYPE.PLAY" :size="22" isCursor @click="onClickPlay" />
            <ButtonIcon :icon="ICONS_TYPE.SAVE_OUTLINE" :size="22" isCursor @click="onSaveCode" />
          </div>
          <div class="RightSide">
            <ButtonIcon :icon="ICONS_TYPE.COPY" :size="22" isCursor @click="onCopyCode" />
            <!-- <ButtonIcon :icon="ICONS_TYPE.DOWNLOAD" :size="22" isCursor /> -->
          </div>
        </div>
        <PartCodeEditor :data="code" @update:value="onChangeCode" />
      </div>

      <div class="PreviewSide">
        <div class="Header">
          <div class="LeftSide">
            <!-- <ButtonIcon class="mr-4" :icon="ICONS_TYPE.RELOAD" :size="22" isCursor />
            <ButtonIcon :icon="ICONS_TYPE.CAMERA_OUTLINE" :size="22" isCursor /> -->
          </div>
          <div class="RightSide">
            <ButtonIcon :icon="ICONS_TYPE.GRID" :size="22" isCursor @click="onChangeGrid" />
            <!-- <ButtonIcon :icon="ICONS_TYPE.ARROW_EXPAND" :size="22" isCursor /> -->
          </div>
        </div>

        <PartPreview :data="previewCode" :isGrid="isGrid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICONS_TYPE } from '~/constants/constant'
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{}>()

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const code = ref('')
const previewCode = ref('')
const isGrid = ref(false)

//------------------------------------------------------------------------------------------------------------
// マウント
//------------------------------------------------------------------------------------------------------------
onMounted(() => {
  const saveCode = sessionStorage.getItem('code')
  if (saveCode) code.value = saveCode
})

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onChangeCode(value: any) {
  code.value = value
}

function onClickPlay() {
  previewCode.value = code.value
}

function onCopyCode() {
  navigator.clipboard.writeText(code.value)
}

function onChangeGrid() {
  isGrid.value = !isGrid.value
}

function onSaveCode() {
  sessionStorage.setItem('code', code.value)
}
</script>

<style lang="scss">
.FeatureEditorPreview {
  position: relative;
  height: 100%;
  width: 100%;

  .EditorPreviewInner {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;

    .EditorSide {
      position: relative;
      width: 50%;
      height: 100%;
    }

    .PreviewSide {
      position: relative;
      width: 50%;
      height: 100%;
    }
  }
}

.Header {
  position: relative;
  height: 40px;
  background-color: rgb(var(--v-theme-subHeader));
  border-right: 1px solid rgb(var(--v-theme-border));
  border-bottom: 1px solid rgb(var(--v-theme-border));
  border-left: 1px solid rgb(var(--v-theme-border));
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;

  .LeftSide {
    display: flex;
  }

  .RightSide {
    display: flex;
  }
}
</style>
