<template>
    <div id="app">
		   <router-view></router-view>
    </div>
</template>

<script>
    export default {
    	name:'App'
    }
</script>

<style lang="less">
    @import './style/variables';
	@import './style/element-ui';
	@import './style/common';
	@import './style/scrollBar';

    @font-face {
        font-family: 'iconfont';
        src: url('assets/font/iconfont.eot');
        src: url('assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('assets/font/iconfont.woff2') format('woff2'),
        url('assets/font/iconfont.woff') format('woff'),
        url('assets/font/iconfont.ttf') format('truetype'),
        url('assets/font/iconfont.svg#iconfont') format('svg');
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:30px;
        font-style:normal;
    }
</style>
