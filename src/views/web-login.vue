<template>
  <div class="total">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <div></div>
    </el-menu>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <button @click="changeState()">展开</button>
    </el-radio-group>
  </div>
</template>
<script>
export default {
  name: "myWebLogin",
  data() {
    return {};
  }
};
</script>
<style></style>
<script>
export default {
  name: "MyNav",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    changeState() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped>
.total {
  margin-top: 10px;
  width: 100%;
  height: 400px;
  background-color: pink;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  float: left;
  width: 200px;
  min-height: 200px;
}
.el-menu--collapse {
  float: left;
  width: 200px;
  height: 50px;
  background-color: #fff !important;
}
.el-radio-group {
  float: left;
  top: 180px;
  z-index: 999;
}
</style>
