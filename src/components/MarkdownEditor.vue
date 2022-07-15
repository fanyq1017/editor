<template>
  <div class="markdown-editor">
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
  </div>
</template>


<script>
import { mavonEditor } from "mavon-editor";
import axios from "axios";
import "mavon-editor/dist/css/index.css";
export default {
  name: "MarkdownEditor",
  components: { mavonEditor },
  data() {
    return {
      content: "",
      imageFile: {},
      article: {
        id: "-1",
        title: "this is title",
        mdContent: "",
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

      axios({
        method: "POST",
        url: "http://10.132.49.197:8888/article/uploadimg",
        data: formdata,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(
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
        state: 1,
        type: 1,
      };

      console.log(data);

      axios({
        method: "POST",
        url: "http://10.134.48.4:8080/article/addArticle",
        data: data,
        transformRequest: [
          function (data) {
            // Do whatever you want to transform the data
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          },
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then(
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
      var params = {aid:2}
      axios({
        method: "GET",
        url:"http://10.134.48.4:8080/article/2",

      }).then(
        (response) => {
          console.log(response.data.data)

        },
        (error) => {
          console.log("error")

        }
      );
    },
  },
};
</script>


<style>
.markdown-editor {
  margin-top: 20px;
}
</style>
