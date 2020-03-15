<template>
    <div :id="id" class="orderArea" ></div>
</template>

<script>
    import echarts from 'echarts'
    import echartsTheme from "cps/echarts/theme/westeros.json";

    export default {
        data(){
            return {
                id:"dashBoard",
                myChart:null,
            }
        },
        mounted(){
            this.loadChart();
        },
        beforeDestroy() {
            if (!this.myChart) {
                return
            }
            this.myChart.dispose();
            this.myChart = null;
        },
        methods: {
            loadChart(){
                this.$nextTick(() => {
                    echarts.registerTheme('westeros', echartsTheme)
                    this.myChart = echarts.init(document.getElementById(this.id),'westeros');
                    this.myChart.setOption(this.initOption());
                })
            },


            initOption(){
                let data = {
                    tooltip: {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        show: true,
                    },
                    series : [{
                        name: '预算数',
                        type: 'gauge',
                        center: ['48%', '40%'],
                        detail: { formatter: '{value}%' },
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                width:14,
                                color: [[0.2, '#ed61a7'], [0.8, '#5885db'], [1, '#21c7b9']]
                            }
                        },
                        splitLine: {           // 分隔线
                            length: 25,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                color: 'auto'
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            length: 20,        // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto'
                            }
                        },

                        data: [{ value: 50, name: '预算数' }]
                    },
                    {
                        name: '支付数',
                        type: 'gauge',
                        radius:'60%',
                        center: ['18%', '50%'],
                        detail: { formatter: '{value}%' },
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                width:12,
                                color: [[0.2, '#ed61a7'], [0.8, '#5885db'], [1, '#21c7b9']]
                            }
                        },
                        splitLine: {           // 分隔线
                            length: 20,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                color: 'auto'
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            length: 16,        // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto'
                            }
                        },

                        data: [{ value: 50, name: '支付数' }]
                    },
                     {
                        name: '记账数',
                        type: 'gauge',
                        radius:'60%',
                        center: ['78%', '50%'],
                        detail: { formatter: '{value}%' },
                        axisLine: {            // 坐标轴线
                            lineStyle: {       // 属性lineStyle控制线条样式
                                width:12,
                                color: [[0.2, '#ed61a7'], [0.8, '#5885db'], [1, '#21c7b9']]
                            }
                        },
                        splitLine: {           // 分隔线
                            length: 20,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                color: 'auto'
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            length: 16,        // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: 'auto'
                            }
                        },

                        data: [{ value: 70, name: '记账数' }]
                    }]
                }
                return data;
            },
        },
        watch: {
            /*id:()=>{
                 this.initOption()
             }*/

        }
    }
</script>

<style lang="less">

</style>
