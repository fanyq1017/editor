<template>
    <div class="show-range">

        <br/>
        <span>
            <h2>项目区域</h2>
        </span>
        <reginSelector></reginSelector>
        <br/>

        <div>
            <h2>志愿活动</h2>
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
import activityEvent from './ActivityEvent.vue'
import reginSelector from './ReginSelector.vue'

const cityOptions = ['上海', '北京', '广州', '深圳', '合肥', '成都'];
export default {
    data() {
        return {
            checkboxGroup1: ['上海'],
            cities: cityOptions,

            events:[
                {
                    activityImg:'C:/Users/21176/Desktop/git/editor/src/assets/a.jpeg',
                    activityName:'甲活动',
                    activityInfo:'一个志愿活动'
                },
                {
                    activityImg:'../../assets/b.jpeg',
                    activityName:'乙活动',
                    activityInfo:'一个志愿活动'
                },
                {
                    activityImg:'../../assets/c.jpeg',
                    activityName:'丙活动',
                    activityInfo:'一个志愿活动'
                },
                {
                    activityImg:'../../assets/d.jpeg',
                    activityName:'丁活动',
                    activityInfo:'一个志愿活动'
                },
                {
                    activityImg:'../../assets/e.jpeg',
                    activityName:'戊活动',
                    activityInfo:'一个志愿活动'
                }
            ]
        };
    },
    components:{
        activityEvent,
        reginSelector
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.img-item{
    display: flex;
    flex-direction: column;
  }

.goods-box {
    > div {
      float: left;
      border: 1px solid #efefef;
    }
  }

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.show-range{
    margin-top: 20px;
}
</style>