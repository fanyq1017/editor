<template>
  <div>
    <el-form
      :rules="rules"
      class="login-container"
      label-position="left"
      label-width="0px"
    >
      <h3 class="login_title">系统登录</h3>
      <el-form-item prop="account">
        <el-input
          type="text"
          v-model="loginForm.username"
          auto-complete="off"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-checkbox
        class="login_remember"
        v-model="checked"
        label-position="left"
        >记住密码</el-checkbox
      >
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          @click.native.prevent="submitClick"
          style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          @click="dialogFormVisible = true"
          style="width: 100%"
          >注册</el-button
        >
      </el-form-item>
    </el-form>

    <el-dialog
      title="用户注册"
      :visible.sync="dialogFormVisible"
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="register">注册</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { postRequest } from "../utils/api";
import axios from "axios";
export default {
  data() {
    return {
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPhone: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
        ],
      },
      checked: true,
      loginForm: {
        username: "sang",
        password: "123",
      },
      loading: false,
      dialogFormVisible: false,

      regForm: {
        username: "",
        password: "",
        telephone: "",
      },
      formLabelWidth: "150px",
    };
  },
  methods: {
    submitClick: function () {
      var _this = this;

      postRequest("/login", {
        username: this.loginForm.username,
        password: this.loginForm.password,
      }).then(
        (response) => {
          if (response.data.state == 200) {
            console.log(response.data.data);
            let user = { uid: "", username: "", type: "" };
            user.uid = response.data.data.uid;
            console.log("登录成功");
            alert("登录成功");
            user.username = response.data.data.username;
            user.type = response.data.data.type;
            _this.$store.commit("setUser", user);

            if (user.type == "1" || user.type == "2") {
              _this.$router.push({ path: "/manage" });
            }

            if (user.type == "0") {
              _this.$router.push({ path: "/home" });
            }
          }
          console.log("123");
          console.log(response.data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    register() {
      let data = {
        username: this.regForm.username,
        password: this.regForm.password,
        telephone: this.regForm.telephone,
      };

      console.log(data);

      postRequest("/register", data).then(
        (response) => {
          console.log(response.data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>
<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.login_remember {
  margin: 0px 0px 35px 0px;
  text-align: left;
}
</style>
