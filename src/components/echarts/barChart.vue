<template>
    <div :id="id" class="orderArea orderbarArea"></div>
</template>

<script>
    import echarts from 'echarts'
    import echartsTheme from "cps/echarts/theme/westeros.json";

    export default {
        name:'barChat',
        data(){
            return {
                 id:'barChart',
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
                let option = {
                    title: {
                        text: '执行进度统计图',
                        subtext: '',
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                  /*  legend: {
                        data:['访问量','下载量']
                    },*/
                    xAxis : [
                        {
                            type : 'category',
                            data : ['预算数','支付数','记账数']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            name: '单位：万元',
                        }
                    ],
                    series : [
                        {
                            name: '金额',
                            type: 'bar',
                            barWidth: '35%',
                            data: [10, 52, 200]
                        }
                    ]
                };
				return option;
			},
        },
        watch: {
        }
    }
</script>

<style lang="less">

</style>
