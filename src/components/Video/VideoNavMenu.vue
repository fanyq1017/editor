<template>
  <div>
    <el-radio-group 
      v-model="isCollapse"
      text-color="#FFFFFF"
      style="margin-bottom: 20px;"
      fill="#FF7356"
      >
      <el-radio-button :label="false" >展开</el-radio-button>
      <el-radio-button :label="true" >收起</el-radio-button>
    </el-radio-group>
    <el-menu 
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      active-text-color="#FF7356"
      background-color="#FFFFFF"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">视频列表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">视频1</el-menu-item>
          <el-menu-item index="1-2">视频2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-radio-group .el-radio-button .el-radio-button__inner:hover{
    color:black;
  }
</style>
