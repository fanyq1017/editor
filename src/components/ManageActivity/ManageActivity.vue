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
      :data="activities"
      tooltip-effect="dark"
      style="width: 100%; overflow-x: hidden; overflow-y: hidden"
      max-height="1200"
      @selection-change="handleSelectionChange"
      v-loading="loading"
    >
      <el-table-column type="selection" width="35" align="left">
      </el-table-column>
      <el-table-column label="活动名称" width="400" align="left">
        <template slot-scope="scope"
          ><span
            style="color: #409eff; cursor: pointer"
            @click="itemClick(scope.row)"
            >{{ scope.row.pname }}</span
          >
        </template>
      </el-table-column>

      <el-table-column label="活动时间" width="240" align="left">
        <template slot-scope="scope"
          ><span
            >{{ scope.row.pprojectstart | formatDate }}至{{
              scope.row.pprojectend | formatDate
            }}</span
          >
        </template>
      </el-table-column>

      <el-table-column label="招募时间" width="240" align="left">
        <template slot-scope="scope"
          ><span
            >{{ scope.row.precruitstart | formatDate }}至{{
              scope.row.precruitend | formatDate
            }}</span
          >
        </template>
      </el-table-column>

      <el-table-column prop="ppeople" label="负责人" width="120" align="left">
      </el-table-column>
      <el-table-column
        prop="ptelephone"
        label="负责人电话"
        width="120"
        align="left"
      >
      </el-table-column>

      <el-table-column label="操作" align="left">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑
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
        v-show="this.activities.length > 0"
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
        v-show="this.activities.length > 0"
      >
      </el-pagination>
    </div>

    <el-dialog
      title="创建志愿活动"
      :visible.sync="addActivityShow"
      center
      width="800px"
    >
      <el-form ref="form" label-width="120px" style="width: 100%">
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
          <regin-selector @changeregin="changeregin($event)"> </regin-selector>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="activity.pLocation"></el-input>
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
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="addActivityShow = false">取 消</el-button>
        <el-button type="primary" @click="submit">注册</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="编辑活动信息"
      :visible.sync="editActivityShow"
      center
      width="800px"
    >
      <el-form
        ref="form"
        label-width="120px"
        style="width: 100%"
        :model="editForm"
      >
        <el-form-item label="活动名称">
          <el-input v-model="editForm.pName"></el-input>
        </el-form-item>
        <el-form-item label="活动类型">
          <el-select v-model="editForm.pType" placeholder="请选择活动类型">
            <el-option label="社区服务" :value="0"></el-option>
            <el-option label="平安综治" :value="1"></el-option>
            <el-option label="文明风尚" :value="2"></el-option>
            <el-option label="平安综治" :value="3"></el-option>
            <el-option label="卫生健康" :value="4"></el-option>
            <el-option label="环境保护" :value="5"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="活动地点">
          <regin-selector @changeregin="changeregin($event)"> </regin-selector>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="editForm.pLocation"></el-input>
        </el-form-item>

        <el-form-item label="活动时间">
          <el-col :span="24">
            <el-date-picker
              v-model="value3"
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
              v-model="value4"
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
          <el-input v-model="editForm.pServeclient"></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="editForm.pPeople"></el-input>
        </el-form-item>
        <el-form-item label="负责人电话号码">
          <el-input v-model="editForm.pTelephone"></el-input>
        </el-form-item>

        <el-form-item label="活动封面">
          <el-input v-model="editForm.pImage"></el-input>
        </el-form-item>

        <el-form-item label="活动描述">
          <el-input
            type="textarea"
            autosize
            v-model="editForm.pInfo"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="editActivityShow = false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">确认修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>




<script>
import reginSelector from "../activity/ReginSelector.vue";
import { getRequest } from "../../utils/api";
import { putRequest } from "../../utils/api";
import { postRequest } from "../../utils/api";
export default {
  name: "ManageActivity",
  components: { reginSelector },
  data() {
    return {
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPhone: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
        ],
        checkUserType: [
          { required: true, message: "请选择用户类型", trigger: "blur" },
        ],
      },
      activities: [],
      users: [],

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
      value3: "",
      value4: "",

      currentPage: 1,
      totalCount: -1,
      pageSize: 10,
      keywords: "",
      type: "-1",
      state: "1",

      selItems: [],
      dustbinData: [],
      addActivityShow: false,
      editActivityShow: false,

      regForm: {
        username: " ",
        password: " ",
        telephone: " ",
      },

      editForm: {
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
    };
  },

  mounted() {
    var _this = this;
    console.log("mouted");
    this.loadActivities(1, _this.pageSize);
  },

  methods: {
    changeregin(data) {
      this.region = data;
      this.activity.pProvinceregioncode = data[0];
      this.activity.pCityregioncode = data[1];
      this.activity.pDistrictregioncode = data[2];
    },
    currentChange(currentPage) {
      this.currentPage = currentPage;

      this.loadActivities(currentPage, this.pageSize);
    },

    loadActivities(page, count) {
      var _this = this;
      var url = "/project/queryAll?page=" + page + "&count=" + count;

      console.log(url);
      getRequest(url).then((response) => {
        _this.activities = response.data.data.records;
        _this.totalCount = response.data.data.total;
      });
    },
    handleSelectionChange(val) {
      this.selItems = val;
    },
    handleEdit(index, row) {
      console.log("row: ")
      console.log(row)
      console.log('-------------------------------')

      this.editForm.pId = row.pid;
      
      this.editForm.pImage = row.pimage;
      this.editForm.pInfo = row.pinfo;
      this.editForm.pName = row.pname;
      this.editForm.pPeople= row.ppeople;
      this.editForm.pServeclient = row.pserveclient;
      this.editForm.pType = row.ptype;
      this.editForm.pTelephone = row.ptelephone;
      this.editForm.pLocation = row.plocation;

      
      this.editActivityShow = true;
    },
    handleDelete(index, row) {
      console.log(index);
      console.log(row);
      var tdustbin = [];
      tdustbin.push(row.pid);
      console.log(tdustbin);
      var _this = this;
      postRequest("/project/deletec", {
        pIds: tdustbin,
      }).then(
        (response) => {
          console.log(response.data.data);
          if (response.data.state == 200) {
            alert("删除成功");
            this.loadActivities(_this.currentPage, _this.pageSize);
          } else {
            alert("删除失败");
          }
        },
        (error) => {
          console.log("删除失败");
          alert("删除失败");
        }
      );
    },
    deleteMany() {
      console.log("deleteMany");

      var selItems = this.selItems;
      console.log(selItems);
      for (var i = 0; i < selItems.length; i++) {
        this.dustbinData.push(selItems[i].pid);
      }
      var _this = this;
      console.log(this.dustbinData);
      postRequest("/project/delete", {
        pIds: _this.dustbinData,
      }).then(
        (response) => {
          console.log(response.data.data);
          if (response.data.state == 200) {
            alert("删除成功");
            _this.loadActivities(_this.currentPage, _this.pageSize);
          } else {
            alert("删除失败");
          }
        },
        (error) => {
          console.log("删除失败");
          alert("删除失败");
        }
      );
    },
    addUser() {
      this.addActivityShow = true;
    },

    confirmEdit() {
      var _this = this;

      this.editForm.pProjectstart = this.value3[0];
      this.editForm.pProjectend = this.value3[1];
      this.editForm.pRecruitstart = this.value4[0];
      this.editForm.pRecruitend = this.value4[1];
      console.log(this.editForm);

      postRequest("/project/update", _this.editForm).then(
        (response) => {
          if (response.data.state == 200) {
            alert("修改成功");
            _this.loadActivities(_this.currentPage, _this.pageSize);
            _this.editActivityShow = false;
          } else {
            alert("修改失败");
          }
        },
        (error) => {
          console.log(error);
          alert("修改失败");
        }
      );
    },

    submit() {
      this.activity.pProjectstart = this.value1[0];
      this.activity.pProjectend = this.value1[1];
      this.activity.pRecruitstart = this.value2[0];
      this.activity.pRecruitend = this.value2[1];
      var _this = this;

      postRequest("/project/add", _this.activity).then(
        (response) => {
          console.log(response.data.data);
          if (response.data.state == 200) {
            aler("创建成功");
            _this.addActivityShow = false;
            _this.loadActivities(_this.currentPage, _this.pageSize);
          } else {
            alert("添加失败");
          }
        },
        (error) => {
          console.log(error);
          alert("添加失败");
        }
      );
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

.el-dialog__header {
  margin: 0;
  padding: 0;
  height: 100px;
}

.el-dialog__title {
  padding: 0;
  margin: 0;
  line-height: 10px;
  font-size: 18px;
  color: #303133;
}
</style>
