<template>
<div class="row">
  <div class="article-container">
    <h3 style="margin-left:20px;">信息动态</h3>
    <ul class="article-list">
      <li v-for="article in articles" class="article-info">
        <span style="display:block; float:left;">{{ article.title }}</span>
        <span style="display:block; float:right;">{{ article.date }}</span>
      </li>
    </ul>
  </div>

  <div class="hotpoint-container">
    <h3 style="margin-left:20px;">热点信息</h3>
    <ul class="article-list">
      <li v-for="article in articles" class="article-info">
        <span style="display:block; float:left;">{{ article.title }}</span>
        <span style="display:block; float:right;">{{ article.date }}</span>
      </li>
    </ul>
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
  float:left;
  width:55%;
  height:700px;
  padding:10px 30px 20px 0px;
  margin:4% 2% 3% 3%;
  background-color: rgba(220, 220, 220, 0.5);
  border-style: solid;
  border-width: 1px;
}
ul.article-list
{
  list-style-type:disc;
}
li.article-info
{
  padding:5px;
}
li.article-info:hover
{
  background-color: rgba(184, 184, 184, 0.5);
  color:orangered;
}
div.hotpoint-container
{
  float:left;
  width:30%;
  height:200px;
  padding:10px 30px 20px 0px;
  margin:4% 2% 3% 3%;
  background-color: rgba(220, 220, 220, 0.5);
  border-style: solid;
  border-width: 1px;
}
div.row
{
  background-image: url(../../assets/bk.jpg);
  background-repeat:space;
}
div.row:after {
  content: "";
  display: table;
  clear: both;
}

</style>