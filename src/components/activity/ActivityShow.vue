<template>
    <div class="show-range">
        <br />
        <h4 class="container-title">项目区域</h4>
        <div class="regins-container">
            <!-- <reginSelector></reginSelector> -->
            <div class="regins-first">
                <a class="regin-first" href="javascript:void(0)" v-for="regin in opitions" :id="regin.value" @click="handleClick(regin.value)">
                    {{regin.label}}
                </a>
            </div>
        </div>

        <div>
            <h4 class="container-title">志愿活动</h4>
            <div class="events">
                <div v-loading="loading" element-loading-text="加载中..." style="min-height: 35vw;">
                    <div class="img-item">
                        <div class="goods-box">
                            <activity-event v-for="event in events" :msg="event"></activity-event>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import activityEvent from './ActivityEvent.vue';
import reginSelector from './ReginSelector.vue';
import { getRequest } from '../../utils/api.js';
import { regionData, CodeToText, TextToCode } from 'element-china-area-data'

export default {
    data() {
        return {
            selectedRigin:[],
            opitions:regionData,
            events: [
                {
                    activityImg: 'https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/static/img/10.f055224.png',
                    title: '甲活动',
                },
                {
                    activityImg: 'https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/static/img/43.c238c5c.png',
                    title: '乙活动',
                },
                {
                    activityImg: 'https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/static/img/65.18ae6ca.png',
                    title: '丙活动',
                },
                {
                    activityImg: 'https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/static/img/50.0c3f918.png',
                    title: '丁活动',
                }
            ]
        }
    },
    components: {
        activityEvent,
        reginSelector
    },
    mounted() {
        // console.log('mouted');
        var _this = this;
        getRequest("/article/all?state=1&page=1&count=20&type=-1").then(
            (response) => {
                // console.log(response.data.data);
                _this.events = response.data.data.records;
            }
        )
    },
    methods: {
        handleClick(id)
        {
            console.log('handleClick of obj:' + id);
            document.getElementById(id).className = 'regin-first active';
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.img-item {
    display: flex;
    flex-direction: column;
}

.goods-box {
    >div {
        float: left;
        border: 1px solid #ffd2bc;
    }
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.show-range {
    background-image: url(../../assets/bk.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
}

h4.container-title {
    margin: 20px 0px 20px 8%;
    font-weight: bold;
    clear: both;
}

div.events {
    margin: 0 8%;
}

div.regins-container {
    background: rgba(248, 248, 248, 0.5);
    box-sizing: border-box;
    border: 1px solid #f2c9bb;
    margin: 0 8%;
}

div.regins-first {
    font-size: 0;
    position: relative;
    box-sizing: border-box;
    margin: 10px 5px;
}

a.regin-first {
    font-size: 14px;
    color: #333;
    line-height: 1.8;
    margin: 3 10px 2px 0;
    padding: 0 7px;
    display: inline-block;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
}
a.regin-first.active
{
    background: #cc0000;
    color: #fff;
    &:hover
    {
        color:#fff;
    }
}
a.regin-first:hover
{
    color:#cc0000;
}
</style>