<template>
    <div class="form_date_container">
        <el-col :span="12">
            <el-form class="form" label-width="100px">
                <el-form-item :label="datedata.name">
                    <el-date-picker
                            :disabled="datedata.isedit==0?true:false"
                            v-model="dateValue"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    import * as mutils from '@/utils/mUtils';
    export default {
        name:"formfieldDate",
        data(){
            return {
                dateValue: ''
            }
        },
        props:{
            datedata: {
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
    .form_text_container{
        background: #fff;
        box-sizing: border-box;
        overflow: auto;
    }

    .info_row  .form{
        width:90%;
        margin-top:20px;
    }

</style>


