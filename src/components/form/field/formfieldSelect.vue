<template>
        <div class="form_select_container">
            <el-col :span="12">
                <el-form class="form" label-width="100px">
                    <el-form-item :label="selectdata.name">
                        <el-select
                                   v-model="selectValue"
                                   clearable
                                   filterable
                                   :disabled="selectdata.isedit==0?true:false"
                                   placeholder="请选择"
                        >
                            <!--:label="item.label"-->
                            <el-option
                                    v-for="item in options"
                                    :disabled="item.disabled"
                                    :label="item.label"
                                    :value="item.value"
                                    :key="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
        </div>
</template>

<script>
    import * as mutils from '@/utils/mUtils';
    export default {
        name:"formfieldSelect",
        data(){
            var optiondata=[{
                value: '1',
                label: 'DWHS-CARD-固定资产功能模块-CARD',
                disabled:true,
            }, {
                value: '2',
                label: 'DWHS_GDZCLIANTIAO-折旧同步接口联调模板'
            }, {
                value: '3',
                label: 'GD0001-固定资产管新增'
            }, {
                value: '4',
                label: 'GDZCALTER-固定资产变动ALTER'
            }, {
                value: '5',
                label: 'GDZCZJ-固定资产折旧'
            }]
            return {
                    options: optiondata,
                    selectValue: ''
                }
        },
        props:{
            selectdata: {
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
