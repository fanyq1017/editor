<template>
  <el-container class="post-activity" style="height: 1000px">
    <el-header class="header"> </el-header>

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
        <el-form ref="form" label-width="120px">
          <el-form-item label="活动名称">
            <el-input v-model="activity.pName"></el-input>
          </el-form-item>
          <el-form-item label="活动类型">
            <el-select v-model="activity.pType" placeholder="请选择活动类型">
              <el-option label="社区服务" value="0"></el-option>
              <el-option label="平安综治" value="1"></el-option>
              <el-option label="文明风尚" value="2"></el-option>
              <el-option label="平安综治" value="3"></el-option>
              <el-option label="卫生健康" value="4"></el-option>
              <el-option label="环境保护" value="5"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="活动地点">
            <regin-selector @changeregin="changeregin($event)">
            </regin-selector>
          </el-form-item>

          <el-form-item label="活动时间">
            <el-col :span="24">
              <el-date-picker
                v-model="value1"
                type="daterange"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="招募时间">
            <el-col :span="24">
              <el-date-picker
                v-model="value2"
                type="daterange"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="服务对象">
            <el-input v-model="activity.pServeclient"></el-input>
          </el-form-item>
          <el-form-item label="负责人">
            <el-input v-model="activity.pPeople"></el-input>
          </el-form-item>
          <el-form-item label="负责人电话号码">
            <el-input v-model="activity.pTelephone"></el-input>
          </el-form-item>

          <el-form-item label="活动封面">
            <el-input v-model="activity.pImage"></el-input>
          </el-form-item>

          <el-form-item label="活动描述">
            <el-input
              type="textarea"
              autosize
              v-model="activity.pInfo"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>

        <el-button @click="test"> test </el-button>
      </el-col>
    </el-row>
  </el-container>
</template>




<script>
import reginSelector from "../activity/ReginSelector.vue";
import { postRequest } from "../../utils/api";

export default {
  name: "ActivityPost",

  components: { reginSelector },

  data() {
    return {
      region: {},
      activity: {
        pId: "-1",
        pImage: "",
        pName: "",
        pType: "",
        pLocation: "",
        pProjectstart: "",
        pProjectend: "",
        pRecruitstart: "",
        pRecruitend: "",
        pServeclient: "",
        pInfo: "",
        pPeople: "",
        pTelephone: "",
        pProvinceregioncode: "",
        pCityregioncode: "",
        pDistrictregioncode: "",
      },
      value1: "",
      value2: "",
    };
  },
  methods: {
    test() {
      console.log(this.value1);
    },

    changeregin(data) {
      this.region = data;
      this.activity.pProvinceregioncode = data[0];
      this.activity.pCityregioncode = data[1];
      this.activity.pDistrictregioncode = data[2];
    },

    submit() {
      this.activity.pProjectstart = this.value1[0];
      this.activity.pProjectend = this.value1[1];
      this.activity.pRecruitstart = this.value2[0];
      this.activity.pRecruitend = this.value2[1];

      var _this = this;

      postRequest("/project/add", _this.activity).then((response) => {
        console.log(response.data.data);
      });
    },
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












