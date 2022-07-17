<template>
  <div class="ManageAside">
    <div>志愿服务后台管理</div>
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
      <el-submenu index="志愿活动管理">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>志愿活动管理</span>
        </template>
        <el-menu-item index="活动列表" @click="ClickMenu('活动列表')"
          >活动列表</el-menu-item
        >
        <el-menu-item index="发布活动" @click="ClickMenu('发布活动')"
          >发布活动</el-menu-item
        >
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
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
</style>
