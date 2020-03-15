<template>
    <div :id="id" class="orderArea"></div>
</template>

<script>
    import echarts from 'echarts'
    import echartsTheme from "cps/echarts/theme/westeros.json";

    export default {
        name:'radarChart',
        data(){
            return {
                 id:"radarChart",
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
                       text: '现金存款分析',
                       x: 'left',
                   },
                   tooltip: {
                       trigger: 'item',
                       formatter: "{a} <br/>{b} : {c} ({d}%)"

                   },
                   legend: {
                       orient: 'vertical',
                       left: 'right',
                       data: ['因公出国（境）费', '公务接待费', '公务用车费'],
                   },
                   series: [
                       {
                           name: '现金存款分析',
                           type: 'pie',
                           radius: ['50%', '65%'],
                           center: ['50%', '60%'],
                           data: [
                               {value: 335, name: '因公出国（境）费'},
                               {value: 310, name: '公务接待费'},
                               {value: 234, name: '公务用车费'},
                           ],
                           label: {
                               normal: {
                                   show: true,
                                   position: 'center',
                                   /*formatter:function() {
                                       let num = '23,000,00';
                                       let str = '<div>' +
                                           '<p style="font-size:18px;color:#999;">总资产</p>' +
                                           '<p>'+num+'</p>' +
                                           '</div>';

                                       return str
                                   },*/
                                   formatter:function() {
                                       return  '总资产\n\r 23,000,00'
                                   },
                                   textStyle:{
                                       fontSize:20,
                                       color:'#666',
                                   }
                               },
                           },
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
				return option;
			},
        },
        watch: {
        }
    }
</script>

<style lang="less">

</style>
