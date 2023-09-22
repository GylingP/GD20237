<template>
    <MainMenu active="/gyling"></MainMenu>
    <div id="mainBack">
        <div id="mainTitle">
            <h1 class="title">Here is Gyling</h1>
            <h4>The World Is a Cat Playing With Australia </h4>
        </div>
    </div>
    <el-row class="mainBody">
        <el-col :span="2"></el-col>
        <el-col :span="4">
            <AvaCard></AvaCard>
            <SelfTags></SelfTags>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="15">
            <el-card style="background-color: #f8f5fe;">

                <div v-html="md" class="markdown-body">

                </div>
            </el-card>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
    <div style="height:20px"></div>
</template>
<script>
import MainMenu from '@/components/MainMenu.vue';
import AvaCard from '@/views/pagesG/components/AvaCard.vue'
import SelfTags from '@/views/pagesG/components/SelfTags.vue'
import md from '@/assets/mds/ABOUT ME.md'

const abstract=md.slice(0,280).replace(/<[^>]+>/g, "").replace("\n"," ").concat("...")
console.log(abstract)



export default {
    components: {
        MainMenu,
        AvaCard,
        SelfTags
    }
    ,
    data() {
        return {
            md,
            abstract
        }
    }
}
</script>
<style scoped>
#mainBack ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    background: transparent url("../../assets/gylingBack.jpg") center center no-repeat;
    filter: blur(2px);
    z-index: -2;
    background-size: cover;
}

#mainBack {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 80vh;
    background-size: cover;
    /* 按比例拉伸至横纵都铺满 */
    background-position: center;
    /* 横纵居中显示 */
    background-repeat: no-repeat;
    color: white;
}

#mainTitle {
    width: 100%;
    height: 100%;
    display: flex !important;
    ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.title {
    font-size: 30px;

}

.mainBody {
    margin-top: -15vh;
}



</style>