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
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      active-text-color="#FF7356"
      background-color="#FFFFFF"
      >
      <el-submenu index="0">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">视频列表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="i" v-for="(p,i) in videos" :key="i">视频{{i+1}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,//是否水平折叠
        videos:[
          {},{},{},{},{},{},{},{}
        ]
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
  /*按钮字体悬浮颜色*/
  .el-radio-group .el-radio-button .el-radio-button__inner:hover{
    color:black;
  }
</style>
