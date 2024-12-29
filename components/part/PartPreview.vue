<template>
  <div class="PartPreview" :style="{ width: `${width}px` }">
    <div class="PartPreviewInner">
      <div class="Preview" ref="preview"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {
  width?: number
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
  (e: 'update:value', value: string): void
  (e: 'update:error', value: string): void
}>()

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const preview = ref<HTMLElement | null>(null)
const width = ref(0)
const height = ref(0)

onMounted(() => {
  // クライアントサイドでのみ実行
  width.value = window.innerWidth
  height.value = window.innerHeight

  // Three.js の初期化
  const camera = new THREE.PerspectiveCamera(70, width.value / height.value, 0.01, 10)
  camera.position.z = 1

  const scene = new THREE.Scene()

  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  const material = new THREE.MeshNormalMaterial()

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width.value, height.value)
  renderer.setAnimationLoop(animate)

  // DOM にレンダラーを追加
  if (preview.value) {
    preview.value.appendChild(renderer.domElement)
  }

  function animate(time: number) {
    mesh.rotation.x = time / 2000
    mesh.rotation.y = time / 1000

    renderer.render(scene, camera)
  }
})
</script>

<style lang="scss">
.PartPreview {
  position: relative;
  height: 100%;
}

.PartPreviewInner {
  position: relative;
  height: 100%;
}

.Preview {
  position: relative;
  height: 100%;
}
</style>
