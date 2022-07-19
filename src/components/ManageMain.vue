<template>
  
    <el-container  style="height : 100%">
      <el-aside width="auto">

        <manage-aside> </manage-aside>


      </el-aside>
      <el-container>
        <el-header>
          <manage-header></manage-header>
        </el-header>
        <el-main>
          <router-view> </router-view>

        </el-main>
      </el-container>
    </el-container>
  
</template>



<script>
import ManageAside from './ManageAside.vue'
import ManageHeader from './ManageHeader'

export default {
  name: "ManageMain",
  components: {ManageAside, ManageHeader}
};
</script>







<style>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  

  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>