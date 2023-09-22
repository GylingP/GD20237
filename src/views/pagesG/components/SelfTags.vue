<template>
    <el-card style="margin-top:20px; background-color: #f8f5fe;">
        <el-button v-for="item in tagsList" :key="item.tag" :type="item.type" size="small" plain>{{
            item.tag }}</el-button>
    </el-card>
</template>
<script>
function shuffle(arr) {
    arr.sort(function () { return Math.random() > 0.5 ? -1 : 1; });
    return arr
}

var tagsList= [{
                tag: "精神软工人",
                type: "primary"
            }, {
                tag: "网络小白",
                type: "primary"
            }, {
                tag: "失误制造机",
                type: "primary"
            }, {
                tag: "猫土原住民",
                type: "primary"
            }, {
                tag: "福瑞爱好者",
                type: "primary"
            }, {
                tag: "猫猫神教徒",
                type: "primary"
            }, {
                tag: "random",
                type: "primary"
            }, {
                tag: "日语学习中",
                type: "primary"
            }, {
                tag: "Mathematics",
                type: "primary"
            },{
                tag: "INFJ",
                type: "primary"
            }]

tagsList=shuffle(tagsList)
export default {
    name: "SelfTags",
    data(){
        return{
            tagsList
        }
    }
}
</script>
<style scoped>

.el-button {
    margin-left: 0px;
    margin-right: 12px;
    margin-bottom: 12px
}
</style>