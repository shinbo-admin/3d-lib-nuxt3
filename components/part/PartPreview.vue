<template>
  <div class="PartPreview" :style="{ width: `${width}px` }">
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
let mesh: THREE.Mesh
let renderer: THREE.WebGLRenderer

//------------------------------------------------------------------------------------------------------------
// マウント
//------------------------------------------------------------------------------------------------------------
onMounted(() => {
  // ウィンドウのサイズを取得
  width.value = window.innerWidth
  height.value = window.innerHeight

  // PerspectiveCamera(視野角(度), アスペクト比, 表示可能な最小クリップ範囲, 表示可能な最大クリップ範囲)
  camera = new THREE.PerspectiveCamera(70, width.value / height.value, 0.01, 10)
  // カメラの初期位置
  camera.position.z = 1
  // オブジェクトを配置するためのコンテナ
  scene = new THREE.Scene()
  // BoxGeometry(幅, 高さ, 奥行)を生成
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  // 各頂点の法線方向に色を生成
  const material = new THREE.MeshNormalMaterial()

  // geometryとmaterialを組み合わせてコンテンツを作成
  mesh = new THREE.Mesh(geometry, material)
  // コンテナに追加
  scene.add(mesh)

  // コンテンツを描画するレンダラーを生成（アンチエイリアスを有効化）
  renderer = new THREE.WebGLRenderer({ antialias: true })
  // レンダラーのキャンバスサイズを設定
  renderer.setSize(width.value, height.value)
  // レンダラーにアニメーションループを設定
  renderer.setAnimationLoop(animate)

  if (preview.value) {
    // レンダラーを要素に追加
    preview.value.appendChild(renderer.domElement)
  }
})

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function animate(time: number) {
  // NOTE: timeはThree.jsによって自動的に渡される（ミリ秒）
  mesh.rotation.x = time / 2000 // x軸方向の回転速度
  mesh.rotation.y = time / 1000 // y軸方向の回転速度

  // シーンとカメラを使ってレンダリング
  renderer.render(scene, camera)
}
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
