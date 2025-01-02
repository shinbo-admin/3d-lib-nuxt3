<template>
  <div class="PartPreview">
    <div class="PartPreviewInner">
      <div class="Preview" ref="preview" />
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
  code?: string
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
const width = ref<number>(0)
const height = ref<number>(0)
let camera: THREE.PerspectiveCamera
let scene: THREE.Scene
let mesh: THREE.Mesh | null = null
let renderer: THREE.WebGLRenderer

//------------------------------------------------------------------------------------------------------------
// マウント
//------------------------------------------------------------------------------------------------------------
onMounted(() => {
  const previewRect = preview.value?.getBoundingClientRect()
  if (previewRect) {
    // 要素のサイズを取得
    width.value = previewRect.width
    height.value = previewRect.height

    // 初期化
    onInitial()
  }
})

//------------------------------------------------------------------------------------------------------------
// watch
//------------------------------------------------------------------------------------------------------------
watch(
  () => props.code,
  (value) => {
    console.log('データが流れてきた', value)
    if (value) onUpdateScene(value)
  }
)

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onInitial() {
  // カメラの初期化
  camera = new THREE.PerspectiveCamera(70, width.value / height.value, 0.01, 10)
  camera.position.z = 1

  // シーンの初期化
  scene = new THREE.Scene()

  // レンダラーの初期化
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width.value, height.value)
  renderer.setAnimationLoop(animate)

  // DOM にレンダラーを追加
  if (preview.value) {
    preview.value.appendChild(renderer.domElement)
  }
}

function onUpdateScene(code: string) {
  try {
    // 既存のメッシュを削除
    if (mesh) {
      scene.remove(mesh)
    }

    // 新しいオブジェクトを生成（例: ボックス, 球体, 円柱
    if (code === 'box') {
      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
      const material = new THREE.MeshNormalMaterial()
      mesh = new THREE.Mesh(geometry, material)
    } else if (code === 'sphere') {
      const geometry = new THREE.SphereGeometry(0.2, 32, 32)
      const material = new THREE.MeshNormalMaterial()
      mesh = new THREE.Mesh(geometry, material)
    } else if (code === 'cylinder') {
      const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.4, 32)
      const material = new THREE.MeshNormalMaterial()
      mesh = new THREE.Mesh(geometry, material)
    } else {
      mesh = null
    }

    // 新しいメッシュをシーンに追加
    if (mesh) {
      scene.add(mesh)
    }
  } catch (error) {
    // emit('update:error', String(error))
  }
}

function animate(time: number) {
  // メッシュが存在する場合のみ回転
  if (mesh) {
    mesh.rotation.x = time / 2000
    mesh.rotation.y = time / 1000
  }

  // レンダリング
  renderer.render(scene, camera)
}
</script>

<style lang="scss">
.PartPreview {
  position: relative;
  height: 100%;
  width: 100%;

  .PartPreviewInner {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .Preview {
    position: relative;
    height: 100%;
    width: 100%;
  }
}
</style>
