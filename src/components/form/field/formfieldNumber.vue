<template>
    <div class="form_number_container">
        <el-form class="form"  :model="formNumberData" :rules="formselectRules" label-width="100px">
            <el-form-item :label="numberdata.name" prop="numberVal">
                <el-input type="number"
                          clearable
                          v-model="formNumberData.numberVal"
                          auto-complete="on"
                          placeholder="请输入内容"
                          :disabled="numberdata.isedit==0?true:false"
                          @input="elinput(formNumberData.numberVal)"
                          :title="formNumberData.numberVal"
                ></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import * as mutils from '@/utils/mUtils';
    export default {
        name:"formfieldNumber",
        data(){
            return {
                formNumberData:{
                    numberVal: this.numberdata.defaultvalue ||'', //有 默认值 就取默认值
                },
                formselectRules: {
                    numberVal: [
                        { required: this.numberdata.requirement, message: '请输入。..' },//加验证
                    ]
                }
            };


        },
        props:{
            numberdata: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        created(){

        },
        mounted() {
            //console.log(this.numberdata.datalength)
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


