<template>
<div id="container">
<div id="china_map" style='width:1000px;height:600px;'> </div>
<ul id="summary">
  <li class="top" style="font-size: 18px"><span style="color:rgb(215, 7, 7);">{{province}}</span>志愿服务数据统计</li>
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
      province:'中国',
      totalNumber:'2.23亿',
      teamNumber:'127万',
      projectNumber:'935万',
      totalTime:'391417万',
      checkTimeNumber:'6741万'
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
              'value': 3476497,//实名志愿者总数
              'work_time_count': "286484",//记录时间人数
              'count_time': "2514887.24",//服务时间总数（人）
              'count_project': "14445",//志愿项目总数
              'count_org': "8307",//志愿队伍总数
              'name': "湖南"//省份
          },
          {
              'value': 3080028,
              'work_time_count': "1009432",
              'count_time': "41428834.14",
              'count_project': "124306",
              'count_org': "31185",
              'name': "甘肃"
          },
          {
              'value': 6644859,
              'work_time_count': "1512155",
              'count_time': "126109708.92",
              'count_project': "236913",
              'count_org': "49084",
              'name': "重庆"
          },
          {
              'value': 9456872,
              'work_time_count': "104868",
              'count_time': "6922664.21",
              'count_project': "63947",
              'count_org': "5221",
              'name': "浙江"
          },
          {
              'value': 13423472,
              'work_time_count': "3680939",
              'count_time': "230794115.49",
              'count_project': "706116",
              'count_org': "77499",
              'name': "河南"
          },
          {
              'value': 17206261,
              'work_time_count': "5458552",
              'count_time': "487471112.39",
              'count_project': "366235",
              'count_org': "106146",
              'name': "山东"
          },
          {
              'value': 7111205,
              'work_time_count': "1395469",
              'count_time': "14950931.39",
              'count_project': "49530",
              'count_org': "27409",
              'name': "辽宁"
          },
          {
              'value': 10755037,
              'work_time_count': "3012672",
              'count_time': "64266359.44",
              'count_project': "230485",
              'count_org': "52618",
              'name': "湖北"
          },
          {
              'value': 4225902,
              'work_time_count': "1133525",
              'count_time': "25724436.23",
              'count_project': "72218",
              'count_org': "42087",
              'name': "山西"
          },
          {
              'value': 6894069,
              'work_time_count': "3166769",
              'count_time': "196548314.12",
              'count_project': "981364",
              'count_org': "88034",
              'name': "福建"
          },
          {
              'value': 5730403,
              'work_time_count': "109320",
              'count_time': "46069961.01",
              'count_project': "48346",
              'count_org': "6306",
              'name': "江西"
          },
          {
              'value': 132847,
              'work_time_count': "21537",
              'count_time': "1057162.76",
              'count_project': "4699",
              'count_org': "3112",
              'name': "西藏"
          },
          {
              'value': 12886797,
              'work_time_count': "580328",
              'count_time': "55750563.77",
              'count_project': "164951",
              'count_org': "63797",
              'name': "广东"
          },
          {
              'value': 587606,
              'work_time_count': "37491",
              'count_time': "2404407.18",
              'count_project': "5083",
              'count_org': "6560",
              'name': "青海"
          },
          {
              'value': 7174838,
              'work_time_count': "2803654",
              'count_time': "223065549.04",
              'count_project': "345843",
              'count_org': "41456",
              'name': "云南"
          },
          {
              'value': 12994375,
              'work_time_count': "5870230",
              'count_time': "124939992.17",
              'count_project': "438416",
              'count_org': "53690",
              'name': "安徽",
          },
          {
              'value': 7757205,
              'work_time_count': "4562740",
              'count_time': "151249279.5",
              'count_project': "324950",
              'count_org': "48557",
              'name': "贵州"
          },
          {
              'value': 22063337,
              'work_time_count': "7651051",
              'count_time': "333178722.32",
              'count_project': "2532317",
              'count_org': "106790",
              'name': "江苏"
          },
          {
              'value': 2,
              'work_time_count': "0",
              'count_project': "0",
              'count_org': "0",
              'name': "台湾"
          },
          {
              'value': 1294965,
              'work_time_count': "633156",
              'count_time': "71086711.45",
              'count_project': "202080",
              'count_org': "9063",
              'name': "宁夏"
          },
          {
              'value': 2867622,
              'work_time_count': "296386",
              'count_time': "8482298.57",
              'count_project': "35221",
              'count_org': "18726",
              'name': "吉林"
          },
          {
              'value': 4358644,
              'work_time_count': "36242",
              'count_time': "1617931.35",
              'count_project': "4206",
              'count_org': "4694",
              'name': "黑龙江"
          },
          {
              'value': 0,
              'work_time_count': "0",
              'count_project': "0",
              'count_org': "0",
              'name': "澳门"
          },
          {
              'value': 3505118,
              'work_time_count': "70901",
              'count_time': "2993013.94",
              'count_project': "9073",
              'count_org': "3694",
              'name': "新疆建设兵团"
          },
          {
              'value': 3505118,
              'work_time_count': "820585",
              'count_time': "35353903.49",
              'count_project': "94681",
              'count_org': "24296",
              'name': "新疆"
          },
          {
              'value': 1145973,
              'work_time_count': "499743",
              'count_time': "29298242.81",
              'count_project': "106208",
              'count_org': "11893",
              'name': "海南"
          },
          {
              'value': 6789991,
              'work_time_count': "2563260",
              'count_time': "565163547.54",
              'count_project': "637626",
              'count_org': "103070",
              'name': "北京"
          },
          {
              'value': 12035910,
              'work_time_count': "3953432",
              'count_time': "137336233.74",
              'count_project': "251355",
              'count_org': "65446",
              'name': "河北"
          },
          {
              'value': 2612289,
              'work_time_count': "560142",
              'count_time': "31397971.83",
              'count_project': "77321",
              'count_org': "22287",
              'name': "内蒙古"
          },
          {
              'value': 0,
              'work_time_count': "0",
              'count_project': "0",
              'count_org': "0",
              'name': "香港"
          },
          {
              'value': 3508567,
              'work_time_count': "1358914",
              'count_time': "105122599.47",
              'count_project': "243686",
              'count_org': "37811",
              'name': "陕西"
          },
          {
              'value': 10558207,
              'work_time_count': "5497649",
              'count_time': "144174238.52",
              'count_project': "269872",
              'count_org': "46944",
              'name': "广西"
          },
          {
              'value': 5571987,
              'work_time_count': "3772271",
              'count_time': "526166041.5",
              'count_project': "447191",
              'count_org': "36756",
              'name': "上海"
          },
          {
              'value': 15113255,
              'work_time_count': "4868786",
              'count_time': "106430373.4",
              'count_project': "260847",
              'count_org': "69405",
              'name': "四川"
          },
          {
              'value': 2030839,
              'work_time_count': "83798",
              'count_time': "15328763.49",
              'count_project': "4728",
              'count_org': "1902",
              'name': "天津"
          },
          {
              'value': 0,
              'work_time_count': "0",
              'count_time': "0",
              'count_project': "0",
              'count_org': "0",
              'name': "南海诸岛"
          }]
        }
      ]
    }

    function addWan(n){
      if(n instanceof String) n = parseInt(n);
      if(n >= 10000) return Math.floor(n/10000).toString()+"万";
      else return Math.floor(n).toString();
    }
    let vm = this;//vuecomponent的引用，方便修改数值
    let oldProvince = vm.province;
    let oldTotalNumber = vm.totalNumber;
    let oldTeamNumber = vm.teamNumber;
    let oldProjectNumber = vm.projectNumber;
    let oldTotalTime = vm.totalTime;
    let oldCheckTimeNumber = vm.checkTimeNumber;

    this.chinachart.setOption(this.chartOption);
    this.chinachart.on('mouseover', function(param){//检测鼠标是否在某个元素上
      //这里只完成了展示各省志愿者总数。其他数据（志愿项目总数、服务时间总数）还没有插入地图。
      //插入之后需要改动下面这行代码。
      vm.province = param.name;
      vm.totalNumber = addWan(param.value);
      vm.teamNumber = addWan(param.data.count_org);
      vm.projectNumber = addWan(param.data.count_project);
      vm.totalTime = addWan(param.data.count_time);
      vm.checkTimeNumber = addWan(param.data.work_time_count);
    });
    this.chinachart.on('mouseout',function(){//检测鼠标是否从某个元素上移出
      vm.province = oldProvince;
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
