<template>
  <div class="ManageAside">
    <div class="manage">后台管理</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="咨询管理">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>资讯管理</span>
        </template>
        <el-menu-item index="资讯列表" @click="ClickMenu('资讯列表')"
          >资讯列表</el-menu-item
        >
        <el-menu-item index="发布资讯" @click="ClickMenu('发布资讯')"
          >发布资讯</el-menu-item
        >
      </el-submenu>

      <el-menu-item index="志愿活动管理" @click="ClickMenu('志愿活动管理')">
        <i class="el-icon-menu"></i>
        <span slot="title">志愿活动管理</span>
      </el-menu-item>
      <el-menu-item index="用户管理" @click="ClickMenu('用户管理')">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>




<script>
export default {
  name: "ManageAside",

  methods: {
    ClickMenu(index) {
      console.log(index);

      switch (index) {
        case "发布资讯":
          this.$router.push({ path: "/manage/postarticle" });
          break;

        case "资讯列表":
          this.$router.push({ path: "/manage/articletable" });
          break;

        case "活动列表":
          this.$router.push({ path: "/manage/articlelist" });
          break;

        case "发布活动":
          this.$router.push({ path: "/manage/postactivity" });
          break;

        case "用户管理":
          this.$router.push({ path: "/manage/manageuser" });
          break;
        case "志愿活动管理":
          this.$router.push({ path: "/manage/manageactivity" });
          break;
      }
    },
  },
};
</script>



<style>
h3 {
  margin: 0;
  padding: 0;
}

.ManageAside {
  margin: 0;
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}
.manage{
  font-weight: 600;
  font-size: larger;
  line-height: 100px;
  color: #FFF;
}
</style>
