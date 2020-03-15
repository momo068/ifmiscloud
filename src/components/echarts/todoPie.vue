<template>
    <div :id="id" class="orderArea"></div>
</template>

<script>
	import echarts from 'echarts'
    import echartsTheme from "cps/echarts/theme/westeros.json";

    export default {
        name:'todoPie',
        data(){
            return {
				 id:'todoPie',
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
                    this.myChart.setOption(this.initOption(this.type));
                })
            },
         	initOption(){

				let data= {
                    title: {
                        text: '待办事项分类',
                        x:'center',
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['待记账','待审核','待打印','待登陆'],
                    },
                    series : [
                        {
                            name: '待办事项',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'待记账'},
                                {value:310, name:'待审核'},
                                {value:234, name:'待打印'},
                                {value:835, name:'待登陆'},
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
            /*type:(v)=>{
                this.initOption(v)
            }*/
        }
    }
</script>

<style lang="less">

</style>
