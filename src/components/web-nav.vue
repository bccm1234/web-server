<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :span="2"
        ><el-image :src="require('@/assets/logo.png')"
      /></el-col>
      <el-col :span="4" class="right-col"
        ><el-button type="text"
          ><el-link :underline="false" href="#/home">Home</el-link></el-button
        >
        <el-button type="text">
          <el-link :underline="false" href="#/login">Login</el-link>
        </el-button>
        <el-button type="text">
          <el-link :underline="false" href="#/detail">Detail</el-link>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
div {
  position: fixed;
  top: 40px;
  width: 100%;
  height: 80px;
  z-index: 999;
}
.el-row {
  background-color: rgb(26, 36, 47);
}
.el-image {
  float: left;
  left: 5%;
  height: 75px;
  width: 75px;
}
.right-col {
  display: flex;
  right: 0;
  width: 30%;
  justify-content: space-around;
}
.el-button {
  color: white;
  height: 100%;
  .el-link {
    color: white;
  }
}
</style>
