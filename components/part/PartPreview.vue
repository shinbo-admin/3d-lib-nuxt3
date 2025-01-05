<template>
  <div class="PartPreview">
    <div class="PartPreviewInner Drag" @mousedown="onMoveStart">
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
  data?: string
  isGrid?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isGrid: false,
})

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
const cameraPos = ref<{ x: number; y: number }>({ x: 0, y: 0 })
const isDrag = ref(false)
let camera: THREE.PerspectiveCamera
let scene: THREE.Scene
let mesh: THREE.Mesh | null = null
let renderer: THREE.WebGLRenderer
let gridHelpers: THREE.GridHelper[] = []

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
  () => props.data,
  (value) => {
    console.log('データが流れてきた', value)
    if (value) onUpdateScene(value)
  }
)

watch(
  () => props.isGrid,
  (value) => {
    onChangeGrid(value)
  }
)

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onInitial() {
  // カメラの初期化
  camera = new THREE.PerspectiveCamera(70, width.value / height.value, 0.01, 10)
  camera.position.set(2, 2, 2)
  camera.lookAt(0, 0, 0)

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

    // 新しいオブジェクトを生成（例: ボックス, 球体, 円柱）
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

function onChangeGrid(value: boolean) {
  if (value) {
    onAddGrid()
  } else {
    onRemoveGrid()
  }
}

function onAddGrid() {
  const gridSize = 10 // グリッドの大きさ
  const divisions = 100 // 分割数

  // X-Z 平面のグリッド
  const gridXZ = new THREE.GridHelper(gridSize, divisions, 0x444444, 0x888888)
  gridXZ.rotation.x = 0 // デフォルトの平面
  scene.add(gridXZ)
  gridHelpers.push(gridXZ)

  // Y-Z 平面のグリッド
  const gridYZ = new THREE.GridHelper(gridSize, divisions, 0x444444, 0x888888)
  gridYZ.rotation.z = Math.PI / 2 // Z 軸を基準に 90 度回転
  scene.add(gridYZ)
  gridHelpers.push(gridYZ)

  // X-Y 平面のグリッド
  const gridXY = new THREE.GridHelper(gridSize, divisions, 0x444444, 0x888888)
  gridXY.rotation.x = Math.PI / 2 // X 軸を基準に 90 度回転
  scene.add(gridXY)
  gridHelpers.push(gridXY)
}

function onRemoveGrid() {
  gridHelpers.forEach((grid) => {
    scene.remove(grid)
  })

  gridHelpers = []
}

// カメラの位置を変更
function onMoveStart() {
  isDrag.value = true
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('mouseup', onMouseUp)
}

function onMouseMove(e: MouseEvent) {
  const previewRect = preview.value?.getBoundingClientRect()
  if (previewRect) {
    cameraPos.value.x = ((e.clientX - previewRect.left) / previewRect.width) * 2 - 1
    cameraPos.value.y = ((e.clientY - previewRect.top) / previewRect.height) * 2 + 1

    // カメラの位置を更新
    camera.position.x = cameraPos.value.x
    camera.position.y = cameraPos.value.y
    camera.lookAt(0, 0, 0)
  }
}

function onMouseUp() {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
  isDrag.value = false
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

    &.Drag {
      cursor: grab;
    }
  }

  .Preview {
    position: relative;
    height: 100%;
    width: 100%;
  }
}
</style>
