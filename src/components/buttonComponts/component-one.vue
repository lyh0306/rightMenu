<template>
<!--    如果组件内容一直是一样的 可以加v-once提升性能-->
    <div v-once>第一个组件</div>
</template>

<script>
    export default {
        name: "component-one"
    }
</script>

<style scoped>

</style>
