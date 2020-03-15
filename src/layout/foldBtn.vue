<template>
	 <div class='bread_container' id="bread_container">
	    <div @click="handleLefeMenu" class="bars">
			<icon-svg icon-class="iconmenu-fold" :class="{isactive:changeBarDirection}" /><span v-text="btnText" v-show='flag==true'></span>
			<span v-text="btnText" v-show='flag==false'></span>
		</div>
        <!--<el-breadcrumb class="breadcrumb" separator="/">
            <el-breadcrumb-item 
                v-for='(name,index) in matchedArr'
				:key='index'
				>
				{{ $t(`commons.${name}`)}}

			</el-breadcrumb-item>
			<button style="right: 10px">设置图标</button>
        </el-breadcrumb>-->
    </div>
</template>


<script>

export default {
	data(){
		return {
			changeBarDirection:false,
			flag:true,
			btnText:'取消锁定',
		}
	},
	created() {
	},
	computed:{
		matchedArr(){
			let temp = [],temps = [];
			this.$route.matched.filter((item,index,self) => {
				// if(item.meta.title){
				// 	const title = item.meta.title;
				//     temp.push(title);
				// }
				if(item.name){
					const name = item.name;
				    temp.push(name);
				}
			});
			temp.filter((item,index,self) => {
				if(!temps.includes(item)){
					temps.push(item);
				}
			})
			return temps;
		}
	},
	mounted(){
	},
	methods:{
		handleLefeMenu(){
		    this.$store.dispatch('setLeftCollapse');  // 折叠菜单
			this.$store.dispatch('handleLeftMenu');  // 改变菜单宽度 180->35/35-180
			this.changeBarDirection = !this.changeBarDirection;
			this.flag = !this.flag;
			if(this.flag==true){
				this.btnText = "取消锁定"
			}else if(this.flag==false){
				this.btnText = "锁定"
			}
		}
	},
	watch: {
     
    }
}



</script>

<style lang="less">
	.bread_container{
		background-color: #eaebec;
		width: 100%;
		.bars{
			float: right;
			margin-top: 4px;
			cursor: pointer;
			margin-right: 10px;
			margin-bottom: 5px;
			span{
				font-size:12px;
				color: #333;
			}
			.isactive{
				-webkit-transform: rotate(90deg);
				transform: rotate(90deg);
				transition: .38s;
				-webkit-transform-origin: 50% 50%;
				transform-origin: 50% 50%;
			}
		}
		.breadcrumb{
			height: 30px;
			line-height: 30px;
			.breadbutton{
				/*float:left;*/
				margin:4px 5px 0 0;
				
			}
			button{
				right: 22px;
				position: absolute;
			}
		}
	}
</style>


