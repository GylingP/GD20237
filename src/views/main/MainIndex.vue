<template>
    <Transition name="el-zoom-in-top">
        <MainMenu v-show="show" v-if="show" active="/main"></MainMenu>
    </Transition>
    <div id="mainBack" :class="(show ? 'small' : ' large') + ' back' + timelineActiveIndex + sleepAni">
    </div>
    <div v-if="!show" :class="show ? undefined : 'timelineShow'">
        <div class="poemBack">
            <el-card v-if="!show && (timelineActiveIndex == 0)" class="card">
                <div class="poemBody">
                    <h1>"擦肩不相识"</h1>
                    <h3>第一次相遇 第一次在同一时间出现在同一地点</h3>
                    <h3>你是谁呢</h3>
                    <h3>前世五百次的回眸，才换来今生的擦肩而过</h3>
                </div>
            </el-card>
            <el-card v-if="!show && (timelineActiveIndex == 1)" class="card">
                <div class="poemBody">
                    <h1>"西安"</h1>
                    <h3>一座城 一生缘</h3>
                </div>
            </el-card>
            <el-card v-if="!show && (timelineActiveIndex == 2)" class="card">
                <div class="poemBody">
                    <h1>"命运线交织"</h1>
                </div>
            </el-card>
            <el-card v-if="!show && (timelineActiveIndex == 3)" class="card">
                <div class="poemBody">
                    <h1>"初见"</h1>
                </div>
            </el-card>
            <el-card v-if="!show && (timelineActiveIndex == 4)" class="card">
                <div class="poemBody">
                    <h1>"五一数模节"</h1>
                </div>
            </el-card>
            <el-card v-if="!show && (timelineActiveIndex == 5)" class="card">
                <div class="poemBody">
                    <h1>"奔赴"</h1>
                </div>
            </el-card>
            <el-card v-if="!show && (timelineActiveIndex == 6)" class="card">
                <div class="poemBody">
                    <h1>"雪顶映星辰"</h1>
                </div>
            </el-card>
            <el-card v-if="!show && (timelineActiveIndex == 7)" class="card">
                <div class="poemBody">
                    <h1>"诗与远方"</h1>
                </div>
            </el-card>
        </div>
        <el-steps :active="timelineActiveIndex" process-status="finish" style="width: 80vw;" align-center>
            <el-step v-for="(item, index) in timelineList" :key="item.title" :title="item.title"
                @click="switchActive(index);" class="step" />
        </el-steps>
        <el-button type="primary" @click="show = !show;" link>Exit Timeline</el-button>
    </div>
    <div v-if="show" style="position: relative;">
        <el-drawer v-model="drawer" title="Flag提交入口" :with-header="true">
            <el-scrollbar max-height="90vh"><FlagSumbit></FlagSumbit></el-scrollbar>
        </el-drawer>
        <div id="mainTitle">
            <h1 class="title"><span id="nameD" @click="goD()">Decsnow</span> & <span id="nameG">Gyling</span></h1>
            <h3>The World Is a Cat Playing With Australia </h3>
            <el-button type="primary" @click="show = !show;" round>Enter
                Timeline</el-button>
            <p hidden="true">flag1{The greatest truths are the simplest}</p>
        </div>
        <el-row class="mainBody">
            <el-col :span="3"></el-col>
            <el-col :span="18">
                <ProjectFalls @openDrawer="drawer=true"></ProjectFalls>
            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
        <RegisteredFooter></RegisteredFooter>
    </div>
</template>
<script>
import MainMenu from '@/components/MainMenu.vue';
import RegisteredFooter from '@/components/RegisteredFooter.vue';
import ProjectFalls from './ProjectFalls.vue';
import FlagSumbit from '@/views/main/components/FlagSubmit.vue'

function switchActive(index) {
    this.timelineActiveIndex = index
    this.sleepAni = (this.sleepAni == ' sleepAni' ? ' sleepAniAnother' : ' sleepAni')
}

export default {
    components: {
        MainMenu, RegisteredFooter, ProjectFalls,FlagSumbit
    }
    , methods: {
        goD() {
            this.$router.push('/decsnow')
        },
        switchActive,
    },
    data() {
        return {
            show: true,
            timelineList: [{
                title: '2021-8-1'
            }, {
                title: '2021-9-3'
            },
            {
                title: '2021-11-21'
            },
            {
                title: '2021-12-17'
            },
            {
                title: '2022-5-1'
            },
            {
                title: '2022-6-13'
            },
            {
                title: '2022-11-4'
            },
            {
                title: '2023-8-6'
            }],
            text: "Beautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nComplex is better than complicated.\nFlat is better than nested.\nSparse is better than dense.\nReadability counts.\nSpecial cases aren't special enough to break the rules.\nAlthough practicality beats purity.\nErrors should never pass silently.\nUnless explicitly silenced.\nIn the face of ambiguity, refuse the temptation to guess.\nThere should be one-- and preferably only one --obvious way to do it.\nAlthough that way may not be obvious at first unless you're Dutch.Now is better than never.\nAlthough never is often better than *right* now.\nIf the implementation is hard to explain, it's a bad idea.\nIf the implementation is easy to explain, it may be a good idea.\nNamespaces are one honking great idea.",
            timelineActiveIndex: 1,
            sleepAni: ' ',
            drawer:false

        }
    }
}
</script>
<style>
.el-pagination button {
    border-radius: 50%;
}

.el-pager li {
    border-radius: 50%;
    transition: 0.5s ease;
}
.el-drawer__header {
    margin-bottom: 0px;
}
</style>
<style scoped>
#mainBack {
    margin: 0;
    padding: 0;
    width: 100%;
    position: absolute;
    z-index: -1;
    background-size: cover;
    /* 按比例拉伸至横纵都铺满 */
    background-position: center;
    /* 横纵居中显示 */
    background-repeat: no-repeat;
}

#mainTitle {
    width: 100%;
    height: 80vh;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.title {
    font-size: 34px;

}

.mainBody {
    margin-top: -15vh;
}


.ava {
    height: 80px;
    width: 80px;
    border-radius: 50%;
}

#nameD:hover {
    animation: turnColorD 0.5s ease forwards;
    transition: linear;
    cursor: pointer;
}

@keyframes turnColorD {
    from {
        color: white;
    }

    to {
        color: #6CB1F2;
    }
}

#nameG:hover {
    animation: turnColorG 0.5s ease forwards;
    transition: linear;
    cursor: pointer;
}

@keyframes turnColorG {
    from {
        color: white;
    }

    to {
        color: #9ba6f8;
    }
}


@keyframes backGoLarge {
    from {
        height: 80vh;
    }

    to {
        height: 100vh;
    }
}

@keyframes timelineShow {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.small {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.large {
    height: 100vh;
    transition: 1s ease;
}

.backGoLarge {
    animation: backGoLarge 1s ease forwards;
}

.timelineShow {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    animation: timelineShow 0.8s ease backwards;
    animation-delay: 1s;
}

.poemBack {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.poemBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.step {
    cursor: pointer;
}

.back0 {
    background-image: url("../../assets/tl0.jpg");
}

.back1 {
    background-image: url("../../assets/back.png");
}

.back2 {
    background-image: url("../../assets/tl2.jpg");
}

.back3 {
    background-image: url("../../assets/tl3.jpg");
}

.back4 {
    background-image: url("../../assets/tl4.jpg");
}

.back5 {
    background-image: url("../../assets/tl5.jpg");
}

.back6 {
    background-image: url("../../assets/tl6.jpg");
}

.back7 {
    background-image: url("../../assets/tl7.jpg");
}

.sleepAni {
    animation: 1s ease 0.8s forwards getBlur;
}

.sleepAniAnother {
    animation: 1s ease 0.8s forwards getBlurAnother;
}

@keyframes getBlur {
    from {
        filter: blur(0px);
    }

    to {
        filter: blur(5px);
    }
}

@keyframes getBlurAnother {
    from {
        filter: blur(0px);
    }

    to {
        filter: blur(5px);
    }
}

.card {
    width: 80vh;
    color: rgb(36, 36, 36, 0.8);
    background-color: rgb(248, 245, 254, 0.5);
    animation: timelineShow 0.8s ease backwards;
    animation-delay: 1s;
}
</style>
