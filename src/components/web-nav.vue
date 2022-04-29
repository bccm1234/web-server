<template>
  <div class="navBox">
    <el-row type="flex" justify="space-between">
      <el-col :span="6" class="left-col">CO2数据库</el-col>
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
.el-row {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 80px;
  z-index: 999;
  background-color: #003153;
}
.left-col {
  font-size: 42px;
  font-weight: 700;
  line-height: 80px;
  color: #fff8f8;
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
