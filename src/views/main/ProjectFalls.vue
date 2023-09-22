<template>
    <el-row v-for="(itemOuter, index) in  projectList " :key="index" class="row">
        <el-col v-for="(itemInner, index) in  itemOuter " :key="index" :span="itemInner.span">
            <el-card :class="'card' + cardAni + (itemInner.reversed ? ' side2' : ' side1')" @animationend="cardAniEnd()"
                @click="itemInner.reversed = !itemInner.reversed"
                :style="'position: absolute;width:' + itemInner.span / 0.24 + '%;'">
                <el-skeleton-item v-if="itemInner.imgPath == ''" variant="image" style="width: 100%; height:200px" />
                <img v-if="itemInner.imgPath != ''" :src="itemInner.imgPath"
                    style="height: 200px;width:100%;object-fit: cover;" />
                <div> {{ itemInner.content }}</div>
            </el-card>
            <el-card :class="'cardBack' + cardBackAni + (itemInner.reversed ? ' side1' : ' side2')"
                @click="itemInner.reversed = !itemInner.reversed">
                <el-scrollbar max-height="210px">
                    <ProjectInfo :index="itemInner.index" @openDrawer="openDrawer(index)"></ProjectInfo>
                </el-scrollbar></el-card>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios';
import ProjectInfo from './components/ProjectInfo.vue';

let projectList = [
    [{
        index: 0,
        span: 10,
        content: "实验室1-图书馆人数",
        imgPath: "",
        reversed: false
    },
    {
        index: 1,
        span: 13,
        content: "实验室2",
        imgPath: "",
        reversed: false
    }],
    [{
        index: 2,
        span: 7,
        content: "实验室3",
        imgPath: "",
        reversed: false
    },
    {
        index: 3,
        span: 9,
        content: "实验室4-从那天起",
        imgPath: "",
        reversed: false
    }, {
        index: 4,
        span: 6,
        content: "实验室5-Flag Submit",
        imgPath: "",
        reversed: false
    }],
    [{
        index: 5,
        span: 13,
        content: "实验室6",
        imgPath: "",
        reversed: false
    },
    {
        index: 6,
        span: 10,
        content: "实验室7",
        imgPath: "",
        reversed: false
    }]
]

function cardAniEnd() {
    this.cardAni = ''
    this.cardBackAni = ''
}

export default {
    name: "ProjectFalls",
    components: {
        ProjectInfo
    },
    data() {
        return {
            projectList,
            cardAni: ' cardAni',
            cardBackAni: ' cardBackAni'
        }
    },
    created() {
        const api = 'https://api.thecatapi.com/v1/images/search'
        this.projectList.forEach((itemOuter) => {
            itemOuter.forEach((itemInner) => {
                axios.get(api).then((result) => {
                    itemInner.imgPath = result.data[0].url
                    console.log(itemInner.imgPath)
                })
            })
        })
        //Synchronous implementation

        // for(let i=0;i<this.projectList.length;i++){
        //     for(let j=0;j<this.projectList[i].length;j++){
        //         axios.get(api).then((result) => {
        //             this.projectList[i][j].imgPath = result.data[0].url
        //         })
        //     }
        // }
    },
    mounted() {

    },
    methods: {
        cardAniEnd,
        openDrawer(index) {
            this.$emit('openDrawer', index)
        }
    }
}
</script>
<style scoped>
.row {
    display: flex;
    justify-content: space-between;
}

.card {
    height: 250px;
    background-color: #f8f5fe;
    margin-bottom: 20px;
    transition: transform 0.5s ease;
    backface-visibility: hidden;
}

.cardBack {
    height: 250px;
    background-color: #f8f5fe;
    margin-bottom: 20px;
    transition: transform 0.5s ease;
    transform: rotateY(180deg);
    backface-visibility: hidden;
}

.cardAni {
    animation: enter 0.8s ease forwards;
}

.cardBackAni {
    opacity: 0;
}

.side1 {
    transform: rotateY(0deg);
}

.side1:hover {
    transform: scale(1.1) rotateY(0deg);
}

.side2 {
    transform: rotateY(180deg);
}

.side2:hover {
    transform: scale(1.1) rotateY(180deg);
}

@keyframes enter {
    from {
        transform: scale(0.8);
    }

    to {
        transform: scale(1);
    }
}
</style>