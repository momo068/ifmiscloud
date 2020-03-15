<template>
  <!--  <div class="container">
        <div class="wrapper">
            <div class="section" style="height:500px;width:100%" v-for="(item, index) in list" :key="index" :style="{'height':index==0?'500px':'300px'}">
                <div style="width:100%;height:100%;font-size:30px;text-align:center;font-weight:bold;color:#fff;" :style="{'background':item.backgroundcolor}">{{item.name}}</div>
            </div>
        </div>
&lt;!&ndash;        <div id="nac" style="height:300px;"></div>&ndash;&gt;
        <nav style="position:fixed;right:25%;top:100px;">
            <a class="nav1" v-for="(item, index) in navList" :key="index" @click="jump(index)" :class="index==0?'current':''">{{item}}</a>
        </nav>
    </div>-->
    <div class="x-container je-tiledview-menusview x-layer x-container-default x-border-layout-ct x-border-box"
         style="width: 960px; right: auto; left: 230px; top: 50px; height: 739px; z-index: 19010;" id="container-1036"
         tabindex="-1">
        <div class="x-component menusview-menus x-border-item x-box-item x-component-default" id="dataview-1034"
             tabindex="-1" style="margin: 0px; width: 780px; right: auto; left: 0px; top: 80px; height: 659px;">
            <div class="scroll-body">
                <div class="model" data-text="办公系统（OA）" data-type="menu">办公系统（OA）</div>
                <div class="menu" data-text="工作流程"  data-type="menu">工作流程</div>
                <div class="func" >
                    <div class="icon fe icon-home" style="margin-right:5px;"></div>
                    <span>办公展板</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" >
                    <div class="icon jeicon jeicon-qjsq" style="margin-right:5px;"></div>
                    <span>请假申请</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" >
                    <div class="icon jeicon jeicon-jbsq" style="margin-right:5px;"></div>
                    <span>加班申请</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="AlAyO5256p78Cx8RyOW">
                    <div class="icon fa fa-list-ul" style="margin-right:5px;"></div>
                    <span>表格统计</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="A1XHmpelednx8v3loiJ">
                    <div class="icon fa fa-list-ul" style="margin-right:5px;"></div>
                    <span>列表锁定</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="hiswFLXKfUHyzKuEVFr">
                    <div class="icon fa fa-list-ul" style="margin-right:5px;"></div>
                    <span>列表标记批注</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="VHvpMJMq6EhoCrPDRUa">
                    <div class="icon fa fa-list-ul" style="margin-right:5px;"></div>
                    <span>列头提示</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="Vfb3Y6hxbOOrhcow7eG">
                    <div class="icon fa fa-list-ul" style="margin-right:5px;"></div>
                    <span>列数据超链接</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="cIRTu4VBkBOyZjPDBGr">
                    <div class="icon fa fa-list-ul" style="margin-right:5px;"></div>
                    <span>列数据样式</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="A83ju6cmZcCqIuSigKs">
                    <div class="icon fa fa-list-ul" style="margin-right:5px;"></div>
                    <span>列表操作列</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="lHokheylfNdlDNGP5fd">
                    <div class="icon fa fa-list-ul" style="margin-right:5px;"></div>
                    <span>数据列自适应</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="5Cx6tVcSks4tHfAWm93">
                    <div class="icon fa fa-list-ul" style="margin-right:5px;"></div>
                    <span>复杂列头</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="menu" data-text="表单组件" data-id="QtUJC1g8JMWjqAj9MZq" data-type="menu">表单组件</div>
                <div class="func" data-id="nGgX0thjJuDmPtzWdMs">
                    <div class="icon jeicon jeicon-form-component" style="margin-right:5px;"></div>
                    <span>普通表单</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="8nvRFEPYOkmmQKlPGvQ">
                    <div class="icon jeicon jeicon-form-component" style="margin-right:5px;"></div>
                    <span>区域定位表单</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="YILOwL6EhWAFM0do2zq">
                    <div class="icon jeicon jeicon-form-component" style="margin-right:5px;"></div>
                    <span>标题表单</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="T77ihX68XhbuST7Ycw9">
                    <div class="icon jeicon jeicon-form-component" style="margin-right:5px;"></div>
                    <span>仿真表单</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="gs7Peo6oyoCUtyy4xO7">
                    <div class="icon jeicon jeicon-form-component" style="margin-right:5px;"></div>
                    <span>附件字段</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="hEEBrqhH8p1pr5tZsCn">
                    <div class="icon jeicon jeicon-form-component" style="margin-right:5px;"></div>
                    <span>大文本字段</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="whn6PI3Fo0F6B7P3KxD">
                    <div class="icon jeicon jeicon-form-component" style="margin-right:5px;"></div>
                    <span>查询选择字段</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="rilKPiTndo4NhNg2YOB">
                    <div class="icon jeicon jeicon-form-component" style="margin-right:5px;"></div>
                    <span>特殊字段</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="menu" data-text="按钮组件" data-id="G0wR7eCNLL1Jk548toS" data-type="menu">按钮组件</div>
                <div class="func " data-id="fGcafWhTiAWMALxcoyG">
                    <div class="icon jeicon jeicon-btn" style="margin-right:5px;"></div>
                    <span>列表按钮</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func" data-id="rho9UY9lNQMQomWHBtc">
                    <div class="icon jeicon jeicon-btn" style="margin-right:5px;"></div>
                    <span>Action按钮</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="7Q2OV3aStoIvs6hECNM">
                    <div class="icon jeicon jeicon-btn" style="margin-right:5px;"></div>
                    <span>列表自定义按钮</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="Pj7gRsCJsNvAC3nxJlU">
                    <div class="icon jeicon jeicon-btn" style="margin-right:5px;"></div>
                    <span>表单自定义按钮</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="model" data-text="插件工具" data-id="02f0ec7a-f946-4363-ae20-be8bfbff621d" data-type="menu"
                     id="ext-gen1117">插件工具
                </div>
                <div class="menu" data-text="新闻公告" data-id="POEuSvAb9iUzHPFcd5k" data-type="menu">新闻公告</div>
                <div class="func " data-id="1334c71a-e9c0-4409-9353-6b028edd6159">
                    <div class="icon fa fa-photo" style="margin-right:5px;"></div>
                    <span>图片新闻</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="09109f11-e7a0-47ff-8e80-f45c0e23a85d">
                    <div class="icon fe icon-th-large-outline" style="margin-right:5px;"></div>
                    <span>公告栏目</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="72c29f8b-fd51-4cae-846b-b098444ef0c0">
                    <div class="icon fa fa-volume-up" style="margin-right:5px;"></div>
                    <span>公文公告</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="menu" data-text="内部邮件" data-id="a8331727-da1d-4646-8618-b63037a7b155" data-type="menu">内部邮件
                </div>
                <div class="func " data-id="ae24abbb-c987-4ba8-8aed-748a66243cf5">
                    <div class="icon fa fa-mail-forward" style="margin-right:5px;"></div>
                    <span>发件箱</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="dd91803a-779f-49d0-a417-2cf1424c0246">
                    <div class="icon fe icon-mail-squared" style="margin-right:5px;"></div>
                    <span>草稿箱</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="88db718a-fcf4-427c-a2cb-022143d0d43c">
                    <div class="icon fa fa-mail-reply" style="margin-right:5px;"></div>
                    <span>收件箱</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="menu" data-text="其他工具" data-id="7BFinbATwav3MWF24Ln" data-type="menu">其他工具</div>
                <div class="func " data-id="5210ab83-af96-43ba-8e10-ad670fa89844">
                    <div class="icon fe icon-database" style="margin-right:5px;"></div>
                    <span>我的文件库</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="5f578874-ca65-44a3-8e7b-da2feccf9379">
                    <div class="icon fa fa-database" style="margin-right:5px;"></div>
                    <span>公司资料库</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
                <div class="func " data-id="dede454b-243b-45d0-af3c-f819d5630e53">
                    <div class="icon fe icon-flow-tree" style="margin-right:5px;"></div>
                    <span>我的流程历史</span><i class="star-o fa fa-star-o"></i><i class="star fa fa-star"></i></div>
            </div>
        </div>
        <div class="x-component menusview-location x-border-item x-box-item x-component-default"
             style="width: 180px; margin: 0px; right: auto; left: 780px; top: 80px; height: 659px;" id="dataview-1035"
             tabindex="-1">
            <div class="scroll-body">
                <div class="item model" data-id="5Rhnok0L47D0BOkCpYk" data-text="办公系统（OA）">办公系统（OA）</div>
                <div class="item menu" data-id="bCrJkBYHNmv33TsLJ9g" data-text="工作流程">工作流程</div>
                <div class="item model" data-id="7UOlneMd7fHH03WlPhX" data-text="JEPaaS 功能演示">JEPaaS 功能演示</div>
                <div class="item menu" data-id="ecNSADXV2mGoYrZWDyT" data-text="列表组件">列表组件</div>
                <div class="item menu" data-id="QtUJC1g8JMWjqAj9MZq" data-text="表单组件">表单组件</div>
                <div class="item menu" data-id="G0wR7eCNLL1Jk548toS" data-text="按钮组件">按钮组件</div>
                <div class="item menu" data-id="ZfqiokPsqAx10WWWu1G" data-text="后台代码示例">后台代码示例</div>
                <div class="item model" data-id="02f0ec7a-f946-4363-ae20-be8bfbff621d" data-text="插件工具" id="ext-gen1118">
                    插件工具
                </div>
                <div class="item menu" data-id="POEuSvAb9iUzHPFcd5k" data-text="新闻公告">新闻公告</div>
                <div class="item menu" data-id="a8331727-da1d-4646-8618-b63037a7b155" data-text="内部邮件">内部邮件</div>
                <div class="item menu" data-id="7BFinbATwav3MWF24Ln" data-text="其他工具">其他工具</div>
            </div>
        </div>
    </div>
</template>
<script>
import {setTitle} from "../utils/mUtils";

export default {
    data() {
        return {
            scroll: '',
            list: [],
            navList: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        dataScroll() {
            this.scroll = document.getElementsByTagName("section")[0].scrollTop;
        },
        jump(index) {
            let jump = document.getElementsByClassName('section');
            // 获取需要滚动的距离
            let total = jump[index].offsetTop;
            // Chrome
            document.getElementsByTagName("section")[0].scrollTop= total;
            // $('html, body').animate({
            // 'scrollTop': total
            // }, 400);
        },
        loadSroll: function () {
            const self = this;
            const $navs = document.getElementsByClassName('nav1');
            const sections = document.getElementsByClassName('section');
            for (const i = sections.length - 1; i >= 0; i--) {
                if (self.scroll >= sections[i].offsetTop - 80) {
                    $navs.eq(i).addClass("current").siblings().removeClass("current");
                    break;
                }
            }
        }
    },
    watch: {
        scroll: function () {
            this.loadSroll()
        }
    },
    mounted() {
        window.addEventListener('scroll', this.dataScroll);
    }
}
</script>
<style scoped lang="less">

    .nav1 {
        display: block;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #eee;
        margin: 10px 0;
    }
    .current {
        color: #fff;
        background: red;
    }

  .je-tiledview-menusview {
        background-color: rgb(255, 255, 255);
        left: 180px;
    }
    .je-mainview-bg > .x-panel-body, .x-accordion-item .x-accordion-hd, .x-border-layout-ct, .x-panel-body, .x-panel-header, .x-splitter, .x-toolbar, .x-toolbar-default, .x-toolbar-footer {
        background: none 0px 0px rgb(255, 255, 255);
    }
    .x-border-layout-ct {
        zoom: 1;
        overflow: hidden;
    }
    .x-border-box, .x-border-box * {
        box-sizing: border-box;
    }
    .je-tiledview-menusview .menusview-menus {
        background-color: rgb(255, 255, 255);
        padding-top: 5px;
        padding-bottom: 50px;
    }
    .je-tiledview-menusview .menusview-menus .scroll-body {
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
        width:100%;
        padding: 10px 20px 10px 20px;
    }
    .je-tiledview-menusview .menusview-menus .model {
        font-size: 18px;
        font-weight: 700;
        color: rgb(40, 40, 40);
        padding: 20px 0px 5px 20px;
    }
    .je-tiledview-menusview .menusview-menus .menu {
        font-size: 14px;
        font-weight: 700;
        color: rgb(40, 40, 40);
        padding: 10px 30px 5px;
    }
    .je-tiledview-menusview .menusview-menus .func {
        font-size: 14px;
        display: inline-block;
        width: 24%;
        color: rgb(121, 121, 121);
        cursor: pointer;
        position: relative;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 5px 0px 5px 30px;
        overflow: hidden;
    }
    .je-tiledview-menusview .menusview-menus .func:hover {
        background-color: #e8e8e8;
    }
    .je-tiledview-menusview .menusview-menus .func .icon {
        display: inline-block;
        margin-right: 5px;
    }
    .fe {
        font-size: 16px;
    }
    .je-tiledview-menusview .menusview-menus .func .star, .je-tiledview-menusview .menusview-menus .func .star-o {
        position: absolute;
        font-size: 14px;
        visibility: hidden;
        color: rgb(56, 107, 208);
        top: 0px;
        left: 0px;
        padding: 8px;
    }
    .je-tiledview-menusview .menusview-menus .func .star, .je-tiledview-menusview .menusview-menus .func .star-o {
        position: absolute;
        font-size: 14px;
        visibility: hidden;
        color: rgb(56, 107, 208);
        top: 0px;
        left: 0px;
        padding: 8px;
    }
    .je-tiledview-menusview .menusview-location {
        background-color: rgb(255, 255, 255);
        padding: 50px 0px;
    }
    .je-tiledview-menusview .menusview-location .scroll-body {
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
        width: 200px;
    }
    .je-tiledview-menusview .menusview-location .model {
        font-weight: 700;
        color: rgb(40, 40, 40);
    }
    .je-tiledview-menusview .menusview-location .item.item-over, .je-tiledview-menusview .menusview-location .item.item-select {
        color: rgb(56, 107, 208);
        border-left-color: rgb(56, 107, 208);
        font-weight: 700;
    }
    .je-tiledview-menusview .menusview-location .item {
        font-size: 14px;
        position: relative;
        cursor: pointer;
        padding: 6px 10px;
        border-left: 2px solid rgb(221, 221, 221);
    }

    .je-tiledview-menusview .menusview-location .item {
        font-size: 14px;
        color: rgb(121, 121, 121);
        position: relative;
        cursor: pointer;
        padding: 6px 10px;
        border-left: 2px solid rgb(221, 221, 221);
    }
    .x-box-item {
        position: absolute !important;
    }
    </style>




























</style>