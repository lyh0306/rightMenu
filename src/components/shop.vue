<template>
    <div class="shop">
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    header-align="center"
                    align="center"
                    prop="name"
                    label="商品名称">
            </el-table-column>
            <el-table-column
                    prop=""
                    header-align="center"
                    align="center"
                    label="商品数量">
                <template slot-scope="scope">
                    <el-button :disabled="scope.row.count ==0" size="mini" @click="scope.row.count--">-</el-button>{{scope.row.count}}<el-button size="mini" @click="scope.row.count++">+</el-button>
                </template>
            </el-table-column>
            <el-table-column
                    prop=""
                    header-align="center"
                    align="center"
                    label="商品单价（元）">
                <template slot-scope="scope">
                    {{scope.row.price | priceFilter(2)}}
                </template>
            </el-table-column>
            <el-table-column
                    header-align="center"
                    align="center"
                    prop=""
                    label="商品金额（元）">
                <template slot-scope="scope">
                    {{scope.row.count * scope.row.price | priceFilter(2)}}
                </template>
            </el-table-column>
        </el-table>
        <div style="width: 100%;text-align: center">总计：{{totleCount}}件商品，共{{sumCount | priceFilter(2)}}元</div>
    </div>
</template>

<script>
    export default {
        name: "shop",
        data () {
            return {
                tableData: [
                    {name: '苹果', count: 1, price: 10},
                    {name: '香蕉', count: 1, price: 5},
                    {name: '橘子', count: 1, price: 10},
                    {name: '火龙果', count: 1, price: 10},
                    {name: '车厘子', count: 1, price: 99.99},
                ],
            }
        },
        filters: {
            priceFilter: function (data, n) {
                return '￥'+ data.toFixed(n)
            }
        },
        computed: {
            totleCount: function () {
                return this.tableData.reduce((item, n) => {
                    return item + n.count
                },0)
            },
            sumCount: function () {
                return this.tableData.reduce((item, n) => {
                    return item + n.count*n.price
                },0)
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
