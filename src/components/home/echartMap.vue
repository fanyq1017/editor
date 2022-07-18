<template>
<div id="container">
<div id="china_map" style='width:1000px;height:600px;'> </div>
<ul id="summary">
  <li class="top" style="font-size: 25px;width: 400px" ><span style="color:rgb(215, 7, 7); font-size: larger">中国</span>志愿服务数据统计</li>
  <li><span class="red">{{totalNumber}}</span><br>实名志愿者总数(人)</li>
  <li><span class="red">{{teamNumber}}</span><br>志愿队伍队伍总数(个)</li>
  <li><span class="red">{{projectNumber}}</span><br>志愿项目总数(个)</li>
  <li><span class="red">{{totalTime}}</span><br>服务时间总数(小时)</li>
  <li><span class="red">{{checkTimeNumber}}</span><br>记录时间人数(人)</li>
</ul>
</div>
</template>

<script>
import echarts from 'echarts'
require('echarts/map/js/china')
export default {
  name: 'EchartsMap',
  data(){
     return{
      totalNumber:'2.23亿',
      teamNumber:'127万',
      projectNumber:'934万',
      totalTime:'391100万',
      checkTimeNumber:'6726万'
    }
  },
  mounted () {
    this.chinachart = echarts.init(document.getElementById('china_map'))
    this.chartOption = {
      tooltip: {
        formatter (params) {
          let localValue
          if (params.data) {
            localValue = params.data.value
          } else {
            localValue = 0
          }
          let htmlStr = `
          <div style='font-size:18px;'> ${params.name}</div>
          <p style='text-align:left;margin-top:15px;'>
	          实名志愿者人数：${localValue}<br/>
          </p>
        `
          return htmlStr
        }
      },
      visualMap:{
        min: 100000,
        max: 9500000,
        range:[100000,9500000],
        text: ['高 [实名志愿者数量]', '低'],
        minOpen:false,
        maxOpen:false,
        realtime: true,
        calculable: false,
        inRange: {
          color: ['#fbe8d2','#f6a598','#f36663']
        }
      },

      geo: {
        map: 'china',
        zoom: 1.2,
        label: {
          show: true
        },
        itemStyle: {
          borderColor: 'rgba(0, 0, 0, 0.2)',
          emphasis: {
            shadowBlur: 30,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      series: [
        {
          name: '',
          type: 'map',
          geoIndex: 0,
          label: {
            show: true
          },
          data: [{
            'name': '北京',
            'value': 6790019,
          },
            {
            'name': '上海',
            'value': 5571995
          },
            {
            'name': '海南',
            'value': 1145970
          },
            {
            'name': '新疆',
            'value': 3504754,
          },
            {
            'name': '广东',
            'value': 12886602
          },
            {
              'name': '广西',
              'value': 10558162
            },
            {
              'name': '云南',
              'value': 7169639
            },
            {
              'name': '贵州',
              'value': 7746072
            },
            {
              'name': '重庆',
              'value': 6644285
            },
            {
            'name': '湖北',
            'value': 10755033
          },
            {
              'name': '湖南',
              'value': 3475918
            },
            {
              'name': '河北',
              'value': 12035665
            },
            {
              'name': '河南',
              'value': 13423464
            },
            {
              'name': '陕西',
              'value': 3507631
            },
            {
              'name': '山西',
              'value': 4224920
            },
            {
              'name': '山东',
              'value': 17203779
            },
            {
              'name': '江苏',
              'value': 22062500
            },
            {
              'name': '安徽',
              'value': 12984184
            },
            {
              'name': '浙江',
              'value': 9456841
            },
            {
              'name': '江西',
              'value': 5730284
            },
            {
              'name': '福建',
              'value': 6892892
            },
            {
            'name': '四川',
            'value': 15107911
          },
            {
              'name': '黑龙江',
              'value': 4358589
            },
            {
              'name': '吉林',
              'value':2867609
            },
            {
              'name': '辽宁',
              'value': 7109631
            },
            {
              'name': '内蒙古',
              'value': 2611802
            },
            {
              'name': '宁夏',
              'value': 1294373
            },
            {
              'name': '甘肃',
              'value': 3073464
            },
            {
              'name': '青海',
              'value': 587505
            },
            {
              'name': '西藏',
              'value': 132846
            }
          ]
        }
      ]
    }
    let vm = this;//vuecomponent的引用，方便修改数值
    let oldTotalNumber = vm.totalNumber;
    let oldTeamNumber = vm.teamNumber;
    let oldProjectNumber = vm.projectNumber;
    let oldTotalTime = vm.totalTime;
    let oldCheckTimeNumber = vm.checkTimeNumber;

    this.chinachart.setOption(this.chartOption);

    this.chinachart.on('mouseover', function(param){//检测鼠标是否在某个元素上
      //这里只完成了展示各省志愿者总数。其他数据（志愿项目总数、服务时间总数）还没有插入地图。
      //插入之后需要改动下面这行代码。
      vm.totalNumber = param.value;
    });
    this.chinachart.on('mouseout',function(){//检测鼠标是否从某个元素上移出
      vm.totalNumber = oldTotalNumber;
      vm.teamNumber = oldTeamNumber;
      vm.projectNumber = oldProjectNumber;
      vm.totalTime = oldTotalTime;
      vm.checkTimeNumber = oldCheckTimeNumber;
    })
  },
}
</script>

<style>
  #container{
    width:1333px;
    display: table;
  }
  #china-map{
    display: table-cell;
    width:75%;
  }
  #summary{
    font-size: 0.9rem;
    font-weight: 600;
    display: table-cell;
    vertical-align: middle;
    text-align:left;
    width:35%;
    margin:10em;
    padding-left: 10em;
    list-style:none;
  }
  .red{
    color:rgb(215, 7, 7);
    font-size: 2em;
    font-weight: 1000;
  }
  #summary li{
    display: block;
    height:6em;
    padding-left: 40px;
    background: url(../../assets/heart.bmp) no-repeat left calc(10px);
  }
  #summary .top{
    font-size: large;
    background: none;
    padding-left: 0;
    height: 5em;
  }
</style>
