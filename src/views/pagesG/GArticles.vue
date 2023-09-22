<template>
    <MainMenu active="/gyling/articles"></MainMenu>
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
        <el-col :span="7">
            <AbstractCard v-for="item in fileListLeft" :key="item.path" :title="item.title" :abstract="item.abstract"
                :path="item.path" style="background-color: #f8f5fe;margin-bottom: 20px;">
            </AbstractCard>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="7">
            <AbstractCard v-for="item in fileListRight" :key="item.path" :title="item.title" :abstract="item.abstract"
                :path="item.path" style="background-color: #f8f5fe;margin-bottom: 20px;">
            </AbstractCard>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
    <div style="height:20px"></div>
</template>
<script>
import MainMenu from '@/components/MainMenu.vue';
import AvaCard from '@/views/pagesG/components/AvaCard.vue'
import SelfTags from '@/views/pagesG/components/SelfTags.vue'
import AbstractCard from '@/views/pagesG/components/AbstractCard.vue'

const files = require.context('@/assets/mds/G/', false, /.md$/)
let fileListLeft = []
let fileListRight = []
files.keys().forEach((path, index) => {
    var content = files(path).default
    var title = content.match(/<h\d[^>]*>(.*?)<\/h\d>/)[1];
    var abstract = ""
    if (content.length <= 280) {
        abstract = content.slice(0, 280).replace(/<[^>]+>/g, "").replace("\n", " ")
    }
    else {
        abstract = content.slice(0, 280).replace(/<[^>]+>/g, "").replace("\n", " ").concat("...")
    }
    if (title == "READ ME") {
        fileListLeft.unshift({
            path,
            title,
            abstract
        })
        return
    }
    if (index % 2 == 1) {
        fileListLeft.push({
            path,
            title,
            abstract
        })
    }
    else {
        fileListRight.push({
            path,
            title,
            abstract
        })
    }
})


export default {
    components: {
        MainMenu,
        AvaCard,
        SelfTags,
        AbstractCard
    }
    ,
    data() {
        return {
            fileListLeft,
            fileListRight
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