<template>
    <div class="show-range">
        <br />
        <h4 class="container-title">项目区域</h4>
        <div class="regins-container">
            <!-- <reginSelector></reginSelector> -->
            <div class="regins-first">
                <a class="regin-first" href="javascript:void(0)" v-for="regin in opitions" :id="regin.value"
                    @click="handleTopClick(regin)">
                    {{ regin.label }}
                </a>
            </div>
            <div class="regins-second" id="regins-second">
                <h6 style="margin-left:8px; font-weight: bold;">市</h6>
                <a class="regin-second" href="javascript:void(0)" v-for="regin in second_opitions" :id="regin.value"
                    @click="handleSecondClick(regin)">
                    {{ regin.label }}
                </a>
            </div>
            <div class="regins-third" id="regins-third">
                <h6 style="margin-left:8px; font-weight: bold;">区县</h6>
                <a class="regin-third" href="javascript:void(0)" v-for="regin in third_opitions" :id="regin.value"
                    @click="handleThirdClick(regin)">
                    {{ regin.label }}
                </a>
            </div>
        </div>

        <div>
            <h4 class="container-title">志愿活动</h4>
            <div class="events">
                <div v-loading="loading" element-loading-text="加载中..." style="min-height: 35vw;">
                    <div class="img-item">
                        <div class="goods-box">
                            <activity-event v-for="event in events" :msg="event" :info_state="info_state"></activity-event>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="this.info_state.active" class="more-info">
            <div class="more-info-header">
                <img :src="this.info_state.info.pimage" :alt="this.info_state.info.pname" />

                <div>
                    <div class="exit" @click="closeMoreInfo">X</div>
                    <h5 style="margin-bottom:8px;font-weight: bold;">{{this.info_state.info.pname}}</h5>
                    <div class="info-detail">活动地点：{{this.info_state.info.plocation}}</div>
                    <div class="info-detail">活动开始时间：{{this.info_state.info.pprojectstart | formatDateTime}}</div>
                    <div class="info-detail">活动结束时间：{{this.info_state.info.pprojectend | formatDateTime}}</div>
                    <div class="info-detail">联系电话：{{this.info_state.info.ptelephone}}</div>
                    
                </div>
            </div>
            <div class="more-info-body">
                <h5 style="font-weight: bold; margin-bottom: 20px;">活动介绍</h5>
                <div class="info-detail">{{this.info_state.info.pinfo}}</div>
            </div>
        </div>
    </div>


</template>

<script>
'use strict';
import activityEvent from './ActivityEvent.vue';
import reginSelector from './ReginSelector.vue';
import { getRequest } from '../../utils/api.js';
import { regionData, CodeToText, TextToCode } from 'element-china-area-data'

var cur_dom;
var cur_second_dom;
var cur_third_dom;

export default {
    data() {
        return {
            info_state:
            {
                active:false,
                info:{}
            },
            selectedRegions: [],
            opitions: regionData,
            second_opitions: [],
            third_opitions: [],
            events: [
                {
                    pimage: 'https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/static/img/10.f055224.png',
                    pname: '甲活动',
                },
                {
                    pimage: 'https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/static/img/43.c238c5c.png',
                    pname: '乙活动',
                },
                {
                    pimage: 'https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/static/img/65.18ae6ca.png',
                    pname: '丙活动',
                },
                {
                    pimage: 'https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/static/img/50.0c3f918.png',
                    pname: '丁活动',
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
        getRequest("/project/query?provinceRegionCode=110000&cityRegionCode=110100&districtRegionCode=110101&page=1&count=10").then(
            (response) => {
                // console.log(response.data.data);
                _this.events = response.data.data.records;
            }
        );
        // console.log('init' + Array.isArray(this.selectedRegions));

        // 初始化选中区域
        {
            cur_dom = document.getElementById(110000);
            cur_dom.className = 'regin-first active';
            this.selectedRegions.push(110000);
        }
        // 初始化二级区域
        {
            cur_second_dom = document.getElementById(110000);
            cur_second_dom.className = 'regin-first active';
            this.selectedRegions.push(110000);
        }
        // 初始化三级区域
        {
            cur_third_dom = document.getElementById(110000);
            cur_third_dom.className = 'regin-first active';
            this.selectedRegions.push(110000);
        }

    },
    methods: {
        handleTopClick(regin) {
            console.log('info_state in parent: ' + this.info_state.info.pname + ' ' + this.info_state.active);
            console.log('id of clicked:' + regin.value + ' id of cur: ' + cur_dom.id);

            // 重置选中地区
            {
                cur_dom.className = 'regin-first'; //清除当前选中地区
                cur_second_dom.className = 'regin-second'; //清除当前选中二级地区
                cur_third_dom.className = 'regin-third'; //清除当前选中三级地区
                // console.log(this.selectedRegions.length);
                var length = this.selectedRegions.length;
                for (var i = 0; i < length; i++) {
                    this.selectedRegions.pop();
                }

                cur_dom = document.getElementById(regin.value);
                cur_dom.className = 'regin-first active';
                this.selectedRegions.push(regin.value);

                document.getElementById('regins-third').style.display = 'none';
                if (regin.children.length > 0) {
                    // console.log(typeof document.getElementById('regins-second'));
                    document.getElementById('regins-second').style.display = 'block';
                }
                else {
                    document.getElementById('regins-second').style.display = 'none';
                }

                var length = this.second_opitions.length;
                for (var i = 0; i < length; i++) {
                    // console.log('second_opitions poping...' + this.second_opitions.length);
                    this.second_opitions.pop();
                }
                for (var i = 0; i < regin.children.length; i++) {
                    // console.log('second_opitions pushing...' + this.second_opitions.length);
                    this.second_opitions.push(regin.children[i]);
                }
            }
        },
        handleSecondClick(regin) {
            console.log('id of clicked_second:' + regin.value + ' id of cur_second: ' + cur_second_dom.id);

            // 重置选中地区
            {
                cur_second_dom.className = 'regin-second'; //清除当前选中二级地区
                cur_third_dom.className = 'regin-third'; //清除当前选中三级地区
                // console.log(this.selectedRegions.length);
                var length = this.selectedRegions.length;
                for (var i = 1; i < length; i++) {
                    this.selectedRegions.pop();
                }

                cur_second_dom = document.getElementById(regin.value);
                cur_second_dom.className = 'regin-second active';
                this.selectedRegions.push(regin.value);

                if (regin.children.length > 0) {
                    // console.log(typeof document.getElementById('regins-third'));
                    document.getElementById('regins-third').style.display = 'block';
                }
                else {
                    document.getElementById('regins-third').style.display = 'none';
                }

                var length = this.third_opitions.length;
                for (var i = 0; i < length; i++) {
                    // console.log('third_opitions poping...' + this.third_opitions.length);
                    this.third_opitions.pop();
                }
                for (var i = 0; i < regin.children.length; i++) {
                    // console.log('third_opitions pushing...' + this.third_opitions.length);
                    this.third_opitions.push(regin.children[i]);
                }
            }
        },
        handleThirdClick(regin) {
            console.log('id of clicked_third:' + regin.value + ' id of cur_third: ' + cur_third_dom.id);

            {
                cur_third_dom.className = 'regin-third'; //清除当前选中二级地区
                // console.log(this.selectedRegions.length);
                var length = this.selectedRegions.length;
                for (var i = 2; i < length; i++) {
                    this.selectedRegions.pop();
                }

                cur_third_dom = document.getElementById(regin.value);
                cur_third_dom.className = 'regin-third active';
                this.selectedRegions.push(regin.value);
            }

            this.loadNewEvents(this.selectedRegions[0], this.selectedRegions[1], this.selectedRegions[2], 5, 1);
        },
        loadNewEvents(regin0, regin1, regin2, count, page) {
            var url = '/project/query?provinceRegionCode='+ regin0 +'&cityRegionCode='+ regin1 +'&districtRegionCode='+ regin2 +'&page='+ page +'&count=' + count;
            console.log(url);
            var _this = this;
            getRequest(url).then(
                (response) => {
                    // console.log(response.data.data);
                    _this.events = response.data.data.records;
                    // console.log(response.data.data.records);
                })
        },
        closeMoreInfo()
        {
            this.info_state.active = false;
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
    background-image: url(../../assets/bk.webp);
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
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

    &:hover {
        color: #cc0000;
    }
}

a.regin-first.active {
    background: #cc0000;
    color: #fff;

    &:hover {
        color: #fff;
    }
}

div.regins-second {
    font-size: 0;
    position: relative;
    box-sizing: border-box;
    margin: 10px 5px;
    display: none;
}

a.regin-second {
    font-size: 14px;
    color: #333;
    line-height: 1.8;
    margin: 3 10px 2px 0;
    padding: 0 7px;
    display: inline-block;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #cc0000;
    }
}

a.regin-second.active {
    background: #cc0000;
    color: #fff;

    &:hover {
        color: #fff;
    }
}

div.regins-third {
    font-size: 0;
    position: relative;
    box-sizing: border-box;
    margin: 10px 5px;
    display: none;
}

a.regin-third {
    font-size: 14px;
    color: #333;
    line-height: 1.8;
    margin: 3 10px 2px 0;
    padding: 0 7px;
    display: inline-block;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #cc0000;
    }
}

a.regin-third.active {
    background: #cc0000;
    color: #fff;

    &:hover {
        color: #fff;
    }
}

div.more-info
{
    position:fixed;
    box-sizing: border-box;
    display: block;
    width: 60%;
    height: 70%;
    top: 15%;
    left: 20%;

    border:1px solid rgba(255, 51, 0, 0.521);
    box-shadow: 2px 2px 20px 1px #999;

    background-color: rgba(255,255,255,0.7);
    backdrop-filter: blur(6px);
}
div.more-info-header
{
    position:static;
    box-sizing: border-box;
    display: block;
    height:40%;

    &>img
    {
        box-sizing: border-box;
        height:100%;
        width: 35%;
        padding: 20px;
        float:left;
    }
    &>div
    {
        display: block;
        box-sizing: border-box;
        height: 100%;
        width: 65%;
        padding: 20px;
        float:left;
        overflow: hidden;
    }
}
div.info-detail
    {
        padding: 4px 0px;
        font-size: 14px;
    }
div.more-info-body
{
    position:static;
    box-sizing: border-box;
    display: block;
    height:60%;
    padding: 10px 30px;

}
.exit
{
    color:rgb(255, 51, 0);
    position: absolute; 
    width:30px; 
    height:30px;
    right:0; 
    top:0; 
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin:10px;
    border:3px solid rgba(255, 51, 0, 0.521);
    &:hover
    {
        background-color: rgba(255, 51, 0, 0.521);
        cursor:pointer;
    }
}
</style>