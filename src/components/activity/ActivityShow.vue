<template>
    <div class="show-range">
        <br />
        <h4 class="container-title">项目区域</h4>
        <div class = "regins-container">
            <reginSelector></reginSelector>
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
import {getRequest} from '../../utils/api.js';

const cityOptions = ['上海', '北京', '广州', '深圳', '合肥', '成都'];
export default {
    data() {
        return {
            checkboxGroup1: ['上海'],
            cities: cityOptions,

            events: [
                {
                    activityImg: 'C:/Users/21176/Desktop/git/editor/src/assets/a.jpeg',
                    title: '甲活动',
                    activityInfo: '一个志愿活动'
                },
                {
                    activityImg: '../../assets/b.jpeg',
                    title: '乙活动',
                    activityInfo: '一个志愿活动'
                },
                {
                    activityImg: '../../assets/c.jpeg',
                    title: '丙活动',
                    activityInfo: '一个志愿活动'
                },
                {
                    activityImg: '../../assets/d.jpeg',
                    title: '丁活动',
                    activityInfo: '一个志愿活动'
                },
                {
                    activityImg: '../../assets/e.jpeg',
                    title: '戊活动',
                    activityInfo: '一个志愿活动'
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
        border: 1px solid #efefef;
    }
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.show-range {
    background-image: url(../../assets/bk.jpg);
    background-repeat:no-repeat;
    background-size: 100%;
}
h4.container-title
{
  margin: 20px 0px 20px 8%;
  font-weight: bold;
  clear: both;
}
div.events
{
    margin: 0 8%;
}
div.regins-container
{
    background: rgba(248, 248, 248, 0.5);
    box-sizing: border-box;
    border: 1px solid #f2c9bb;
    margin: 0 8%;
}
</style>