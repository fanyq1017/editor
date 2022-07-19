<template>
  <el-row gutter="30" class="home-range">
    <el-row>
      <el-col style="text-align: center;height: 70px;padding-top: 10px">
        <span  class="leadnews" style="color: #f6a598">头条 : </span>
        <span class="leadnews" style="color: #e81928" >习近平总书记考察河北纪实</span>
      </el-col>
      <el-col style="text-align: center;height:30px" class="brief">
        来源：新华社8月23日至24日，中共中央总书记、国家主席、中央军委主席习近平在河北省承德市考察。
      </el-col>
      <el-col style="text-align: center;color: #f36663">
   ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </el-col>
    </el-row>
    <el-col :span="10" offset="2" >
      <el-carousel height="450px">
        <el-carousel-item v-for="item in carousel_items" :key="item.url">
          <img v-if="item.url"
              :src=item.url>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="10">
      <el-row style="padding-top: 10px;">
        <el-col :span="10" >
          <img src="../../assets/toutiao.png"><span class="leadnews" style="padding-left: 20px">文明XX新闻动态</span>
        </el-col>
        <el-col :span="2" offset="10" style="padding-top: 10px">
          <el-button type="danger" plain icon="el-icon-search" size="small" round @click="more()">更多</el-button>
        </el-col>
      </el-row>
      <el-col>
        <el-table
            :data="articles"
            style="width: 100%">
          <el-table-column
              prop="title"
              width="400">
           <template slot-scope="scope"><span style="color: #409eff;cursor: pointer" @click="itemClick(scope.row)">{{ scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column
              prop="publishDate"
              width="180">
            <template slot-scope="scope"><span style="cursor:pointer" @click="itemClick(scope.row)">{{scope.row.publishDate | formatDate}}</span></template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-col>
    <el-col>
      <el-divider></el-divider>
      <EchartsMap/>
    </el-col>
    <el-col>
      <el-divider></el-divider>
      <VideoContent/>
    </el-col>
  </el-row>
</template>



<script>
import EchartsMap from "@/components/home/echartMap";
import {getRequest} from "@/utils/api"
import VideoContent from "@/components/video/VideoContent";
export default {
  methods: {
    itemClick(row) {
      this.$router.push({
        path: "/articledetail",
        query: {id: row.id}
      })
    },
    more(){
      this.$router.push({
        path: "/message",
      });
    }
  },


  components: {VideoContent, EchartsMap},
    name: "HomeShow",
    mounted() {
      console.log('mouted')
      var _this = this
      getRequest("/article/all?state=1&page=1&count=5&type=-1").then(
          (response) => {
            console.log(response.data.data)

            _this.articles = response.data.data.records


          }
      )


    },

  data() {
      return {
        articles: [{title: "111", date: "2022-7-1", id: "36"},
          {title: "222", date: "2022-7-2", id: "234567"},
          {title: "333", date: "2022-7-3", id: "345678"}
        ],
        carousel_items:[
          {url:require("../../assets/carousel1.png")},
          {url:require("../../assets/carousel2.jpeg")},

        ],
        content: ' ',
      };


    },

}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.leadnews{
  font-weight: bold;
  font-size: 28px;
  font-family: "Arial Rounded MT Bold";
}
.brief{
  font-size: small;
}
.home-range
{
    background-image: url(../../assets/bk.webp);
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
}
</style>
