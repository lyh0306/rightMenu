<template>
  <div id="app">
    <el-button v-for="(item, index) in btnList" :key="item.index" @click="handle(index)" :class="{isActive : handleClick === index}">{{item.name}}</el-button>
    <el-divider content-position="left">demo</el-divider>
      <!--    // 右键菜单-->
    <rightMenu v-if="handleClick === 0" />
      <!--    点击切换-->
    <tabButton v-if="handleClick === 1"/>
      <!--    动画-->
    <dhAnimate v-if="handleClick === 2"/>
      <!--视频-->
    <videoPlay v-if="handleClick === 3"/>
      <!--canvas-->
    <canvas-demo v-if="handleClick === 4"></canvas-demo>
    <!-- 监听查询购物车数量及金额变化 -->
    <shop v-if="handleClick === 5"></shop>
  </div>
</template>

<script>
import rightMenu from './components/rightMenu.vue'
import tabButton from './components/tabButton.vue'
import dhAnimate from './components/dhAnimate.vue'
import videoPlay from './components/videoPlay.vue'
import canvasDemo from './components/canvas.vue'
import shop from './components/shop.vue'

export default {
  name: 'app',
  data () {
    return {
      btnList: [
        {name: '右键菜单'},
        {name: '切换按钮'},
        {name: '动画'},
        {name: '视频'},
        {name: 'canvas'},
        {name: '监听查询购物车数量及金额变化'},
      ],
      handleClick: 0
    }
  },
  components: {
    rightMenu,
    tabButton,
    dhAnimate,
    videoPlay,
    canvasDemo,
    shop
  },
  methods: {
    handle (index) {
      this.handleClick = index
    }
  }
}
</script>

<style>
</style>
