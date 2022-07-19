<template>
<div class="row">
  <div class="article-container">
    <h4 class="container-title">信息动态</h4>
    <ul class="article-list">
      <li v-for="article in articles.slice(0, 6)" class="article-info">
        <div class="title" @click="handleClick(article.id)">{{ article.title }}</div>
        <div class="date">{{ article.publishDate }}</div>
      </li>
    </ul>
    <h4 class="container-title">专题活动</h4>
    <ul class="article-list">
      <li v-for="article in articles.slice(6, 11)" class="article-info">
        <div class="title">{{ article.title }}</div>
        <div class="date">{{ article.publishDate }}</div>
      </li>
    </ul>
    <h4 class="container-title">公益广告</h4>
    <ul class="article-list">
      <li v-for="article in articles.slice(11, 16)" class="article-info">
        <div class="title">{{ article.title }}</div>
        <div class="date">{{ article.publishDate }}</div>
      </li>
    </ul>

  </div>

  <div class="col2">
    <div class="hotpoint-container">
      <h4 class="container-title">热点信息</h4>
      <ul class="article-list">
        <li v-for="article in articles.slice(0, 3)" class="article-info">
          <div class="title">{{ article.title }}</div>
          <div class="date">{{ article.publishDate }}</div>
        </li>
      </ul>
    </div>

    <div class="hotimg-container">
      <h4 class="container-title">热点图片</h4>

      <div class="hot-img">
        <img src="https://chinavolunteer.mca.gov.cn/NVSI/LEAP/Download/default/2022/5/27/eb6b953b6c144ba5bf7d91b89ac9cec4.jpg"/>
        <h6>疫情防控志愿服务</h6> 
      </div>

      <div class="hot-img">
        <img src="https://chinavolunteer.mca.gov.cn/NVSI/LEAP/Download/default/2022/4/2/96b16b2e60144cbc83e179949980eb89.png"/>
        <h6>志愿服务关爱行动</h6> 
      </div>
      
    </div>
  </div>

  

</div>
</template>


<script>
import {getRequest} from '../../utils/api.js'
export default {
  name: "ArticleTable",
  data() {
    return {
      articles: 
      [
        { title: "这是第一篇新闻", id: "001" ,publishDate:"2022.1.15"},
        { title: "这是第二篇新闻", id: "002" ,publishDate:"2022.1.16"},
        { title: "这是第三篇新闻", id: "003" ,publishDate:"2022.1.19"},
        { title: "这是第四篇新闻", id: "004" ,publishDate:"2022.1.19"},
        { title: "这是第一篇新闻", id: "001" ,publishDate:"2022.1.15"},
        { title: "这是第二篇新闻", id: "002" ,publishDate:"2022.1.16"},
        { title: "这是第三篇新闻", id: "003" ,publishDate:"2022.1.19"},
        { title: "这是第四篇新闻", id: "004" ,publishDate:"2022.1.19"},
      ],
      selIems: [],
      loading: false,
      currentPage: 1,
      totalCount: 20,
      pageSize: 15,
    };
  },
  mounted() {
        // console.log('mouted');
        var _this = this;
        getRequest("/article/all?state=1&page=1&count=15&type=-1").then(
            (response) => {
                 console.log(response.data.data);
                _this.articles = response.data.data.records;
            }
        )
    },
  methods:
  {
    handleClick(id)
    {
      this.$router.push({
        path: "/articledetail",
        query: {id: id}
      })
    }
  }
};
</script>
<style scoped>
div.article-container
{
  box-sizing: border-box;
  width:50%;
  height:auto;
  padding:20px 10px;
  margin:4% 1% 3% 9%;
  background-color: rgba(245, 245, 245, 0.6);
  border: 1px solid #f2c9bb;
}
ul.article-list
{
  list-style-type:disc;
}
li.article-info
{
  padding:6px;
  overflow-x: hideen;
  font-size: small;
}
li.article-info:hover
{
  background-color: rgba(255, 255, 255, 0.6);
  color:orangered;
  cursor: pointer;
}
div.hotpoint-container
{
  height:300px;
  padding:10px 30px 20px 0px;
  background-color: rgba(245, 245, 245, 0.6);
  border: 1px solid #f2c9bb;
  overflow: hidden;
}
div.row
{
  background-image: url(../../assets/bk.webp);
  background-repeat:no-repeat;
  background-size: 100%;
  background-attachment: fixed;
}
div.row:after {
  content: "";
  display: table;
  clear: both;
}
h4.container-title
{
  margin: 20px 0px 20px 20px;
  font-weight: bold;
  clear: both;
}
div.date
{
  font-weight: bold;
  opacity: 0.6;
  overflow: hidden;
  text-align: right;
  height: 20px;
}
div.title
{
  height:100%;
  box-sizing: border-box;
  overflow: hidden;
}
div.col2
{
  float:left;
  box-sizing: border-box;
  width:30%;
  margin:4% 9% 3% 1%;
  height:1000px;
}
div.hotimg-container
{
  height:670px;
  padding:10px 0px 0px 0px;
  background-color: rgba(245, 245, 245, 0.6);
  border: 1px solid #f2c9bb;
  margin-top:30px;
}
div.hot-img
{
  padding: 0 10% 10% 10%;
  width: 100%;
  height: 45%;
  text-align: center;
}
div.hot-img>img
{
  display: block;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin-bottom: 2%;
}

</style>