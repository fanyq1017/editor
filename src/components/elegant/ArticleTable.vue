<template>
  <div class="row">
    <div class="article-container">
      <h4 class="container-title">志愿风采</h4>
      <ul class="article-list">
        <li v-for="article in articles" class="article-info">
          <div class="title" @click="handleClick(article.id)">
            {{ article.title }}
          </div>
          <div class="date">{{ article.publishDate | formatDateTime }}</div>
        </li>
      </ul>
      <el-pagination
        background
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="totalCount"
        @current-change="currentChange"
        v-show="this.articles.length > 0"
        style="position:absolute;top:1050px;left:400px;"
      >
      </el-pagination>
    </div>

    <div class="col2">
      <div class="hotpoint-container">
        <h4 class="container-title">热点信息</h4>
        <ul class="article-list">
          <li v-for="article in articles.slice(0, 3)" class="article-info">
            <div class="title" @click="handleClick(article.id)">
              {{ article.title }}
            </div>
            <div class="date">{{ article.publishDate | formatDateTime }}</div>
          </li>
        </ul>
      </div>

      <div class="hotimg-container">
        <h4 class="container-title">热点图片</h4>

        <div class="hot-img">
          <img
            src="https://chinavolunteer.mca.gov.cn/NVSI/LEAP/Download/default/2022/5/27/eb6b953b6c144ba5bf7d91b89ac9cec4.jpg"
          />
          <h6>疫情防控志愿服务</h6>
        </div>

        <div class="hot-img">
          <img
            src="https://chinavolunteer.mca.gov.cn/NVSI/LEAP/Download/default/2022/4/2/96b16b2e60144cbc83e179949980eb89.png"
          />
          <h6>志愿服务关爱行动</h6>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getRequest } from "../../utils/api.js";
export default {
  name: "ArticleTable",
  data() {
    return {
      articles: [
        { title: "这是第一篇新闻", id: "001", publishDate: "2022.1.15" },
        { title: "这是第二篇新闻", id: "002", publishDate: "2022.1.16" },
        { title: "这是第三篇新闻", id: "003", publishDate: "2022.1.19" },
        { title: "这是第四篇新闻", id: "004", publishDate: "2022.1.19" },
      ],
      selIems: [],
      loading: false,
      currentPage: 1,
      totalCount: -1,
      pageSize: 15,
      state: "1",
      type: "1",
    };
  },
  mounted() {
    // console.log('mouted');
    var _this = this;
    this.loadArticles(1, this.pageSize, this.state, this.type);

    console.log(articles[0]);
  },
  methods: {
    handleClick(id) {
      this.$router.push({
        path: "/articledetail",
        query: { id: id },
      });
    },
    currentChange(currentPage) {
      this.currentPage = currentPage;

      this.loadArticles(currentPage, this.pageSize, this.state, this.type);
    },

    loadArticles(page, count, state, type) {
      var _this = this;
      var url =
        "/article/all?state=" +
        state +
        "&page=" +
        page +
        "&count=" +
        count +
        "&type=" +
        type;
      console.log(url);
      getRequest(url).then((response) => {
        _this.articles = response.data.data.records;
        _this.totalCount = response.data.data.total;
      });
    },
  },
};
</script>
<style scoped>
div.article-container {
  box-sizing: border-box;
  width: 50%;
  height: auto;
  padding: 20px 10px;
  margin: 4% 1% 3% 9%;
  background-color: rgba(245, 245, 245, 0.6);
  border: 1px solid #f2c9bb;
}
ul.article-list {
  list-style-type: disc;
}
li.article-info {
  padding: 6px;
  overflow-x: hideen;
  font-size: small;
}
li.article-info:hover {
  background-color: rgba(255, 255, 255, 0.6);
  color: orangered;
  cursor: pointer;
}
div.hotpoint-container {
  height: 300px;
  padding: 10px 30px 20px 0px;
  background-color: rgba(245, 245, 245, 0.6);
  border: 1px solid #f2c9bb;
  overflow: hidden;
}
div.row {
  background-image: url(../../assets/bk.webp);
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
}
div.row:after {
  content: "";
  display: table;
  clear: both;
}
h4.container-title {
  margin: 20px 0px 20px 20px;
  font-weight: bold;
  clear: both;
}
div.date {
  font-weight: bold;
  opacity: 0.6;
  overflow: hidden;
  text-align: right;
  height: 20px;
}
div.title {
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
div.col2 {
  float: left;
  box-sizing: border-box;
  width: 30%;
  margin: 4% 9% 3% 1%;
  height: 1000px;
}
div.hotimg-container {
  height: 670px;
  padding: 10px 0px 0px 0px;
  background-color: rgba(245, 245, 245, 0.6);
  border: 1px solid #f2c9bb;
  margin-top: 30px;
}
div.hot-img {
  padding: 0 10% 10% 10%;
  width: 100%;
  height: 45%;
  text-align: center;
}
div.hot-img > img {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin-bottom: 2%;
}
</style>