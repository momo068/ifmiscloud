<template>
    <div class="accVoucher-box">
        <h4>记账凭证</h4>
        <div class="acc-text">
            <el-row :gutter="10">
                <el-col :span="6"><span>凭证号：<i></i></span></el-col>
                <el-col :span="4"><span>凭证属性：<i></i></span></el-col>
                <el-col :span="4"><span>2019年12月09日</span></el-col>
                <el-col :span="4"><el-checkbox label="结转凭证" name="type"></el-checkbox></el-col>
                <el-col :span="6">
                    <el-form >
                        <el-form-item label="附单据：" prop="name">
                            <el-col :span="6">
                            <el-input></el-input>
                            </el-col>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

        </div>

        <el-row :gutter="10"  v-if="pattern==='two'">
        <el-col :span="12">
            <el-table
                    :data="tableData1"
                    border
                    show-summary
                    highlight-current-row
                    style="width:100%"
                    height="300"
                    size="small"
                    class="acc-table1" :cell-style="cellStyle" :header-cell-style="headerCellStyle">
                <el-table-column
                        prop="num"
                        label="序号"
                        align="center" width="30px" ref="num">
                </el-table-column>
                <el-table-column
                        prop="remark"
                        label="摘要"
                        align="center"  :show-overflow-tooltip="true" min-width="120%">
                    <template slot-scope="scope">
                            <el-input v-model="scope.row.tips" v-show="!scope.row.isEdit" ></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="subject"
                        label="财务会计科目"
                        align="center"  :show-overflow-tooltip="true" min-width="120%">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.subject" placeholder="请选择" >
                            <el-option
                                    v-for="item in subjectOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="debit"
                        align="center"
                        label="借方金额">
                        <sum-money></sum-money>
                </el-table-column>
                <el-table-column
                        prop=" credit"
                        label="贷方金额"
                        align="center">
                    <sum-money></sum-money>
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="12" >
            <el-table
                    :data="tableData2"
                    border
                    show-summary
                    highlight-current-row
                    style="width: 100%"
                    height="300"
                    size="small"
                    class="acc-table2" :cell-style="cellStyle" :header-cell-style="headerCellStyle" >
                <el-table-column
                        prop="num"
                        type="index"
                        label="序号"
                        align="center"
                        width="30px">
                </el-table-column>
                <el-table-column
                        prop="remark"
                        label="摘要"
                        align="center"
                        min-width="120%" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.remark"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="subject"
                        label="财务会计科目"
                        align="center"
                        min-width="120%" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.subject" placeholder="请选择">
                            <el-option
                                    v-for="item in subjectOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="debit"
                        label="借方金额"
                        align="center" @click="sumCellClick">
                    <sum-money></sum-money>
                </el-table-column>
                <el-table-column
                        prop=" credit"
                        label="贷方金额"
                        align="center">
                    <sum-money></sum-money>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
     <el-row :gutter="10" v-if="pattern==='one'">
            <el-col :span="24">
                <div class="acc-table3">
                <el-table
                        :data="tableData3"
                        border
                        show-summary
                        highlight-current-row
                        style="width: 100%"
                        height="300"
                        size="small"
                        :cell-style="cellStyle" :header-cell-style="headerCellStyle">
                    <el-table-column
                            prop="num"
                            label="序号"
                            align="center"
                            width="30px">
                    </el-table-column>
                    <el-table-column
                            prop="remark"
                            label="摘要"
                            align="center"
                            :show-overflow-tooltip="true" min-width="120%">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.tips"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="subject"
                            label="财务会计科目"
                            align="center"
                            width="300" :show-overflow-tooltip="true" min-width="120%">
                        <template slot-scope="scope">
                            <el-select v-model="scope.row.subject" placeholder="请选择">
                                <el-option
                                        v-for="item in subjectOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column  width="180" v-if="show" >
                        <!--自定义插槽表头-->
                        <template slot="header" slot-scope="scope">
                             <table class="zdy-header">
                                 <tr>
                                     <td width="50%">币别</td>
                                     <td width="50%">汇率</td>
                                 </tr>
                                 <tr>
                                     <td colspan="2">原币金额</td>
                                 </tr>
                             </table>
                        </template>
                        <template slot-scope="scope">
                            <table class="zdy-table" width="180">
                                <tr>
                                    <td width="50%"></td>
                                    <td width="50%"></td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <table class="sum-cell">
                                            <tr>
                                                <td>亿</td>
                                                <td>千</td>
                                                <td style="border-right-color:#80c0f7 !important;">百</td>
                                                <td>十</td>
                                                <td>万</td>
                                                <td style="border-right-color:#80c0f7!important;">千</td>
                                                <td>百</td>
                                                <td>十</td>
                                                <td style="border-right-color:#fa8a90 !important;">元</td>
                                                <td>角</td>
                                                <td style="border-right:none !important;">分</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </template>
                    </el-table-column>


                    <el-table-column
                            prop="debit"
                            align="center"
                            label="借方金额" >
                        <sum-money></sum-money>
                    </el-table-column>
                    <el-table-column
                            prop="credit"
                            label="贷方金额"
                            align="center">
                        <sum-money></sum-money>
                    </el-table-column>
                </el-table>
                </div>
            </el-col>
        </el-row>

        <div class="check-box">
           <el-row :gutter="20" >
               <el-col :span="6"><span>会计主管：</span></el-col>
               <el-col :span="6"><span>记账：</span></el-col>
               <el-col :span="6"><span>审核：</span></el-col>
               <el-col :span="6"><span>制单：</span></el-col>
           </el-row>
        </div>
    </div>
</template>

<script>
    import { eventBus } from './index.js'
    import SumMoney from "./sumMoney";

    export default {
        name: "accVoucher",
        data() {
             return {
                 subjectOptions: [{
                     value: '选项1',
                     label: ' 100203-银行存款/11'
                 }, {
                     value: '选项2',
                     label: ' 100203-银行存款/11'
                 }, {
                     value: '选项3',
                     label: ' 100203-银行存款/11'
                 }, {
                     value: '选项4',
                     label: ' 100103-库存现金/测试'
                 }, {
                     value: '选项5',
                     label: ' 1100103-库存现金/测试'
                 }],
                    tableData1:[{
                        num:'1',
                        remark:'摘摘',
                        subject:'100103-库存现金/测试',
                        debit:'',
                        credit:''
                    },{
                        num:'2',
                        remark:'',
                        subject:'',
                        debit:'',
                        credit:''
                    },{
                        num:'3',
                        remark:'',
                        subject:'',
                        debit:'',
                        credit:''
                    }],
                    tableData2:[{
                        num:'1',
                        remark:'',
                        subject:'',
                        debit:'',
                        credit:''
                    },{
                        num:'2',
                        remark:'',
                        subject:'',
                        debit:'',
                        credit:''
                    },{
                        num:'3',
                        remark:'',
                        subject:'',
                        debit:'',
                        credit:''
                    }],
                 tableData3:[{
                     num:'1',
                     remark:'',
                     subject:'',
                     debit:'',
                     credit:''
                 },{
                     num:'2',
                     remark:'',
                     subject:'',
                     debit:'',
                     credit:''
                 },{
                     num:'3',
                     remark:'',
                     subject:'学科',
                     debit:'',
                     credit:''
                 }],

                    pattern:'two',
                    show:true,
                }
            },
        components:{
            SumMoney,
        },

        created() {
            eventBus.$on('handleClickPattern', () => {
                if (this.pattern==='two'){
                    this.pattern='one'
                }else{
                    this.pattern='two'
                }
            })
        },
        methods: {
            headerCellStyle({row, column, rowIndex, columnIndex}){
                if (column.property==="yuan"){
                    return  { "border-right-color": "#fa8a90" }
                }else if(column.property==="qian" || column.property==="bai"){
                    return  { "border-right-color": "#80c0f7" }
                }
            },

            cellStyle({row, column, rowIndex, columnIndex}) {
                if (column.property==="yuan"){
                    return  { "border-right-color": "#fa8a90" }
                }else if(column.property==="qian" || column.property==="bai"){
                    return  { "border-right-color": "#80c0f7" }
                }
//                console.log(column);
            },
            sumCellClick(){
                console.log(111);
            }
        }
    }
</script>

<style lang="less" scoped>
    .accVoucher-box{
        background-color: #fff;
        padding: 20px 15px;
        margin-top: 10px;
        h4{
            text-align: center;
            color: #333;
        }
        .acc-text{
            font-size: 12px;
            color: #888;
            margin-top: 10px;

        }
    }
   .acc-table2 /deep/ .el-table__header-wrapper th{
        background-color: #fdfadb !important;
    }
     .check-box{
         margin-top: 10px;
         font-size: 14px;
         color: #666;
     }
    .accVoucher-box /deep/ .el-table__header .cell{
        padding:0 1px !important;
        text-align: center;
    }
    .accVoucher-box /deep/ .el-table__header  th{
         border-color: #ddd;
         padding:0 !important;
         height:30px;
    }
    .accVoucher-box /deep/ .el-table__body td{
         border-color: #ddd;
         padding:0 !important;
         height:50px;
        .cell{
            padding:0 !important;
        }
    }
    .accVoucher-box.el-table--group{
         border:1px solid #ddd;
    }
    .accVoucher-box /deep/ .lineStyle{
        border-right-color:#9bd5c5 !important;
    }
    .acc-table2 /deep/ input {
        outline: none;
        border: none;
        padding: 3px;
    }
    .acc-table2 /deep/ input:focus {
        border: 1px solid #999;
    }
    .zdy-header {
        width: 100%;
        border: 0;
        border-collapse: collapse;
        tr:first-child {
            td:first-child {
                border-right: 1px solid #ddd;
            }
            td {
                border-bottom: 1px solid #ddd;
            }
        }
        tr {
            background-color: #eef2ff;
            td {
                text-align: center;
            }
        }
    }
     .zdy-table {
            border: 0;
            border-collapse: collapse;
            tr:first-child {
                td:first-child {
                    border-right: 1px solid #ddd;
                }
            }
            tr:nth-of-type(2){
                td{
                    border:0 !important;
                }
            }
            tr {
                td {
                    text-align: center;
                    height:25px!important;
                    .sum-cell {
                        width: 100%;
                        border-collapse: collapse;
                        tr{
                            td{
                                width:9.09%;
                                border-right: 1px solid #ddd !important;
                            }
                        }

                    }
                }
            }
        }


</style>