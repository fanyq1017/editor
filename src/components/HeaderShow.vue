<template xmlns:el-col="http://www.w3.org/1999/html">
  <el-row class="topbar">
    <el-col :span="10">
      <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#ffffff"
          text-color="#000000"
          active-text-color="#f6a598"
      >
        <el-menu-item><img src="../assets/logo.jpg" class="user-img"/></el-menu-item>
        <el-menu-item ><span style="font-size: 20px;font-weight: 500">志 愿 者 服 务 系 统</span></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="12">
      <el-menu
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#ffffff"
        text-color="#000000"
        active-text-color="#f6a598"
      >
        <el-menu-item index="1" @click="ClickMenu('首页')">首页</el-menu-item>

        <el-menu-item index="2" @click="ClickMenu('志愿活动')"
          >志愿活动</el-menu-item
        >
        <el-menu-item index="3" @click="ClickMenu('信息动态')"
          >信息动态</el-menu-item
        >
        <el-menu-item index="4" @click="ClickMenu('志愿风采')"
          >志愿风采</el-menu-item
        >
        <el-menu-item index="5" @click="ClickMenu('雷锋热线')"
        >雷锋热线</el-menu-item
        >
      </el-menu>
    </el-col>
    <el-col :span ="2">
      <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#ffffff"
          text-color="#000000"
          active-text-color="#f6a598"
      >
      <el-menu-item type="info" @click="ClickMenu('登录')">登录 / 注册</el-menu-item>
    </el-menu>
    </el-col>
  </el-row>
</template>



<script>
export default {
  name: "HeaderShow",
  data() {
    return { activeIndex: "1", activeIndex2: "1" };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    ClickMenu(index) {
      console.log(index);

      switch (index) {
        case "首页":
          this.$router.push({
            path: "/home",
            query: { id: 123 },
          });
          break;
        case "志愿活动":
          this.$router.push({
            path: "/activity",
          });
          break;
        case "编辑测试":
          this.$router.push({
            path: "/editor",
          });
          break;
        case "登录":
          this.$router.push({
            path: "/login",
          });
          break;
        case "信息动态":
            console.log("点击信息动态")
          this.$router.push({
            path: "/message",
          });
          break;
        case "志愿风采":
            console.log("点击信息动态")
          this.$router.push({
            path: "/elegant",
          });
          break;
        case "雷锋热线":
          console.log("点击信息动态")
          this.$router.push({
            path: "/wehelp",
          });
          break;
      }
    },
  },
};
</script>


<style  scoped>

.topbar{
  position:fixed;
  width:100%;
  z-index:10;
}
.el-menu-demo {
  width: 100%;
}
.contact-info{
  padding:60px 0;
}
.user-img {
  height: 61px;
  cursor: pointer;
}
</style>
