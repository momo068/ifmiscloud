<template>
    <div class="form_intervaldate_container">
        <el-col :span="12">
            <el-form class="form" label-width="200px">
                <el-form-item :label="intervaldatedata.name">
                    <el-date-picker
                            v-model="intervaldateValue"
                            type="daterange"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    import * as mutils from '@/utils/mUtils';
    export default {
        name:"formfieldIntervalDate",
        data(){
            let datas=[ "2019-12-06", "2019-12-14" ];//默认后台传入的区间值
            return {
                intervaldateValue: datas
            }
        },
        props:{
            intervaldatedata: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        created(){

        },
        mounted() {
            //console.log(this.textdata.datalength)
            // mutils.setContentHeight(this,this.$refs.fillcontain,170);
        },
        methods: {
            elinput(val){
//                this.$refs.elinput.$refs['input'].title=val;
            }
        }
    }
</script>

<style lang="less" scoped>
    .form_intervaltext_container{
        background: #fff;
        box-sizing: border-box;
        overflow: auto;
    }

    .info_row  .form{
        width:90%;
        margin-top:20px;
    }

</style>


