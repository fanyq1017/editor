<template>
  <div>
    <el-container style="height: 100%">
      <el-header class="header">
        <header-show></header-show>
      </el-header>
      <el-main class="ma" style="padding:0px;">

        <router-view></router-view>

      </el-main>
      <el-footer class="foo">
        <footer-style></footer-style>
      </el-footer>
    </el-container>
  </div>
</template>


<script>
import HeaderShow from "./HeaderShow.vue";

import footerStyle from "./footerStyle.vue"
export default {
  name: "MainShow",
  components: { HeaderShow ,  footerStyle},
};
</script>


<style  scope>
.header {
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}

</style>
