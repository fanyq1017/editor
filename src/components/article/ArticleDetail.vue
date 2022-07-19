<template>
  <el-row v-loading="loading" class="show-range">
    <el-col :span="24">
      <div style="text-align: left">
        <el-button
          type="text"
          icon="el-icon-back"
          @click="goBack"
          style="padding: 8px;color:black; background-color: rgba(255, 255, 255, 0.8); position:fixed;border:1px solid #f2c9bb;"
          >返回</el-button
        >
      </div>
    </el-col>
    <el-col :span="12" offset="6">
      <div class="wrapper">
        <div>
          <h2 style="text-align: center">{{ article.title }}</h2>
        </div>
          <div style="color: black; font-size: 12px; text-align: center;margin-bottom: 20px;">
            {{ article.editTime | formatDateTime }}</div
          >
        <div style="text-align: center" v-html="article.htmlContent"></div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { getRequest } from "../../utils/api";
export default {
  name: "ArticleDetail",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },

  mounted: function () {
    console.log("mou");
    var id = this.$route.query.id;

    var _this = this;

    getRequest("/article/query?id=" + id).then((response) => {
      _this.article = response.data.data;
    });

    getRequest("/article/all?state=1&page=1&count=5&type=-1").then((response) => {
      
      console.log(response.data.data)

    });
  },

  data() {
    return {
      article: {},
      loading: false,
      activeName: "",
    };
  },
};
</script>


<style scoped>
.wrapper {
  border: 1px solid #f2c9bb;
  background: rgba(255, 255, 255, 0.6);
  padding: 15px;
  margin-bottom: 20px;
  backdrop-filter: blur(6px);
  box-shadow: 2px 2px 20px #999;
}

h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.show-range {
    background-image: url(../../assets/bk.webp);
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
}
</style>