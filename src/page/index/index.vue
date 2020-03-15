<template>
		<section class="data_section" ref="data_section"> 

				<div class="title">
					<span>常用功能</span>
					<a href="">常用功能设置</a>
				</div>
				<el-row :gutter="10" class="row_list">

					<el-col :span="24">
						<div class="row_right row_base">
							<el-col :span="6">
								<div class="data_list rflex">
									<div class="circle icon1"><i class="iconfont">&#xe616;</i> </div>
									<p>手工凭证</p>
								</div>
							</el-col>
							<el-col :span="6">
								<div class=" data_list rflex">
									<div class="circle icon2"><i class="iconfont">&#xe600;</i> </div>
									<p>自动凭证</p>
								</div>
							</el-col>
							<el-col :span="6">
								<div class=" data_list rflex">
									<div class="circle icon3"><i class="iconfont">&#xe64d;</i> </div>
									<p>凭证汇总表</p>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="keleBgColor data_list rflex">
									<div class="circle icon4"><i class="iconfont">&#xe61f;</i> </div>
									<p>科目余额表</p>
								</div>
							</el-col>
						</div>
					</el-col>
				</el-row>
            <!--待办事项-->
			<el-row :gutter="10" class="row_list">
				<el-col :span="24">
					<todo-list></todo-list>
				</el-col>
			</el-row>
			<!--执行进度/三公经费、财务指标-->
			<el-row :gutter="10" class="row_list">
				<el-col :span="24">
					<tabs-chart></tabs-chart>
				</el-col>
			</el-row>
			<!--财务资讯-->
			<el-row :gutter="10" class="row_list">
				<el-col :span="24">
					<finan-info></finan-info>
				</el-col>
			</el-row>
			
		</section>
</template>

<script>
	import echarts from 'echarts'
	import todoList from "./components/todoList";  // 待办事项
	import tabsChart from "./components/tabsChart";  // 执行进度/三公经费、财务指标
    import finanInfo from "./components/finanInfo.vue";
    import PieChart from "../../components/echarts/pieChart.vue";  //财务资讯

    export default {
    	data(){
    		return {

    		}
    	},
    	components: {
            PieChart,
            finanInfo,
            todoList,
            tabsChart,
		},	
		created(){
		},
    	mounted(){
		},
    	methods: {
    	}
    }
</script>

<style lang="less" scoped>
	.iconfont{
		font-family:"iconfont" !important;
		font-size:30px;
		font-style:normal;
		color: #fff;
	}
	.data_section{
		margin: 20px;
		padding-top: 10px;
		border-radius: 2px;
		.row_list{
			margin-top: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			padding: 10px;
			color:#333;
			height: 60px;
			background-color: #fff;
			box-shadow: 0 8px 20px 0 rgba(172,176,188,0.1);
			.circle{
				width:60px;
				height:60px;
				border-radius: 50%;
				display:flex;
				justify-content:center;//水平方向居中
				align-items:center;
			}
			.icon1{
				background-image: linear-gradient(#3271f2, #4b88ff);
			}
			.icon2{
				background-image: linear-gradient(#3fd3cf, #4bece9);
			}
			.icon3{
				background-image: linear-gradient(#ed61a7, #ed61a7);
			}
			.icon4{
				background-image: linear-gradient(#b06cc4, #c37fd8);
			}
			p{
				line-height: 60px;
				margin-left: 20px;
			}
		}
		.pay{
			.leftItem{
				justify-content: space-around;
			}
		}
		.title{
			margin: 10px;
			span{
				font-size:16px;
				color:#333;
			}
			a{
				font-size: 14px;
				display: inline-block;
				padding: 5px 10px;
				background-color: #fff;
				color:#666;
				float: right;
			}
		}
		.row_list  /deep/ .el-tabs{
			.el-tabs__header{
				border-bottom:none;
			}
			.el-tabs__nav{
				background-color: #fff;
			}
			.el-tabs__content{
				background-color: #fff;
			}
			.el-tabs__item.is-active{
				background-color: #3b73fb;
				color:#fff;
			}

		}
	}
  
</style>
