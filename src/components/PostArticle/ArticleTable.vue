<template>
  <div>
    <el-header class="eheader">
      <div style="display: flex; justify-content: flex-start; height: ">
        <el-col span="">
          <el-input
            placeholder="通过活动名搜索"
            prefix-icon="el-icon-search"
            v-model="keywords"
            style="width: 400px; height: 80px"
          >
          </el-input>
        </el-col>
        <el-col>
          <el-button
            type="primary"
            icon="el-icon-search"
            style="margin-top: 0; padding-top: 0; height: 70px"
            @click="searchClick"
            >搜索
          </el-button>
        </el-col>
        <el-col offset="10" span="5">
          <el-button
            type="primary"
            @click="addUser"
            style="margin-top: 0; padding-top: 0; height: 70px"
            >+新增</el-button
          >
        </el-col>
      </div>
    </el-header>
    <el-table
      ref="multipleTable"
      :data="articles"
      tooltip-effect="dark"
      style="width: 100%; overflow-x: hidden; overflow-y: hidden"
      max-height="600"
      @selection-change="handleSelectionChange"
      v-loading="loading"
    >
      <el-table-column type="selection" width="35" align="left">
      </el-table-column>
      <el-table-column label="标题" width="400" align="left">
        <template slot-scope="scope"
          ><span
            style="color: #409eff; cursor: pointer"
            @click="itemClick(scope.row)"
            >{{ scope.row.title }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="最近编辑时间" width="140" align="left">
        <template slot-scope="scope">{{
          scope.row.editTime | formatDateTime
        }}</template>
      </el-table-column>
      <el-table-column prop="nickname" label="作者" width="120" align="left">
      </el-table-column>
      <el-table-column label="所属分类" width="120" align="left">
        <template slot-scope="scope">{{
          scope.row.type | getArticleType
        }}</template>
      </el-table-column>
      <el-table-column label="操作" align="left">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑
          </el-button>
          <el-button
            size="mini"
            @click="handleRestore(scope.$index, scope.row)"
            v-if="showRestore"
            >还原
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="blog_table_footer">
      <el-button
        type="danger"
        style="margin: 0px; height: 40px"
        v-show="this.articles.length > 0"
        :disabled="this.selItems.length == 0"
        @click="deleteMany"
        >批量删除
      </el-button>
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
import { getRequest } from "../../utils/api";
import { putRequest } from "../../utils/api";
import { postRequest } from "../../utils/api";
export default {
  name: "ArticleTable",
  data() {
    return {
      articles: [],
      currentPage: 1,
      totalCount: -1,
      pageSize: 5,
      keywords: "",
      type: "-1",
      state: "1",
      selItems: [],
      dustbinData: [],
    };
  },

  mounted() {
    var _this = this;
    console.log("mouted");
    this.loadArticles(1, this.pageSize, this.state, this.type);
  },

  methods: {
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
    searchClick() {
      var data = { pName: "", page: "1", count: "5" };
      data.title = this.keywords;

      var _this = this;
      var url = "/article/queryTitle";
      console.log(url);
      postRequest(url, data).then(
        (response) => {
          console.log(response.data);
          _this.articles = response.data.data.records;
          _this.totalCount = response.data.data.total;
        },
        (error) => {
          console.log("失败");
        }
      );
    },
    handleSelectionChange(val) {
      this.selItems = val;
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/manage/postarticle",
        query: { id: row.id },
      });
    },
    handleDelete(index, row) {
      console.log(index);
      console.log(row);
      this.dustbinData.push(row.id);
      console.log(this.dustbinData);
      var _this = this;
      postRequest("/article/dustbin", {
        aIds: _this.dustbinData,
        state: "1",
      }).then(
        (response) => {
          if (response.data.state == 200) {
            alert("删除成功");
          } else {
            alert("删除失败");
          }
          console.log(response.data.data);
          console.log("sc");
        },
        (error) => {
          alert("删除失败");
        }
      );
    },
    deleteMany() {
      console.log("deleteMany");
      console.log();
      var selItems = this.selItems;
      console.log(selItems);
      for (var i = 0; i < selItems.length; i++) {
        this.dustbinData.push(selItems[i].id);
      }
      var _this = this;
      console.log(this.dustbinData);
      postRequest("/article/dustbin", {
        aIds: _this.dustbinData,
        state: "1",
      }).then((response) => {
        console.log(response.data.data);
      });
    },
  },
};
</script>



<style>
.blog_table_footer {
  display: flex;
  box-sizing: content-box;
  padding-top: 10px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  justify-content: space-between;
}
.eheader {
  background-color: #fff;
}
</style>
