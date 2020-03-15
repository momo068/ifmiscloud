<template>
  <div class="editButtons">
      <el-button type="primary" plain @click="changePattern">切换模式</el-button>
      <el-button type="primary" plain>新增</el-button>
      <el-button type="primary" plain>修改</el-button>
      <el-button type="primary" plain>保存</el-button>

  </div>
</template>

<script>
    import { eventBus } from './index.js'
    export default {
        name: "editButtons",
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{
            changePattern (e){
                eventBus.$emit('handleClickPattern');
                e.currentTarget.plain=!e.currentTarget.plain
            }
        }

    }
</script>

<style scoped>
.editButtons{
    padding: 10px;
    background-color:#fff;
}

</style>