<template>
    <h1>Flag提交入口</h1>
    <el-button type="primary"  @click.stop="openDrawer()">
        打开入口
    </el-button>
    <p>ps:只是想玩一下drawer</p>
</template>
<script>

export default {
    name: 'ProjectInfo5',
    data(){
        return{
            drawer:false
        }
    },
    methods:{
        openDrawer(){
            this.$emit('openDrawer')
        }
    }
}
</script>