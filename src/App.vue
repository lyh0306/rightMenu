<template>
  <div id="app">
    <el-button v-for="(item, index) in btnList" :key="item.index" @click="handle(index)" :class="{isActive : handleClick === index}">{{item.name}}</el-button>
    <el-divider content-position="left">我们是不一样的</el-divider>
      <!--    // 右键菜单-->
    <rightMenu v-if="handleClick === 0" />
      <!--    点击切换-->
    <tabButton v-if="handleClick === 1"/>
      <!--    动画-->
    <dhAnimate v-if="handleClick === 2"/>
      <!--视频-->
    <videoPlay v-if="handleClick === 3"/>

  </div>
</template>

<script>
import rightMenu from './components/rightMenu.vue'
import tabButton from './components/tabButton.vue'
import dhAnimate from './components/dhAnimate.vue'
import videoPlay from './components/videoPlay.vue'

export default {
  name: 'app',
  data () {
    return {
      btnList: [
        {name: '右键菜单'},
        {name: '切换按钮'},
        {name: '动画'},
        {name: '视频'},
      ],
      handleClick: 0
    }
  },
  components: {
    rightMenu,
    tabButton,
    dhAnimate,
    videoPlay
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
