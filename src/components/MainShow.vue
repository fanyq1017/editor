<template>
  <div>
    <el-container style="height: 100%">
      <el-header class="header">
        <header-show></header-show>
      </el-header>
      <el-main class="ma">
        
        <router-view></router-view>
    
      </el-main>
      <el-footer class="foo">
        <login-page></login-page>
      </el-footer>
    </el-container>
  </div>
</template>


<script>
import HeaderShow from "./HeaderShow.vue";

import loginPage from "./footerStyle.vue"
export default {
  name: "MainShow",
  components: { HeaderShow ,  loginPage},
};
</script>


<style  scope>
.header {
  background-color: orangered;
  margin: 0;
  padding: 0;
}

</style>