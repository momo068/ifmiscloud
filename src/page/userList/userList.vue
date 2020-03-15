<template>
    <div class="fillcontain">
        <div class="contain">
            <ToolbarButton :buttonDataList="buttonDataList" @clickCallback="clickCallback"></ToolbarButton>
            <Form :formDataList="formDataList"></Form>
            <div class="table_container">
                <el-table
                        v-loading="loading"
                        :data="tableData"
                        border
                        stripe
                        highlight-current-row
                        header-cell-class-name="table-header-class"
                        style="width:100%">
                    <el-table-column
                            label="序号"
                            width="60"
                            align='center'>
                        <template slot-scope="scope">
                            <span>{{scope.$index+(paginations.pageIndex - 1) * paginations.pageSize + 1}} </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            property="username"
                            label="用户姓名"
                            width="80"
                            align='center'>
                    </el-table-column>
                    <el-table-column
                            property="email"
                            label="邮箱地址"
                            width="180"
                            align='center'>
                    </el-table-column>
                    <el-table-column
                            property="address"
                            label="注册地址"
                            align='center'>
                    </el-table-column>
                    <el-table-column
                            property="region"
                            label="地区"
                            width="80"
                            align='center'>
                    </el-table-column>
                    <el-table-column
                            property="isp"
                            label="网络"
                            width="80"
                            align='center'>
                    </el-table-column>
                    <el-table-column
                            property="ip"
                            label="IP地址"
                            width="180"
                            align='center'>
                    </el-table-column>
                    <el-table-column
                            property="createTime"
                            label="注册时间"
                            width="180"
                            align='center'>
                    </el-table-column>
                    <el-table-column
                            property="updateTime"
                            label="登录时间"
                            width="180"
                            align='center'>
                    </el-table-column>
                </el-table>
                <el-row>
                    <el-col :span="24">
                        <div class="pagination">
                            <el-pagination
                                    v-if='paginations.total > 0'
                                    :page-sizes="paginations.pageSizes"
                                    :page-size="paginations.pageSize"
                                    :layout="paginations.layout"
                                    :total="paginations.total"
                                    :current-page='paginations.pageIndex'
                                    @current-change='handleCurrentChange'
                                    @size-change='handleSizeChange'>
                            </el-pagination>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import { getUserList,getButtonsData } from "@/api/user";
    import ToolbarButton from "@/components/toolBar";
    import Form from "@/components/form/index.vue";
    import axios from 'axios';

    export default {
        data(){
            return {
                tableData: [],
                loading:true,
                //需要给分页组件传的信息
                paginations: {
                    total: 0,        // 总数
                    pageIndex: 1,  // 当前位于哪页
                    pageSize: 20,   // 1页显示多少条
                    pageSizes: [5, 10, 15, 20],  //每页显示多少条
                    layout: "total, sizes, prev, pager, next, jumper"   // 翻页属性
                },
                buttonDataList:[],
                formDataList:[],

            }
        },
        components:{
            ToolbarButton,
            Form
        },
        created(){

        },
        mounted(){
            this.getFormsData();//获取form数据
            this.getUserList();//获取表格数据
            this.getButtonsData();//获取按钮数据

        },
        methods: {
            getUserList(){
                let para = {
                    limit:this.paginations.pageSize,
                    page:this.paginations.pageIndex
                }
                getUserList(para).then(res => {
                    this.loading = false;
                    this.paginations.total = res.data.total;
                    this.tableData = res.data.userList;
                })
            },
            getFormsData(){
                axios.get('http://localhost:8808/formdata.json').then(res=>{
                    console.log(res.data)
                     this.formDataList=res.data;
                })
            },
            // 每页多少条切换
            handleSizeChange(pageSize) {
                this.paginations.pageSize = pageSize;
                this.getUserList();
            },
            // 上下分页
            handleCurrentChange(page) {
                this.paginations.pageIndex = page;
                this.getUserList();
            },
            getButtonsData(){
                //http://localhost:8808/src/mock/buttonData.json
                let para = {}
                getButtonsData(para).then(res => {
                    if(res){
                        let datas=res.data.buttonData.buttons;
                        if(datas.length >0){
                            this.buttonDataList = datas;//给数据赋值
                        }
                    }

                })
            },
            clickCallback(prop){
                console.log(prop);
            }
        },
    }
</script>

<style lang="less" scoped>
    .fillcontain{
        padding-bottom: 0;
    }
    .contain{
        background: #fff;
        padding: 10px;
        margin-bottom: 20px;
    }
    .pagination{
        padding: 10px 20px;
        text-align: right;
    }
</style>