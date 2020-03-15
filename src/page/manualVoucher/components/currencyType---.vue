<template>
    <el-table
            :data="tableData4"
            height="62"
            border
            :show-header="false"
            style="width:300px " :span-method="SpanMethod" :cell-style="amountCellStyle" class="amount-tab">
        <el-table-column
                prop="currencyType"
                label="币别">
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
        </el-table-column>
        <el-table-column
                prop="rate"
                label="汇率">
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
            <el-table-column></el-table-column>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "currencyType",
        data(){
            return{
                tableData4:[{
                    currencyType:'',
                    rate:'',
                },{
                    currencyType:'',
                    rate:'',
                }],
            }
        },
        methods:{
            SpanMethod({row, column, rowIndex, columnIndex}){
                if (columnIndex === 0 && rowIndex ===0 || columnIndex === 1 && rowIndex ===0 ) {
                    return [1, 7];
                }else if (columnIndex > 1 && rowIndex ===0){
                    return [0, 0];
                }
            },
            amountCellStyle({row, column, rowIndex, columnIndex}){
                if (rowIndex === 1 && columnIndex === 1 || columnIndex === 3 ||  columnIndex === 4 || columnIndex === 6 || columnIndex === 7 || columnIndex === 9 || columnIndex === 10 || columnIndex === 12
                ) {
                    return ' border-right-color:#9bd5c5;'
                } else if (columnIndex === 11) {
                    return 'border-right-color:#ec4040;'
                }
            }

        }
    }
</script>

<style lang="less" scoped>
 .amount-tab  /deep/ .el-table__body{
     width: auto !important;
     .cell{
         padding: 0 !important;
     }
     td{
         height: 30px;
     }
 }
</style>