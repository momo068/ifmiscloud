<template>
    <div :id="id" class="orderArea"></div>
</template>

<script>
	import echarts from 'echarts'
    import echartsTheme from "cps/echarts/theme/westeros.json";
    
    export default {
        data(){
            return {
				id:"lineChart",
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
					title: {
						text: '现金变化趋势'
					},
					tooltip : {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					legend: {
						data:['现金']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis : [
						{
							type : 'category',
							boundaryGap : false,
							data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
							name:'现金',
							type:'line',
							stack: '总量',
							areaStyle: {
							    normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#64B2ED'
                                        },
                                            {
                                                offset: 1,
                                                color: 'rgba(100,178,237,0.1)'
                                            }
                                        ]
                                    )
                            }},
							data:[0, 10, 20, 30, 10, 40, 20, 10, 50, 30, 80, 100]
						}

					]
				}
				return data;
			},
		},
        watch: {
            // id:()=>{
            //     this.initOption()
            // }

        }
    }
</script>

<style lang="less">

</style>
