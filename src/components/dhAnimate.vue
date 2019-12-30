<template>
    <div class="dh">
        <transition-group>
            <div v-for="(item,index) in list" :key="index">{{item.name}}</div>
        </transition-group>
        <fade :show="show">
            <h1>hello world</h1>
        </fade>
        <el-button @click="handle()">Add</el-button>
    </div>
</template>

<script>
    import fade from './transition/index'
    export default {
        name: "dhAnimate",
        data () {
            return {
                msg: '动画',
                list:[],
                show: false
            }
        },
        components: {
            fade
        },
        methods: {
            handle () {
                this.show = !this.show
                // let num = 0
                // this.list.push({
                //     id: num++,
                //     name: 'hello world'
                // })
            }
        }
    }
</script>

<style scoped>
    .v-enter, .v-leave-to {
        opacity: 0;
    }
    .v-enter-active, .v-leave-active {
        transition: opacity 1s;
    }
</style>
