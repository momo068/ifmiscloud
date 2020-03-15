<template>
    <div class="auxAccount">
       <h4>辅助核算</h4>
        <span>科目</span><span>金额</span>
        <div class="select-box">

        </div>
    </div>
</template>

<script>
    export default {
        name: "auxAccount"
    }
</script>

<style  lang="less" scoped>
    .auxAccount{
        background-color: #fff;
        padding: 20px 15px;
        margin-top: 10px;
        h4{
          font-size: 15px;
          color: #333;
          display: inline-block;
          margin-right: 10px;
        }
        span{
            font-size: 15px;
            color:#317fea;
        }
    }
</style>