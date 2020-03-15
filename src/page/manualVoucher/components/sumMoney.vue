<template >
    <div class="sum-money">
        <el-table-column
                v-for="(Item,Index) in moneyHeaderList"
                align="center"
                min-width="10%"
                :label="Item.label" :prop="Item.prop">
            <template slot-scope="scope">

            </template>

        </el-table-column>
    </div>
</template>

<script>
    export default {
        name: "sumMoney",
        data(){
            return{
                moneyHeaderList:[{
                    label:'分',
                },{
                    label:'亿',
                },{
                    label:'千',
                },{
                    prop:"bai",
                    label:'百',
                },{
                    label:'十',
                },{
                    label:'万',
                },{
                    prop:"qian",
                    label:'千',
                },{
                    label:'百',
                },{
                    label:'十',
                },{
                    prop:"yuan",
                    label:'元',
                },{
                    label:'角',
                }]
            }
        },

        methods:{


        }
    }
</script>

<style scoped>

</style>