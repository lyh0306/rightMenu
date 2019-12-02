<template>
    <div class="btnlist">
        <el-button size="small" v-for="(item, index) in btnList" :key="item.index" class="btn" :class="{ isActive:isChange === index}" plain @click="tabBtn(index)">
            {{item.name}}
        </el-button>
        <!--点击按钮进行切换-->
        <component-one v-if="isChange === 0"></component-one>
        <component-two v-if="isChange === 1"></component-two>
<!--        如果不默认按钮样式，切换组件可以写成 isChange的值为组件名称-->
<!--        <component :is="isChange"></component>-->
    </div>
</template>

<script>
    import  componentOne from './buttonComponts/component-one.vue'
    import  componentTwo from './buttonComponts/component-two.vue'
    export default {
        name: "tabButton",
        data () {
            return {
                btnList: [
                    {name: '按钮一'},
                    {name: '按钮二'},
                ],
                isChange: 0,
            }
        },
        components: {
            componentOne,
            componentTwo
        },
        methods: {
            tabBtn (index) {
                this.isChange = index
            }
        }
    }
</script>
<style scoped>
    .btnlist {
        padding-left: 10px;
    }
    .isActive {
        background: #ecf5ff!important;
        border-color: #2187e7!important;
        color: #fff;
    }
    .btn {
        color: #2187e7;
        background: #fff;
        border-color: #b3d8ff;
    }
</style>

