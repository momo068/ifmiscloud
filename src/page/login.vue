<template>
  	<div class="login_page">
		<div class="leftImg"></div>
		<div class="rightArea">
			<div class="topTips">
				<span>当前时间:{{getCurrentTime}}</span>
				<a href="" ><span class="down-icon"></span></a>
			</div>
	  		<transition name="form-fade" mode="in-out">
	  			<section class="form-contianer">
				<div class='titleArea'>
					<img class="logo" :src="logo" alt="预算单位财务集中管理平台">
					<span class='title'>预算单位财务集中管理平台</span>
				</div>
				<el-tabs v-model="activeName">
					<el-tab-pane label="普通登录" name="first">
						<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
							<el-form-item prop="username" class="login-item">
								<span class="loginTips"><icon-svg icon-class="iconuser" /></span>
								<el-input @keyup.enter.native ="submitForm('loginForm')"  class="area" type="text" placeholder="用户名" v-model="loginForm.username" ></el-input>
							</el-form-item>
							<el-form-item prop="password" class="login-item">
								<span class="loginTips"><icon-svg icon-class="iconLock" /></span>
								<el-input @keyup.enter.native ="submitForm('loginForm')" class="area" type="password" placeholder="密码" v-model="loginForm.password"></el-input>
							</el-form-item>
							<el-form-item  label="" >
								<span class="loginTips"><i class="year-icon"></i></span>
								<el-select  placeholder="请选择年度" v-model="loginForm.year" @change="handleChange">
									<el-option
											v-for="item in yearList"
											:key="item.value"
											:label="item.label"
											:value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
							<!--<el-form-item   label="" style="width: 180px;display: inline-block;" @change="handleChange">
								<el-select placeholder="请选择区划" v-model="loginForm.area">
									<el-option
											v-for="item in areaList"
											:key="item.value"
											:label="item.label"
											:value="item.value">
									</el-option>
								</el-select>
							</el-form-item>-->
							<el-form-item label="" v-if="showIdentify">
								<span class="loginTips"><i class="ver-icon"></i></span>
								<el-input type="text"  placeholder="请输入验证码" style="width: 200px;float: left;"  v-model="loginForm.verifycode"></el-input>
								<div class="identifybox">
									<div @click="refreshCode">
										<s-identify :identifyCode="identifyCode"></s-identify>
									</div>
								</div>
								<el-button @click="refreshCode" type='text' class="textbtn">换一换</el-button>
							</el-form-item>
							<el-form-item>
								<el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
							</el-form-item>
						</el-form>
					</el-tab-pane>
					<el-tab-pane label="CA登录" name="second">
						<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
						<img src="../assets/img/ca-pic.gif" alt="" class="ca-img" ref="ca" style="margin:50px auto">
						<el-form-item  label="" >
							<span class="loginTips"><i class="year-icon"></i></span>
							<el-select  placeholder="请选择年度" v-model="loginForm.year" @change="handleChange">
								<el-option
										v-for="item in yearList"
										:key="item.value"
										:label="item.label"
										:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<!--<el-form-item   label="" style="width: 180px;display: inline-block;">
							<el-select placeholder="请选择区划" v-model="loginForm.area">
								<el-option
										v-for="item in areaList"
										:key="item.value"
										:label="item.label"
										:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>-->

						<el-form-item style="clear:both">
							<el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn" >认证</el-button>
						</el-form-item>
						</el-form>
					</el-tab-pane>
				</el-tabs>

	  		</section>
	  	</transition>
		<!--<div class="foot">
			<p>Copyright (C)2010 安徽省财政厅</p>
		</div>-->
		</div>
  	</div>
</template>

<script>
	import logoImg from "@/assets/img/logo1.png";
	import { login } from "@/api/user";
    import { setToken } from '@/utils/auth';

	import SIdentify from '@/components/identify/identify.vue';

	export default {
		data() {
			return {
				logo: logoImg,
                activeName: 'first',
				loginForm: {
					username: 'admin',
					password: '123456',
					year: '',
					area: '',
					verifycode: ''
				},
				identifyCodes: '1234567890',
				identifyCode: '',
				showIdentify:true,
				yearList: [{
					value: '选项1',
					label: '2019'
				}, {
					value: '选项2',
					label: '2018'
				}],
				areaList: [{
					value: '选项1',
					label: '安徽'
				}, {
					value: '选项2',
					label: '安徽'
				}],
				rules: {
					username: [
						{required: true, message: '请输入用户名', trigger: 'blur'},
						{min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur'}
					],
					password: [
						{required: true, message: '请输入密码', trigger: 'blur'}
					],
				}
			}
		},
        computed: {
            getCurrentTime() {
                let nowDate = new Date();
                let date = {
                    year: nowDate.getFullYear(),
                    month: nowDate.getMonth() + 1,
                    date: nowDate.getDate(),
                };
                let  systemDate = date.year + '年'  + date.month + '月' + date.date + '日';
                return  systemDate;
            }

        },
		components: {
			SIdentify
		},

		mounted() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
			this.configStatus();
		},
		methods: {
			handleChange(val) {

			},
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				for (let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
							this.randomNum(0, this.identifyCodes.length)
							];
				}
				console.log(this.identifyCode);
			},
			showMessage(type, message) {
				this.$message({
					type: type,
					message: message
				});
			},
			submitForm(loginForm) {
				this.$refs[loginForm].validate((valid) => {
					if (valid) {
						let userinfo = this.loginForm;
						login(userinfo).then(res => {
							let userList = res.data.userList;
							setToken("Token", userList.token)
							this.$router.push({path: '/'})
							this.$store.dispatch('initLeftMenu'); //设置左边菜单始终为展开状态
						})
					}
				});
			},
			configStatus(flag) {
				if (flag == 0) {
					this.showIdentify = false;
					this.$refs.ca.style.margin = '16px auto';
				}

			}
		}
	}
</script>

<style lang="less" scoped>
	.leftImg{
		width: 35%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background:url(../assets/img/leftImg.jpg);
		background-size: 100% 100%;
	}
	.titleArea{
		margin:20px 0px;
		.title{
			font:32px/2 "Microsoft yahei";
			color:#408bf2;
			display: block;
		}
	}
	.rightArea{
		width: 65%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 35%;
		right: 0;
		overflow: hidden;
		.topTips{
			margin-top:15px;
			margin-right:20px;
			text-align:right;
			span{
			    font-size: 14px;
				color: #333;
				vertical-align: middle;
			}
			.down-icon{
				display: inline-block;
				background: url(../assets/img/download.png) no-repeat center;
				width: 31px;
				height:27px;
				background-size: 24px 20px;
				margin-left: 10px;
			}
		}
	}
	.form-contianer /deep/  .el-tabs{
		.el-tabs__content {
			padding: 20px 0 0 0;
		}
		.el-tabs__header {
				.el-tabs__nav {
					width: 100%;
					border-bottom: 1px solid #d7d7d7;
					.el-tabs__item {
						color: #999;
						width: 50%;
						height: 50px;
						line-height: 50px;
						font-size: 18px;
						border: none;
					}
					.is-active {
						color: #333 !important;
					}
				}
			}

	}
	.loginForm  /deep/ .el-input__inner{
		padding-left: 40px !important;
		height: 40px !important;
		border: none;
		border-bottom: 1px solid #DCDFE6;
	}
	.form-contianer  /deep/ .el-select{
		width: 100%;
	}
	.loginForm  /deep/ .el-button--primary{
		border: 1px solid #317fea;
		background: #447cfe;
		height: 50px;
		font-size: 20px;
		border-radius: 6px;
	}
	.form-contianer{
		position: absolute;
		top: 10%;
		left: 50%;
		margin-left: -200px;
		width: 400px;
		text-align: center;
		.loginForm{
			.submit_btn{
				width: 100%;
				padding:13px 0;
			}
			.loginTips{
				position: absolute;
				left: 10px;
				z-index: 20;
				color: #888;
				font-size: 18px;
				top: 50%;
				transform: translateY(-50%);
				.year-icon{
					display: inline-block;
					background: url(../assets/img/yearicon.png) no-repeat center;
					width: 26px;
					height:26px;
                    background-size: 18px 18px;
				}
				.ver-icon{
					display: inline-block;
					background: url(../assets/img/vericon.png) no-repeat top center;
					width: 26px;
					height:30px;
					background-size: 18px 20px;
				}
			}

	    }
	}

	.manage_tip{
		margin-bottom:20px;
		.title{
			font-family: cursive;
			font-weight: bold;
			font-size: 26px;
			color:#fff;
		}
		.logo{
			width:60px;
			height:60px;
		}
	}

	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
	.foot{
		position: absolute;
		bottom: 10px;
		left:50%;
		margin-left:-95px;
		p{
			color:#c1daf9;
			font-size:12px;
		}
	}
	.code {
		width: 114px;
		height: 40px;
		border: 1px solid red;
	}
	.identifybox{
		vertical-align: middle;
		margin: 5px 10px;
		display: inline-block;
	}
</style>
