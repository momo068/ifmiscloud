<template>
        <div class="form_text_container">
                <el-form class="form"  :model="formTextData" :rules="formTextRules" label-width="100px">
                    <el-form-item :label="textdata.name" prop="textVal">
                        <el-input type="text"
                                  clearable
                                  v-model="formTextData.textVal"
                                  auto-complete="off"
                                  :maxlength="textdata.datalength"
                                  placeholder="请输入内容"
                                  :disabled="textdata.isedit==0?true:false"
                                  ref="elinput"
                                  @input="elinput(formTextData.textVal)"
                                  :title="formTextData.textVal"
                        ></el-input>
                    </el-form-item>
                </el-form>
        </div>
</template>

<script>
    import * as mutils from '@/utils/mUtils';
    export default {
        name:"formfieldText",
        data(){
            return {
                formTextData:{
                    textVal: this.textdata.defaultvalue ||'', //有 默认值 就取默认值
                },
                formTextRules: {
                    textVal: [
                        { required: this.textdata.requirement, message: '请输入..' },//加验证
                    ]
                }
            };


        },
        props:{
            textdata: {
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
