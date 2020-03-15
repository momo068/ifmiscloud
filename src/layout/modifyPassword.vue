<template>
    <div>
        <el-dialog
                   :visible.sync="isVisible"
                   :center="true"
                   width="30%"
                   @close="closeDialog"
                   title="修改密码"

        >
            <el-row class="info_row row">
                <el-col :span="24">
                            <el-form class="form" :model="pwdForm"  label-width="100px" >
                                <el-form-item label="原密码">
                                    <el-input type="password" v-model="pwdForm.password"  placeholder="请输入原密码"></el-input>
                                </el-form-item>
                                <el-form-item label="新密码">
                                    <el-input type="password" v-model="pwdForm.newpassword"   placeholder="请输入新密码"></el-input>
                                </el-form-item>
                                <el-form-item label="确认新密码">
                                    <el-input type="password"  v-model="pwdForm.surepassword" placeholder="请输入确认新密码"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary">提交</el-button>
                                    <el-button>重置</el-button>
                                </el-form-item>
                            </el-form>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isVisible: this.isShow,
                pwdForm:{
                    password:'',
                    newpassword:'',
                    surepassword:''
                },
            };
        },
        props:{
            isShow:Boolean,
        },
        methods:{
            closeDialog(){
                this.$emit('hideSettingDialog');
            }
        }
    };
</script>
<style scoped lang='less'>
    .title{
        text-align:center;
        width:100%;
        height:30px;
        line-height:30px;
        cursor: pointer;
        background-color: #3bc5ff;
        border:1px solid #3bc5ff;
        color: white;
        display: block;
    }
    .info_row .form{
        width: 90%;
    }


</style>
