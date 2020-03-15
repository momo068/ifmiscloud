
<template>
    <div>
        <div slot="header" class="title">
            <span>财务资讯</span>
            <span style="margin-left: 20px;">
                <el-switch  v-model="switch1">
                </el-switch>
            </span>
            <el-button style="float: right; padding: 3px 0;font-size: 14px" type="text">更多</el-button>
        </div>
        <div class="card-box">
            <el-col :span="24">
                <div v-for="item in noticelist"  class="text item">
                    <span>{{item.text}}</span>
                    <span class="notice-date">{{item.date}}</span>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script>

    export default {
        name:'finanInfo',
        data() {
            return {
                noticelist:[{
                    text:'2018年支持加工贸易专项资金拟扶持项目公示',
                    date:'2019-11-20'
                },{
                    text:'关于本级非税收入汇缴结算账户中待结算资金划缴结库的公告...',
                    date:'2019-11-28'
                },{
                    text:'2018年支持加工贸易专项资金拟扶持项目公示',
                    date:'2019-11-20'
                },{
                    text:'关于本级非税收入汇缴结算账户中待结算资金划缴结库的公告...',
                    date:'2019-11-28'
                }],
                switch1:true,
            };
        }
    }
</script>

<style lang="less" scoped>
    .text {
        font-size: 14px;
    }

    .item {
        line-height:36px;
        .notice-date{
            float: right;
            color:#999;
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
    .card-box{
        background-color: #fff;
        box-shadow: 0 8px 20px 0 rgba(172,176,188,0.1);
        padding: 15px 10px;
        overflow: hidden;
    }

</style>

