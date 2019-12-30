<template>
    <div class="dh">
        <transition @before-enter="handleBeforeEnter" @enter="handleEnter">
            <slot v-if="show"></slot>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: ['show'],
        methods: {
            handleBeforeEnter (el) {
                el.style.color = 'red'
            },
            handleEnter (el, done) {
                setTimeout (()=> {
                    el.style.color = 'green'
                    done()
                },2000)
            }
        }
    }
</script>

<style scoped>
</style>
