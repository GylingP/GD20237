<template>
    <el-menu :default-active="active" class="el-menu-demo customizedMenu" mode="horizontal" background-color="#8087DF"
        text-color="#fff" active-text-color="#f5e4b8" :ellipsis="screenWidth<600" router>
        <el-menu-item index="/main">首页</el-menu-item>
        <el-menu-item v-if="active.includes('gyling')" index="/gyling/articles">思潮星爆</el-menu-item>
        <el-menu-item v-if="active.includes('gyling')" index="/gyling/projects">梦想花园</el-menu-item>
        <el-sub-menu index="switch">
            <template #title>切换</template>
            <el-menu-item index="/gyling">极皊</el-menu-item>
            <el-menu-item index="/decsnow">缀雪</el-menu-item>
        </el-sub-menu>
        <el-menu-item
            onclick=" javascript:var KICKASSVERSION='2.0';var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='//hi.kickassapp.com/kickass.js';void(0);">炸弹</el-menu-item>
        <el-menu-item v-if="active == '/main'" index="/flg" router disabled>QAQ</el-menu-item>
        <div style="flex-grow: 1;"></div>
        <img class="line6" src="@/assets/line6.png" /> 
    </el-menu>
</template>
<script>
export default {
    name: "MainMenu",
    props: ['active'],
    data(){
        return{
            screenWidth: document.body.clientWidth
        }
    }

}

</script>
<style scoped>
.customizedMenu {
    opacity: 0.9;
}

.line6 {
    height: 45px;
    align-self: center;
    margin-right: 30px;
}

.el-menu-demo {
    position: fixed !important;
    z-index: 5;
    width: 100vw;
    --el-menu-border-color: #8087DF;
}
</style>