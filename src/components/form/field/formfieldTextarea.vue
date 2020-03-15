<template>
    <div class="form_textarea_container">
            <el-form class="form"  :model="formTextareVal" :rules="formTextareaRules" label-width="100px">
                <el-form-item :label="textareadata.name" prop="textareaVal">
                    <el-input type="textarea"
                              v-model="formTextareVal.textareaVal"
                              :maxlength="textareadata.datalength"
                               placeholder="请输入大文本内容"
                              :disabled="textareadata.isedit==0?true:false"
                              :title="formTextareVal.textareaVal"
                              :rows="textareadata.textarearows"
                    ></el-input>
                </el-form-item>
            </el-form>
    </div>
</template>
<!---->
<script>
    import * as mutils from '@/utils/mUtils';
    export default {
        name:"formfieldTextarea",
        data(){
            return {
                formTextareVal:{
                    textareaVal: this.textareadata.defaultvalue ||'', //有 默认值 就取默认值
                },
                formTextareaRules: {
                    textareaVal: [
                        { required: this.textareadata.requirement, message: '请输入'+this.textareadata.name+"内容" },//加验证
                    ]
                }
            };


        },
        props:{
            textareadata: {
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
    .form_textarea_container{
        background: #fff;
        box-sizing: border-box;
        overflow: auto;
    }


</style>
