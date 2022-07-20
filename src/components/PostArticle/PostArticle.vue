<template>
  <el-container class="post-article">
    <el-header class="header">
      <el-select
        v-model="article.type"
        placeholder="请选择"
        style="width: px; margin-left: 0"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        v-model="article.title"
        placeholder="请输入标题..."
        style="width: 400px; margin-left: 10px"
      ></el-input>
    </el-header>

    <mavonEditor
      ref="md"
      v-model="article.mdContent"
      style="min-height: 500px"
      @imgAdd="imageAdd"
      @imgDel="imageDel"
      @save="articleSave"
    >
    </mavonEditor>

    <div class="post">
      <el-button
        style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px"
        @click="articleSave"
      >
        发布资讯</el-button
      >
    </div>
  </el-container>
</template>


<script>
import { mavonEditor } from "mavon-editor";
import { postRequest } from "../../utils/api";
import { getRequest } from "../../utils/api";
import { uploadFileRequest } from "../../utils/api";
import "mavon-editor/dist/css/index.css";
export default {
  name: "MarkdownEditor",
  components: { mavonEditor },
  mounted() {
    var id = this.$route.query.id;
    var _this = this;
    if (id != null && id != "" && id != undefined) {
      getRequest("/article/query?id=" + id).then((response) => {
        if (response.data.state == 200) {
          _this.article = response.data.data;
          _this.mdContent = response.data.data.mdContent;
        }
      });
    }
  },

  data() {
    return {
      options: [
        {
          label: "全部",
          value: -1,
        },
        {
          label: "志愿风采",
          value: 1,
        },
        {
          label: "信息动态",
          value: 2,
        },
      ],
      content: "",
      imageFile: {},
      article: {
        id: "-1",
        title: "this is title",
        mdContent: "",
        type: "",
      },
      articles: [],
    };
  },
  methods: {
    imageAdd(pos, $file) {
      console.log(pos);
      var _this = this;

      var formdata = new FormData();
      formdata.append("image", $file);

      uploadFileRequest("/article/uploadimg", formdata).then(
        (response) => {
          console.log(response.data.data);
          _this.$refs.md.$imglst2Url([[pos, response.data.data]]);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    articleSave() {
      let data = {
        id: this.article.id,
        title: this.article.title,
        uid: this.$store.state.user.uid,
        mdContent: this.article.mdContent,
        htmlContent: this.$refs.md.d_render,
        state: "1",
        type: this.article.type,
        nickname: this.$store.state.user.username,
      };

      console.log(data);

      if (data.id == "-1") {
        postRequest("/article/addArticle", data).then(
          (response) => {
            if (response.data.state == 200) {
              alert("发布成功");
            } else {
              alert("发布失败");
            }
            console.log(response);
          },
          (error) => {
            console.log(error);
            alert("发布失败");
          }
        );
      } else {
        postRequest("/article/amendArticle", data).then(
          (response) => {
            if (response.data.state == 200) {
              alert("修改成功");
            } else {
              alert("修改失败");
            }
            console.log(response);
          },
          (error) => {
            console.log(error);
            alert("修改失败");
          }
        );
      }

      console.log("已保存");
    },
  },
};
</script>


<style  scoped>
.post-article > .header {
  background-color: #fff;
  margin-top: 0;
  padding-left: 5px;
  display: flex;
  justify-content: flex-start;
}
.post {
  /* width:100px; */
  margin-right: 0;
  margin-left: auto;
  margin-top: 0;
  line-height: 80px;
}
</style>


