<template>
  <el-row v-loading="loading">
    <el-col :span="24">
      <div style="text-align: left">
        <el-button
          type="text"
          icon="el-icon-back"
          @click="goBack"
          style="padding-bottom: 0px"
          >返回</el-button
        >
      </div>
    </el-col>
    <el-col :span="12" offset="6">
      <div class="wrapper">
        <div>
          <h2 style="text-align: center">{{ article.title }}</h2>
        </div>
        <div
          style="
            width: 100%;
            margin-top: 5px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          "
        >
          <span style="color: #20a0ff; margin-right: 20px; font-size: 12px"
            >浏览 {{ article.pageView == null ? 0 : article.pageView }}</span
          >
          <span style="color: #20a0ff; margin-right: 20px; font-size: 12px">
            {{ article.editTime | formatDateTime }}</span
          >

          <span style="margin: 0px 50px 0px 0px"></span>
        </div>
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

    console.log("mou")
    var id = this.$route.query.id;

    var _this = this;

    getRequest("/article/query?id=" + id).then((response) => {
      _this.article = response.data.data
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
</style>