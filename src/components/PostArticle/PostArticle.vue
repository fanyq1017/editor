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
    <el-button @click="getArticle"> 请求</el-button>
  </el-container>
</template>


<script>
import { mavonEditor } from "mavon-editor";
import { postRequest } from "../../utils/api";
import { uploadFileRequest } from "../../utils/api";
import axios from "axios";
import "mavon-editor/dist/css/index.css";
export default {
  name: "MarkdownEditor",
  components: { mavonEditor },
  data() {
    return {
      options: [
        {
          label: "志愿风采",
          value: "1",
        },
        {
          label: "信息动态",
          value: "2",
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
        uid: 100,
        mdContent: this.article.mdContent,
        htmlContent: this.$refs.md.d_render,
        state: "1",
        type: "1",
      };

      console.log(data);

      postRequest("/article/addArticle", da).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );

      console.log("已保存");
    },

    getArticle() {
      console.log("点我");
      var params = { aid: 2 };
      axios({
        method: "GET",
        url: "http://10.134.48.4:8080/article/2",
      }).then(
        (response) => {
          console.log(response.data.data);
        },
        (error) => {
          console.log("error");
        }
      );
    },
  },
};
</script>


<style  scoped>
.post-article > .header {
  background-color: #ececec;
  margin-top: 0;
  padding-left: 5px;
  display: flex;
  justify-content: flex-start;
}
</style>


