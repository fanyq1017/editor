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
      content: "<h1>test</h1>",
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
