<template>

        <el-tabs type="card" v-model="activeName" >
            <el-tab-pane label="执行进度/三公经费" name="first">
                <el-row :gutter="10" class="order_list">
                    <el-col :span="14">
                        <dash-board></dash-board>
                    </el-col>
                    <el-col :span="10">
                       <pie-chart></pie-chart>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="财务指标" name="second" class="finanStyle" :key='activeName' >
                <el-tabs v-model="activeSort" type="card" v-if="key='activeName'" >
                    <el-tab-pane name="sort1" >
                        <span slot="label"><i class="el-icon-date">现金</i> <span style="display: block;font-size: 18px">5,000,00</span></span>
                        <el-row class="order_list" ref="sort1" v-if="'sort1' === activeSort">
                            <el-col :span="16">
                               <line-chart ></line-chart>
                            </el-col>
                            <el-col :span="8">
                                <radar-chart></radar-chart>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane  name="sort2">
                        <span slot="label"><i class="el-icon-date">银行存款</i> <span style="display: block;font-size: 18px">5,000,00</span></span>
                        <el-row class="order_list" ref="sort2" v-if="'sort2' === activeSort">
                            <el-col :span="16">
                                <line-chart></line-chart>
                            </el-col>
                            <el-col :span="8">
                                <radar-chart></radar-chart>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane  name="sort3">
                        <span slot="label"><i class="el-icon-date">应收账款</i> <span style="display: block;font-size: 18px">5,000,00</span></span>
                        <el-row class="order_list" ref="sort3" v-if="'sort3' === activeSort">
                            <el-col :span="16">
                                <line-chart></line-chart>
                            </el-col>
                            <el-col :span="8">
                                <radar-chart></radar-chart>
                            </el-col>
                        </el-row>
                    </el-tab-pane>

                </el-tabs>
            </el-tab-pane>
        </el-tabs>
</template>

<script>
    import echarts from 'echarts'
    import barChart from 'cps/echarts/barChart' // 执行进度 柱状图
    import pieChart from 'cps/echarts/pieChart' // 三公经费 饼状图
    import lineChart from 'cps/echarts/lineChart' // 财务指标
    import dashBoard from 'cps/echarts/dashBoard' // 仪表盘
    import radarChart from 'cps/echarts/radarChart' //

    export default {
        name:'tabsChart',
       data(){
           return {
               activeName:'first',
               activeSort:'sort1',
           }
       },

        components: {
            barChart,
            pieChart,
            lineChart,
            dashBoard,
            radarChart
        },

    }
</script>

<style lang="less" scoped>

    .order_list{
        .orderArea{
            width: 100%;
            height: 300px;
            background: #fff !important;
            border-radius: 6px;
            box-sizing: border-box;
            padding: 10px;
            padding-top: 20px;
            overflow: hidden;
        }
        .orderbarArea{
            height: 330px;
        }
    }

   .finanStyle  /deep/  .el-tabs__header{
       padding-top: 10px;
       .el-tabs__item{
           height: 60px;
           line-height:22px;
           padding-top: 8px;
           border-radius: 4px;
           background-color: #fafafa !important;
           border:1px solid #e5e6e6 !important;
           color:#333 !important;
           margin: auto 8px;
       }
       .el-tabs__item.is-active{
           background-color: #ddeafc !important;
           border:1px solid #408bf2 !important;
           color:#333 !important;
           border-radius: 4px;
       }
       .el-tabs__nav{
           border:none;
       }
       .el-icon-date:before{
           margin-right: 3px;
       }
   }
</style>