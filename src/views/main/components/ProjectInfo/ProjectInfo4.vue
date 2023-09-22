<template>
    <h1>SINCE 2022</h1>
    <h3>{{ cptime }}</h3>
    <div style="display: flex;justify-content: center;">
    <img style="width: 20%;" src="@/assets/heart.gif" /><p>
        &lt;-雪雪说这个很土 但是我就是要加（哼.jpg</p></div>
</template>
<script>
function calc_cptime() {

    //以下代码是雪雪用gpt跑出来的（偷笑
    let cpDay = new Date("6/14/2022 08:00:00");
    //获取当前时间
    let today = new Date();
    let timeold = (today.getTime() - cpDay.getTime()); //总豪秒数
    let e_daysold = timeold / (24 * 60 * 60 * 1000);
    let daysold = Math.floor(e_daysold);                 //相差天数
    let e_hrsold = (e_daysold - daysold) * 24;
    let hrsold = Math.floor(e_hrsold);                   //相差小时数
    let e_minsold = (e_hrsold - hrsold) * 60;
    let minsold = Math.floor(e_minsold)                   //相差分钟数
    let seconds = Math.floor((e_minsold - minsold) * 60);  //相差秒数

    this.cptime = daysold + 'days ' + hrsold + 'hours ' + minsold + 'minutes ' + seconds + 'seconds ';
}

export default {
    name: 'ProjectInfo4',
    data() {
        return {
            cptime: '计算中'
        }
    },
    methods: {
        calc_cptime
    },
    beforeMount() {
        let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
            _this.calc_cptime();
        }, 1000)

    },

}
</script>