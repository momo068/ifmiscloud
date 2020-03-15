<template>
   <div class="menu_left cflex" :style="{width:sidebar.width+'px'}" @mouseover.stop="overShow()" @mouseout.stop="outHide()">
        <!--@mouseover="overShow()" @mouseout="outHide()"-->
        <div class="menu_page_bottom is-scroll-left" >
            <el-menu 
                mode="vertical"
                theme="dark" 
                :show-timeout="200"
                :default-active="$route.path" 
                :collapse="isCollapse"
                :background-color="menuObj.bgColor"
                :text-color="menuObj.textColor"
                :active-text-color="menuObj.activeTextColor"
                :style="{width:sidebar.width+'px'}"
                >
                <img src="../assets/img/33.png" width="22" style="margin-left:15px;display: block;"/>
                <el-menu-item class="dr
                rawer = true">
                    <!--<icon-svg />-->
                    <span >产品与功能</span>
                </el-menu-item>
                    <template v-for="(item,index) in permission_routers">
                        <!--表示 有一级菜单-->
                        <router-link v-if="!item.hidden && item.noDropdown" :to="item.path+'/'+item.children[0].path" :key="index">
                            <el-menu-item class="dropItem" 
                                :index="item.path+'/'+item.children[0].path"
                                >
                                <icon-svg v-if="item.meta.icon" :icon-class="item.meta.icon" />
                                <span v-if="item.meta.title">{{ $t(`commons.${item.name}`)}}</span>
                                <!--<i>11</i>-->
                            </el-menu-item>
                        </router-link>

                        <!--表示 有二级或者多级菜单 -->
                        <el-submenu v-if="item.children  && item.children.length >= 1 && !item.hidden && !item.noDropdown"  :index="item.path" :key="index">
                            <template slot="title">
                                <icon-svg v-if="item.meta.icon" :icon-class="item.meta.icon" />
                                <span v-if="item.meta.title" slot="title">{{ $t(`commons.${item.name}`)}}</span>
                                <!--<i>22</i>-->
                            </template>
                            <!--直接定位到子路由上，子路由也可以实现导航功能-->
                            <router-link v-for="(citem,cindex) in item.children" :to="getIindex(citem,item,cindex)"  :key="cindex">
                                <el-menu-item 
                                    v-if="citem.meta.routerType != 'topmenu' && citem.meta.title"
                                    :index="getIindex(citem,item,cindex)">
                                    <span slot="title"> {{ $t(`commons.${citem.name}`)}}</span>
                                    <!--<i>33</i>-->
                                </el-menu-item> 
                            </router-link>
                        </el-submenu>
                    </template>
            </el-menu>
        </div>
       <el-drawer
               title=""
               :visible.sync="drawer"
               :direction="direction"
               :before-close="handleClose"
               :modal="modal"
               :size="drawerWidth" :style="{left:sidebar.width+'px'}">
           <div>
               <roduct-feature></roduct-feature>
           </div>
       </el-drawer>
       <fold-btn></fold-btn>
    </div>
</template>

<script>
    import {mapGetters } from 'vuex'
    import * as mUtils from "@/utils/mUtils";
    import logoImg from "@/assets/img/logo0.png";
    import RoductFeature from "./roductFeatureMenu.vue";
    import FoldBtn from './foldBtn.vue';


    export default {
        name: "left-Menu",
        data() {
            return {
                menuObj:{
                    bgColor:'#e8e8e8',
                    textColor:'#333',
                    activeTextColor:'#fff',
                },
                logo:logoImg,
                drawer: false,
                direction: 'ltr',
                drawerWidth: '78%',//抽屉的宽度
                showGallery:false,
                modal:false,
            };
        },
        components:{
            RoductFeature,
            FoldBtn,
        },
        computed:{
                ...mapGetters([
                    'permission_routers',
                    'isCollapse',
                    'sidebar',
                    'menuIndex'
                ]),
    },
    created(){
    },
    mounted () {
      /*  if (this.sidebar.opened === false){
             this.overShow();
         }*/
    },
    methods: {
        getIindex(citem,item,cindex){
            return (citem.meta.titleList)?item.path+'/'+citem.path+'/'+citem.meta.titleList[0].path:item.path+'/'+citem.path;
        },
        handleClose(done) {
//            this.$confirm('确认关闭？')
//                    .then(_ => {
//                done();
//        })
//        .catch(_ => {});
            done();
        },
//        handleBannerClick(){
//            this.showGallery=true;
//        }
        overShow(){
            this.$store.commit('overState');
        },
        outHide(){
            this.$store.commit('outState');
        }

    }
    };
</script>


<style lang="less" scoped>
  @left-bgColor:#fff;
  @icon-link:#FF6C60;
    .menu_left{
        position: absolute;
        top:60px;
        left:0;
        bottom:0;
        background-color: #e8e8e8;
    }
  .el-dialog__wrapper{
      top:62px !important;
  }
  .menu_left /deep/  .el-menu{
      .el-menu-item:hover{
          color: #fff !important;
          background-color: #317fea  !important;
      }
      .el-menu-item.is-active {
          color: #fff !important;
          background-color: #317fea !important;
      }
      .dropItem{
          padding-left: 20px !important;
      }
      .el-submenu__title{
          padding-left: 20px !important;
      }
      .svg-icon{
          margin-right: 15px;
      }
      .el-submenu__title:hover{
          color: #fff !important;
          background-color: #317fea !important;
      }
  }
  .menu_page_bottom {
      width:100%;
      overflow-y: scroll;
      overflow-x: hidden;
      flex:1;
      margin-top:3px;
      z-index: 10;
  }
  .menu_left /deep/  .el-drawer__body{
      overflow-y: auto;
      width: 80%;
  }

</style>

<style lang="less">
    //滚动条样式全局
    .is-scroll-right::-webkit-scrollbar-thumb, .is-scroll-left::-webkit-scrollbar-thumb, .el-scrollbar::-webkit-scrollbar-thumb{
        background-color:#e1e1e1;
    }
</style>
