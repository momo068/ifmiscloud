<template>
    <div class="toolbar_container">
        <el-row>
            <el-button
                    v-for="(item,index) of buttonDataList"
                    v-if="item.isvisiable"
                    :index="index"
                    :type="item.type"
                    @click="oriaction(item)"
                    :disabled="item.disabled"
                    size="small"
            >
             {{item.name}}
            </el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:'toolbar',
        data(){
            return {
            }
        },
        props:{
            buttonDataList: {
                type: Array,
                default(){
                    return []
                }
            }
        },
    created(){
    },
    methods:{
        oriaction(action){
            debugger;
            let abc=action.name;
            //回调
            if(action){
                this.$alert('处理点击回调:'+abc, '提示',{confirmButtonText: '确定'});
                this.$emit("clickCallback",action)
            }
        }
    }
    }
</script>

<style lang="less" scoped>
    .toolbar_container{
        margin-bottom: 20px;
    }
</style>
