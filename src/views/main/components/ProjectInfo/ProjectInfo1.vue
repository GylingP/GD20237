<template>
    <h1>西电图书馆在馆人数API</h1>
    <p>源代码:<span>
            <el-link href='https://github.com/decsnow/Decsnow-API' target='_blank' type="primary" @click.stop>查看源码</el-link></span>
    </p>
    <p>URL:https://api.decsnow.net/getnumber</p>
    <p>在馆人数:{{ amount }}</p>
</template>
<script>
import axios from 'axios'

export default {
    name: 'ProjectInfo1',
    data(){
        return {
            amount:'计算中'
        }
    },
    mounted() {
        const api = "https://api.decsnow.net/getnumber"
        axios.get(api).then((result) => {
            this.amount=result.data
        })
    }
}
</script>
<style scoped>
p {
    word-wrap: break-word;
    word-break: break-all;
}
</style>