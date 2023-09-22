<template>
    <el-card @click="goDetail()" class="card">
        <template #header>
            <div class="cardHeader"> <el-tag v-if="title == 'READ ME'" class="ml-2" type="danger">置顶</el-tag>
                <div style="margin-left: 5px;font-weight: bold;">{{ title }}</div>
            </div>
        </template>
        <div>{{ abstract }}</div>
    </el-card>
</template>
<script>
function goDetail() {
    this.$router.push({
        name:'detail',
        params:{
            path:this.path.slice(2)
        }
    })
}
export default {
    name: "AbstractCard",
    props: ['title', 'abstract','path'],
    methods: {
        goDetail
    }
}
</script>
<style scoped>
.cardHeader {
    display: flex;
    align-items: center;
}

.card:hover {
    transform: scale(1.1);
    cursor: pointer;
}
</style>