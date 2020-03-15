
<template>
    <div>
        <div slot="header" class="title">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </div>
        <div class="card-box">
            <el-col :span="12">
                <!--<el-col :span="5">
                    <div class="todo-left">
                        <span>待记账</span>
                        <span class="num">100</span>
                    </div>
                </el-col>-->

                    <div v-for="item in todolist" class="text item">
                        <span> {{item.tag}} </span>
                        {{item.text}}
                    </div>

            </el-col>
            <el-col :span="12">
                <todo-pie></todo-pie>
            </el-col>

        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import todoPie from 'cps/echarts/todoPie'   // 待办事项 饼状图


    export default {
        name:'todoList',
        data() {
            return {
                todolist:[{
                    tag:"[待审核]",
                    text:'环境保护局某分局：超过两个月未记账，共计200条',
                },{
                    tag:"[待审核]",
                    text:'环境保护局某分局：超过两个月未记账，共计200条',
                },{
                    tag:"[待审核]",
                    text:'某财政局：超过两个月未记账，共计100条',
                },{
                    tag:"[待审核]",
                    text:'某财政局：超过两个月未记账，共计100条',
                }]
            };
        },
        components: {
            todoPie,
        },
    }
</script>

<style lang="less" scoped>
    .order_list{
        .orderArea{
            width: 100%;
            height: 300px;
            background: #fff !important;
            border-radius: 6px;
            box-sizing: border-box;
            padding: 10px;
            padding-top: 20px;
            overflow: hidden;
        }
        .orderbarArea{
            height: 330px;
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
    .todo-left{
        width: 80px;
        height:60px;
        border-radius: 2px;
        background-color: #408bf2;
        text-align: center;
        span{
            font-size: 16px;
            color: #fff;
            display: block;
            line-height:1.8;
        }
        .num{
            font-size: 18px;
            font-weight:600;
        }
    }
    .card-box{
        background-color: #fff;
        box-shadow: 0 8px 20px 0 rgba(172,176,188,0.1);
        padding: 15px 10px;
        overflow: hidden;
    }
    .text {
        font-size: 14px;
        margin-left: 30px;
    }

    .item {
        line-height:36px;
    }


</style>

