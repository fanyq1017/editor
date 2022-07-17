<template>
<div class="row">
  <div class="article-container">
    <h4 class="container-title">信息动态</h4>
    <ul class="article-list">
      <li v-for="article in articles" class="article-info">
        <span style="display:block; float:left;">{{ article.title }}</span>
        <span class="date">{{ article.date }}</span>
      </li>
    </ul>

    <div class="pages">
      <a>1</a>
      <a>2</a>
      <a>3</a>
      <a>上一页</a>
      <a>下一页</a>
    </div>

  </div>

  <div class="col2">
    <div class="hotpoint-container">
      <h4 class="container-title">热点信息</h4>
      <ul class="article-list">
        <li v-for="article in articles" class="article-info">
          <span style="display:block; float:left;">{{ article.title }}</span>
          <span class="date">{{ article.date }}</span>
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
export default {
  name: "ArticleTable",
  data() {
    return {
      articles: 
      [
        { title: "这是第一篇新闻", uid: "001" ,date:"2022.1.15"},
        { title: "这是第二篇新闻", uid: "002" ,date:"2022.1.16"},
        { title: "这是第三篇新闻", uid: "003" ,date:"2022.1.19"},
        { title: "这是第四篇新闻", uid: "004" ,date:"2022.1.19"},
        { title: "这是第一篇新闻", uid: "001" ,date:"2022.1.15"},
        { title: "这是第二篇新闻", uid: "002" ,date:"2022.1.16"},
        { title: "这是第三篇新闻", uid: "003" ,date:"2022.1.19"},
        { title: "这是第四篇新闻", uid: "004" ,date:"2022.1.19"},
      ],
      selIems: [],
      loading: false,
      currentPage: 1,
      totalCount: 20,
      pageSize: 6,
    };
  },
  mounted: function () {
    var _this = this;
    this.loading = true;
  },
};
</script>
<style scoped>
div.article-container
{
  box-sizing: border-box;
  width:50%;
  height:1000px;
  padding:10px 30px 20px 0px;
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
  background-image: url(../../assets/bk.jpg);
  background-repeat:no-repeat;
  background-size: 100%;
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
span.date
{
  display: block;
  font-weight: bold;
  opacity: 0.6;
  float: right;
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
div.pages
{
  width:100%;
  text-align: center;
  margin-bottom: 40px;
  position: absolute;
  top:1070px;
  left:-230px;
}
div.pages a
{
  border:1px solid #cfcfcf;
  padding: 1px 5px;
  margin-right:5px;
  border-radius: 5px;
}
div.pages a:hover
{
  border:2px solid #cfcfcf;
  background-color: #cfcfcf;
  padding: 1px 5px;
  margin-right:5px;
  border-radius: 5px;
}

</style>