<template>
  <el-row>
    <el-col>
      <div v-html="content"></div>
      <div>{{ this.$route.query.id }}</div>
      <EchartsMap/>
    </el-col>
    <el-col>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col><h1><a id="1233242articlepnghttp1013250278080img645a486d74034cbdb588684bfefe3620_articlepng_0"></a>1233242<img src="http://10.132.50.27:8080/img/645a486d-7403-4cbd-b588-684bfefe3620_article.png" alt="article.png" /></h1></el-col>
  </el-row>
  
</template>



<script>
import EchartsMap from "@/components/home/echartMap";
export default {
  components: {EchartsMap},
  name: "HomeShow",
  data() {
    return {
      article: {},
      content: ' ',
    };
  },
};
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
</style>
