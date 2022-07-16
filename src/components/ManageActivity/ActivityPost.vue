<template>
  <el-container class="post-activity" style="height: 1000px">
    <el-header class="header">
      <span> 选择活动地址 </span>
      <regin-selector @changeregin="changeregin($event)"> </regin-selector>

      <span style="margin-left: 20px">选择活动日期</span>

      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="margin-top: 12px"
      >
      </el-date-picker>
    </el-header>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>

      <el-col :span="12">
        <el-button @click="test"> test </el-button>
      </el-col>
    </el-row>
  </el-container>
</template>




<script>
import reginSelector from "../activity/ReginSelector.vue";

export default {
  name: "ActivityPost",

  components: { reginSelector },

  data() {
    return {
      region: [],
    };
  },
  methods: {
    test() {},

    changeregin(data){
      this.region = data
      console.log(data + "拿到了") 
    }
  },
};
</script>


<style scoped>
.post-activity > .header {
  background-color: #ececec;
  margin-top: 0;
  padding-left: 5px;
  display: flex;
  justify-content: flex-start;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>












