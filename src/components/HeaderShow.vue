<template>
  <div>
    <h1>这是首页</h1>
    <el-menu
      :default-active="2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="ClickMenu('首页')">首页</el-menu-item>

      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" @click="ClickMenu('信息动态')"
        >信息动态</el-menu-item
      >
      <el-menu-item index="4" @click="ClickMenu('编辑测试')"
        >编辑测试</el-menu-item
      >
    </el-menu>
  </div>
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

        case "编辑测试":
          this.$router.push({
            path: "/editor",
          });
          break;
        case "信息动态":
            console.log("点击信息动态")
          this.$router.push({
            path: "/message",
          });
          break;
      }
    },
  },
};
</script>


<style  scoped>
h1 {
  margin: 0;
  padding: 0;
}
.el-menu-demo {
  width: 100%;
}
</style>