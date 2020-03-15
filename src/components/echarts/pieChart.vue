<template>
    <div :id="id" class="orderArea"></div>
</template>

<script>
    import echarts from 'echarts'
    import echartsTheme from "cps/echarts/theme/westeros.json";

    export default {
        name:'pieChart',
        data(){
            return {
                id:'pieChart',
                myChart:null,
            }
        },
        props: ['type'],
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
                    this.myChart.setOption(this.initOption(this.type));
                })
            },
            initOption(){

                let data = {
                    title: {
                        text: '三公经费统计图',
                        x: 'center',
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['因公出国（境）费', '公务接待费', '公务用车费'],
                    },
                    series: [
                        {
                            name: '三公经费',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '60%'],
                            data: [
                                {value: 335, name: '因公出国（境）费'},
                                {value: 310, name: '公务接待费'},
                                {value: 234, name: '公务用车费'},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
                return data;
            },
        },
        watch: {
           /* type:(v)=>{
                this.initOption(v)
            }*/
        }
    }
</script>

<style lang="less">

</style>
