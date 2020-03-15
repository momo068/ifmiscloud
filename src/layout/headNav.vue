<template>
    <header class="head-nav rflex " :style="{'width':headNavWidth+'px'}" id='header_container'>
        <div class="menu_page_top rflex">
            <img :class='["logo",{"closeLogo":!sidebar.opened}]' :src="logo" alt="" >
            <!--<span class='title' v-show="sidebar.opened">{{$t('commons.xiaoai')}}<i></i></span>-->
            <span class='title'>预算单位财务集中管理平台</span>

        <div class="top-nav" ref="rightNav">
            <top-menu></top-menu>
            <div class="userinfo-right rflex">
                <div class="notify-row">
                    <div class="now-date">2019年11月26日</div>
                    <div class="cur-depart">当前单位：
                        <el-button type="text" @click="dialogWorkVisible = true">合肥市财政局</el-button>
                    </div>
                    <el-dialog title="工作环境" :visible.sync="dialogWorkVisible" :append-to-body="true"  :center="true" width="40%" >
                        <el-form :model="form" size="small">
                            <el-form-item label="账套" >
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="单位" >
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="期间" >
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-checkbox label="登录时使用默认账套单位" name=""></el-checkbox>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogWorkVisible = false" size="small">取 消</el-button>
                            <el-button type="primary" @click="dialogWorkVisible = false" size="small">确 定</el-button>
                        </div>
                    </el-dialog>
                </div>
                <!--<div class="userinfo">-->
                    <!--<el-menu -->
                       <!--class="el-menu-demo" -->
                       <!--mode="horizontal" -->
                       <!--&gt;-->
                        <!--<el-submenu index="1" popper-class="langItem">-->
                            <!--<template slot="title">-->
                                <!--<img :src="langLogo" class='langAvatar' alt="">-->
                            <!--</template>-->
                            <!--<el-menu-item index="1-1" @click="changeLocale('zh')">-->
                                <!--<img :src="chinaImg" class='langAvatar' alt="">-->
                                <!--<span class="intro">中文</span>-->
                            <!--</el-menu-item>-->
                            <!--<el-menu-item index="1-2" @click="changeLocale('en')">-->
                                <!--<img :src="americaImg" class='langAvatar' alt="">-->
                                <!--<span class="intro">EngList</span>-->
                            <!--</el-menu-item>-->
                        <!--</el-submenu>-->

                        <!--<el-submenu index="2"  popper-class="infoItem">-->
                            <!--<template slot="title">-->
                                <!--<div class='welcome'>-->
                                    <!--<span class="name">{{$t('commons.hi')}},</span>-->
                                    <!--<span class='name avatarname'> {{ $t(`commons.${name}`)}}</span>-->
                                <!--</div>-->
                                <!--<img :src="avatar" class='avatar' alt="">-->
                            <!--</template>-->
                            <!--<el-menu-item index="2-1" @click="setDialogInfo('info')">{{ $t('commons.infoShow') }}</el-menu-item>-->
                            <!--<el-menu-item index="2-2" @click="setDialogInfo('pass')">{{ $t('commons.infoModify') }}</el-menu-item>-->
                            <!--<el-menu-item index="2-3" @click="setDialogInfo('logout')">{{ $t('commons.quit') }}</el-menu-item>-->
                        <!--</el-submenu>-->
                    <!--</el-menu>-->
                <!--</div>-->
                <div class="userinfo" >
                    <!--<template slot="title" >-->
                    <el-popover
                            placement="bottom"
                            width="250"
                            trigger="click"
                    >
                        <div class='welcome'  slot="reference">
                            <span class="name">{{$t('commons.hi')}},</span>
                            <span class='name avatarname'> {{ $t(`commons.${name}`)}}</span>
                            <img :src="avatar" class='avatar' alt="">
                        </div>
                        <!--<user-setting></user-setting>-->
                        <div class="x-panel je-menu-item34h je-menu-arrow je-menu-arrow-tr x-layer x-panel-default x-menu x-menu-plain x-border-box"
                             style="width: 250px; height: 200px; right: auto; left: 1177px; top: 48px; z-index: 19000;" id="menu-1018"
                             tabindex="-1">
                            <div id="menu-1018-body"
                                 class="x-panel-body x-menu-body x-unselectable x-panel-body-default x-layout-fit x-panel-body-default"
                                 style="padding: 0px; width: 250px; left: 0px; top: 0px;">
                                <div class="x-container je-app-userinfo x-fit-item x-container-default x-column-layout-ct x-menu-item-cmp"
                                     id="appinfo-userinfo-1019" tabindex="-1" style="margin: 0px; width: 248px;"><span
                                        id="appinfo-userinfo-1019-outerCt" style="display: table; width: 100%; table-layout: fixed;"><div
                                        id="appinfo-userinfo-1019-innerCt" style="display: flex;flex-wrap: wrap;vertical-align:top;" class="">
                                    <div class="x-component userinfo x-column x-component-default" id="component-1020" >
                                        <div class="photoinfo"><img class="je-user-photo photo-img"
                                                                    src="/je/document/preview?fileKey=ZylWsGO16tbPyTtTl1J"></div>
                                        <div class="text">系统管理部</div>
                                    </div>
                                    <div class="x-component config x-column x-component-default" id="component-1021" style="width: 248px;">
                                        <div class="item password"  @click='modifyPassword()'>密码修改</div>
                                        <div class="item prexy" style=" cursor: unset;" @click="">用户设置</div>
                                        <div class="item phone">用户消息</div>
                                        <div class="item email">个人设置</div>
                                    </div>
                                    <div class="x-component logout x-column x-component-default" id="component-1024" style="width: 248px;" @click="setDialogInfo('logout')">
                                        <i class="fe icon-logout" ></i> 安全退出
                                    </div>
                                </div></span></div>
                                <div class="x-menu-icon-separator" id="ext-gen1071">&nbsp;</div>
                            </div>
                        </div>
                    </el-popover>
                    <!--</template>-->

                </div>
            </div>
        </div>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from "vuex";
    import * as mUtils from '@/utils/mUtils'
    import { setToken,getToken } from '@/utils/auth'
    import store from "@/store";
    import topMenu from "./topMenu";
    import wechatImg from "@/assets/img/wechat.jpg";
    import qqImg from "@/assets/img/qq.png";
    import logoImg from "@/assets/img/logo0.png";
    import chinaImg from "@/assets/img/china.svg";
    import americaImg from "@/assets/img/america.svg";
    import { github } from "@/utils/env";


    export default {
          name: 'head-nav',
          data(){
            return{
                logo:logoImg,
                langLogo:getToken('langLogo') || americaImg,
                chinaImg:chinaImg,
                americaImg:americaImg,
                wechat:{
                    wechatImg:wechatImg,
                    isWechat:false
                },
                qq:{
                    qqImg:qqImg,
                    isQq:false,
                },
                github:github,
                menu:{
                    userBgcolor:'#f0f2f5'
                },
                dialogWorkVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
            }
          },
          components:{
            topMenu
          },
          computed:{
            ...mapGetters(['name','avatar','sidebar']),
             headNavWidth(){
                return document.body.clientWidth
            }
              
          },
          created(){
            
          },
          mounted(){
          },
          methods:{
              modifyPassword(){
                  this.$emit("showDialog");
              },
              showWechat(){
                  this.wechat.isWechat = true;
              },
              hideWechat(){
                 this.wechat.isWechat = false;
              },
              showQq(){
                  this.qq.isQq = true;
              },
              hideQq(){
                  this.qq.isQq = false;
              },
              logout(){
                  this.$store.dispatch('LogOut').then(() => {
                      location.reload();
                  })
              },
             /**
             * 弹出框-修改密码或者系统设置   
             * @param {string} cmditem 弹框类型
             */
            setDialogInfo(cmditem) {
                  debugger;
                switch (cmditem) {
                    case 'info':
                        this.$router.push('/infoManage/infoShow/infoShow1');
                        break;
                    case 'pass':
                        this.$router.push('/infoManage/infoModify/infoModify1');
                        break;
                    case 'logout':
                        this.logout();
                        break;
                }
            },
            // 切换语言
            changeLocale(type){
                setToken('lang',type);
                this.$i18n.locale = type;
                if(type === 'en'){
                    this.langLogo = this.americaImg;
                }else{
                    this.langLogo = this.chinaImg;
                }
                setToken('langLogo',this.langLogo);
            }
          }
    }
</script>

<style scoped lang='less'>
    .menu_page_top{
        width:100%;
        height: 60px;
        align-items: center;
        justify-content: space-around;
        text-transform: uppercase;
        box-sizing: border-box;
        .logo {
            height: 34px;
            width: 91px;
            vertical-align: middle;
            display: inline-block;
            margin-left: 5px;
        }
        .closeLogo{
            height: 34px;
            width: 91px;
        }
        .title{
            font-size: 20px;
            color: #fff;
            margin-left: 5px;
            margin-top: -4px;
        }
    }
    .top-nav{
        display: flex;
        flex: 1;
        width:100%;
        padding-right: 15px;
        justify-content: space-between;
    }
    .top-nav /deep/  .menu_top{
        .el-menu-demo{
            background:none;
            height: auto;
        }
    }
    .head-nav {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 29;
        transition: width .2s;
        justify-content: space-between;
        height: 60px;
        box-sizing: border-box;
        background: #317fea;
        background: -moz-linear-gradient(right, #317fea 0%, #35a9fa 100%);
        background: -webkit-linear-gradient(right, #317fea 0%,#35a9fa 100%);
        background: -o-linear-gradient(right, #317fea 0%,#35a9fa 100%);
        background: -ms-linear-gradient(right, #317fea 0%,#35a9fa 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#317fea', endColorstr='#35a9fa',GradientType=0 );
        background: linear-gradient(to right, #317fea 0%,#35a9fa 100%);
        .logout {
            vertical-align: middle;
            cursor: pointer;
        }
    }
    .middle{
       align-items: center;
       border:1px solid;
    }
    .userinfo-right{
        width:320px;
        padding: 0 10px;
        justify-content: space-between;
    }
    .userinfo {
        line-height: 60px;
        text-align:right;
    }
    .avatar{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
        margin-left: 8px;
    }
    .langAvatar{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }
    .welcome{
        display: inline-block;
        vertical-align: middle;
        padding: 0 5px;
        .name{
            line-height: 20px;
            text-align: center;
            font-size: 12px;
            color: #fff;
        }
        .avatarname{
            color:#a9d86e;
            font-weight:bolder;
            font-size: 13px;
            color: #fff;
        }
    }

    .username {
        cursor: pointer;
        margin-right: 5px;
    }
    .border{
        border:1px solid;
    }
    .notify-row{
        flex:1;
        padding: 10px;
        font-size: 14px;
        color: #fff;
        margin-right: 20px;
        text-align: right;
    }
    .notify-row /deep/ .el-button--text{
        text-decoration: underline;
        color: #fff;
        font-size: 14px;
    }
   
    ul.top-menu > li {
        position: relative;
    }

    .x-fit-item {
        position: relative;
    }
    .je-app-userinfo .userinfo {
        height: 50px;
        padding: 10px;
        position: relative;
        line-height: 25px;
        padding-left: 50px;
    }

    .je-app-userinfo .userinfo .photoinfo {
        position: absolute;
        left: 10px;
        top: 10px;
    }
    .je-user-photo {
        width: 36px;
        height: 36px;
        border-radius: 100%;
        display: inline-block;
        cursor: pointer;
    }
    .je-app-userinfo .userinfo .text {
        font-size: 14px;
        display: inline-block;
        margin-left: 10px;
        color: #444;
        vertical-align: middle;
        line-height: 1.2;
    }

    .je-app-userinfo .config {
        height: 80px;
        border: 1px solid #ecf0f5;
        border-width: 1px 1px 0 0;
    }
    .je-app-userinfo .config .item {
        height: 40px;
        width: 48%;
        text-align: center;
        line-height: 40px;
        display: inline-block;
        border: 1px solid #ecf0f5;
        border-width: 0 0 1px 1px;
        cursor: pointer;
        color: #444;
    }
    .je-app-userinfo .logout {
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #444;
        font-size: 14px;
        border-top: 1px solid #ecf0f5
    }

    .je-app-userinfo .logout:hover {
        background-color: rgba(0,0,0,.1)
    }
    .fe {
        font: normal normal normal 16px/1 fontello;
        display: inline-block;
    }

</style>
<style  lang='less'>
    .el-dialog__body{
        padding-bottom: 10px !important;
        .el-select{
            .el-input {
                 width: 450px;
            }
        }
    }
    .el-dialog{
        border-radius: 15px !important;
    }
    .el-dialog__header{
        border-bottom: 1px solid #f1f1f1;
        background-color: #fbfbfb;
        border-radius: 15px 15px  0 0;
    }
</style>
