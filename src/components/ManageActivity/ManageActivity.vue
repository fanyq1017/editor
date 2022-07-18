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
      :data="users"
      tooltip-effect="dark"
      style="width: 100%; overflow-x: hidden; overflow-y: hidden"
      max-height="1200"
      @selection-change="handleSelectionChange"
      v-loading="loading"
    >
      <el-table-column type="selection" width="35" align="left">
      </el-table-column>
      <el-table-column label="用户名" width="400" align="left">
        <template slot-scope="scope"
          ><span
            style="color: #409eff; cursor: pointer"
            @click="itemClick(scope.row)"
            >{{ scope.row.username }}</span
          >
        </template>
      </el-table-column>

      <el-table-column label="用户类型" width="120" align="left">
        <template slot-scope="scope"
          ><span>{{ scope.row.type | getType }}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="telephone"
        label="电话号码"
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
        v-show="this.users.length > 0"
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
      title="用户注册"
      :visible.sync="addUserShow"
      center
      width="400px"
    >
      <el-form :rules="rules" label-position="left" :model="regForm">
        <el-form-item
          prop="account"
          label="用户名"
          :label-width="formLabelWidth"
        >
          <el-input v-model="regForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="checkPass"
          label="密码"
          :label-width="formLabelWidth"
        >
          <el-input
            type="password"
            v-model="regForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="checkPhone"
          label="电话号码"
          :label-width="formLabelWidth"
        >
          <el-input v-model="regForm.telephone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addUserShow = false">取 消</el-button>
        <el-button type="primary" @click="register">注册</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="编辑用户信息"
      :visible.sync="editUserShow"
      center
      width="400px"
    >
      <el-form :rules="rules" label-position="left" :model="editForm">
        <el-form-item
          prop="account"
          label="用户名"
          :label-width="formLabelWidth"
        >
          <el-input v-model="editForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="checkPass"
          label="密码"
          :label-width="formLabelWidth"
        >
          <el-input
            type="password"
            v-model="editForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="checkPhone"
          label="电话号码"
          :label-width="formLabelWidth"
        >
          <el-input v-model="editForm.telephone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="checkUserType"
          label="电话号码"
          :label-width="formLabelWidth"
        >
        <div></div>
          <div>
            <el-select v-model="editForm.type" placeholder="请选择用户类型">
              <el-option label="普通用户" :value="0"></el-option>
              <el-option label="管理员" :value="1"></el-option>
            </el-select>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editUserShow = false">取 消</el-button>
        <el-button type="primary" @click="confirmEdit">确认修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>




<script>
import { getRequest } from "../../utils/api";
import { putRequest } from "../../utils/api";
import { postRequest } from "../../utils/api";
export default {
  name: "ManageActivity",
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
      activities:[],
      users: [],
      currentPage: 1,
      totalCount: -1,
      pageSize: 10,
      keywords: "",
      type: "-1",
      state: "1",
      selItems: [],
      dustbinData: [],
      addUserShow: false,
      editUserShow: false,
      regForm: {
        username: " ",
        password: " ",
        telephone: " ",
      },
      editForm: {
        uId :'',
        username: "",
        password: "",
        telephone: "",
        type: 0,
      },
    };
  },

  mounted() {
    var _this = this;
    console.log("mouted");
    this.loadUsers(1, _this.pageSize);
  },

  methods: {
    currentChange(currentPage) {
      this.currentPage = currentPage;

      this.loadUsers(currentPage, this.pageSize);
    },

    loadUsers(page, count) {
      var _this = this;
      var url = "/listUser?page=" + page + "&count=" + count;

      console.log(url);
      getRequest(url).then((response) => {
        _this.users = response.data.data.records;
        _this.totalCount = response.data.data.total;
      });
    },
    handleSelectionChange(val) {
      this.selItems = val;
    },
    handleEdit(index, row) {
      this.editForm.uId = row.uid
      this.editForm.username = row.username;
      this.editForm.password = row.password;
      this.editForm.type = row.type;
      this.editForm.telephone = row.telephone;
      this.editUserShow = true;
    },
    handleDelete(index, row) {
      console.log(index);
      console.log(row);
      this.dustbinData.push(row.uid);
      console.log(this.dustbinData);
      var _this = this;
      postRequest("/deleteUser", {
        uIds: _this.dustbinData,
      }).then(
        (response) => {
          console.log(response.data.data);
          if (response.data.state == 200) {
            alert("删除成功");
            this.loadUsers(_this.currentPage, _this.pageSize);
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
        this.dustbinData.push(selItems[i].uid);
      }
      var _this = this;
      console.log(this.dustbinData);
      postRequest("/deleteUser", {
        uIds: _this.dustbinData,
      }).then(
        (response) => {
          console.log(response.data.data);
          if (response.data.state == 200) {
            alert("删除成功");
            _this.loadUsers(_this.currentPage, _this.pageSize);
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
      this.addUserShow = true;
    },
    register() {
      var _this = this;
      let data = {
        username: this.regForm.username,
        password: this.regForm.password,
        telephone: this.regForm.telephone,
      };

      console.log(data);

      postRequest("/register", data).then(
        (response) => {
          console.log(response.data.data);
          if (response.data.state == 200) {
            alert("添加成功");
            _this.addUserShow = false;
            _this.loadUsers(_this.currentPage, _this.pageSize);
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

    confirmEdit(){
      var _this = this

      console.log(this.editForm)

      postRequest('/amendProfile',_this.editForm).then(
        (response) => {
          if(response.data.state == 200){
              alert("修改成功")
              _this.loadUsers(_this.currentPage, _this.pageSize);
              _this.editUserShow = false
          }
          else{
            alert("修改失败")
          }
        },
        (error) => {
          console.log(error)
          alert("修改失败")
        }
      )


    }
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
