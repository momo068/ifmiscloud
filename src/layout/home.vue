<template>
    <div class="home rflex">
        <head-nav  @showDialog="showSettingDialog"></head-nav>
        <left-menu></left-menu>
        <div class="menu_right wflex el-scrollbar" ref="menu_right" :style="{left:sidebar.width+'px'}">
            <div class="menu_content" ref="menu_content">

                <router-view></router-view><!--页面渲染入口-->
            </div>
            <footerNav></footerNav>
            <backTop :ele="$refs.menu_right"></backTop>
        </div>
        <div class="password">
            <modify-password   v-if="isShowDialog.show" :isShow="isShowDialog.show"  @hideSettingDialog="hideSettingDialog"></modify-password>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex'

    import HeadNav from './headNav.vue';
	import LeftMenu from './leftMenu.vue';
	import Bread from './foldBtn.vue';
	import FooterNav from './footerNav.vue';
	import backTop from 'cps/backTop';
    import modifyPassword from './modifyPassword.vue';

    export default {
        name: 'home',
        data(){
            return {
                isShow:false,
                isShowDialog:{
                    show:false
                },
            }
        },
        computed:{
            ...mapGetters(['sidebar']),
        },
        components:{
            HeadNav,
            LeftMenu,
            Bread,
            FooterNav,
            backTop,
            modifyPassword
        },
        created() {
        },
        mounted (){
        },
        watch:{
          
        },
        methods:{
            showSettingDialog(){
                this.isShowDialog.show = true;
            },
            hideSettingDialog(){
                this.isShowDialog.show = false;
            }
        }
    }
</script>
<style scoped lang='less'>
    .home{
        .menu_right{
            overflow: auto;
            position: absolute;
            right:0;
            top:0;
            bottom:0;
            background:#f0f3f7;
            .menu_content{
                position: relative;
                margin-top:60px;
                width:100%;
                background:#f0f2f5;
            }

        }
    }
</style>
