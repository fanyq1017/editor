<template>
  <div class="r-content">
    <el-dropdown trigger="click">
      <span><img class="user" :src="userImg" /></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click="edit">修改个人资料</el-dropdown-item>
        <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: "ManageHeader",
  data() {
    return {
      userImg: require("../assets/user.jpg"),
    };
  },
  methods: {
    edit(){

    },
    logOut() {
        this.$store.commit('clearUser')
        this.$router.push({path:'/login'})


    },
  },
};
</script>

<style  scoped>
.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>