<template>
  <div class="table">
    <el-table
      ref="multipleTable"
      :data="articles"
      max-height="390"
      @selection-change="handleSelectionChange"
    >
      <el-table-column property="title" label="标题" width="150" align="left">
      </el-table-column>

      <el-table-column property="uid" label="作者" width="120" align="left">
      </el-table-column>
    </el-table>
    <div class="blog_table_footer">
      <span></span>
      <el-pagination
        background
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="totalCount"
        @current-change="currentChange"
        v-show="this.articles.length > 0"
      >
      </el-pagination>
    </div>
  </div>
</template>


<script>
export default {
  name: "ArticleTable",
  data() {
    return {
      articles: [{ title: "123", uid: "fyq" }],
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
.table {
  margin-top: 15px;
  width: 100%;
}
.blog_table_footer {
  display: flex;
  box-sizing: content-box;
  padding-top: 10px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  justify-content: space-between;
  background-color: aquamarine;
}
</style>