<template>
    <el-card style="background-color: #f8f5fe;">
        <div class="sideCard">
            <div class="avaContainer"><img class="ava" src="@/assets/ava1.jpg" /></div>
            <h3 style="margin-bottom:0px">极皊</h3>
            <p style="color:rgb(165, 165, 165);font-size:10px">Gyling / <span> <el-tooltip class="box-item" effect="dark"
                        content="きょくりん" placement="bottom">
                        極リン
                    </el-tooltip></span></p>
        </div>
    </el-card>
</template>
<script>
export default {
    name:"AvaCard"
}
</script>
<style scoped>
.sideCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.avaContainer {
    display: flex;
    justify-content: center;
}

.ava {
    height: 70%;
    width: 70%;
    border-radius: 50%;
}
</style>