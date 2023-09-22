<template>
    <ProjectInfo1 v-if="index==0"></ProjectInfo1>
    <ProjectInfo2 v-if="index==1"></ProjectInfo2>
    <ProjectInfo3 v-if="index==2"></ProjectInfo3>
    <ProjectInfo4 v-if="index==3"></ProjectInfo4>
    <ProjectInfo5 v-if="index==4" @openDrawer="openDrawer(index)"></ProjectInfo5>
    <ProjectInfo6 v-if="index==5"></ProjectInfo6>
    <ProjectInfo7 v-if="index==6"></ProjectInfo7>
</template>
<script>
import ProjectInfo1 from '@/views/main/components/ProjectInfo/ProjectInfo1.vue'
import ProjectInfo2 from '@/views/main/components/ProjectInfo/ProjectInfo2.vue'
import ProjectInfo3 from '@/views/main/components/ProjectInfo/ProjectInfo3.vue'
import ProjectInfo4 from '@/views/main/components/ProjectInfo/ProjectInfo4.vue'
import ProjectInfo5 from '@/views/main/components/ProjectInfo/ProjectInfo5.vue'
import ProjectInfo6 from '@/views/main/components/ProjectInfo/ProjectInfo6.vue'
import ProjectInfo7 from '@/views/main/components/ProjectInfo/ProjectInfo7.vue'

export default{
    name:'ProjectInfo',
    components:{
        ProjectInfo1,ProjectInfo2,ProjectInfo3,ProjectInfo4,ProjectInfo5,ProjectInfo6,ProjectInfo7
    },
    props:['index'],
    methods:{
        openDrawer(index){
            this.$emit('openDrawer',index)
        }
    }
}
</script>