<template>
  <div>
    <el-row type="flex" justify="space-between">
      <el-col :span="2"
        ><el-image :src="require('@/assets/logo.png')"
      /></el-col>
      <el-col :span="4" class="right-col"
        ><el-button type="text"
          ><el-link :underline="false" href="/">Home</el-link></el-button
        >
        <el-button type="text">Login</el-button>
        <el-button type="text">Signup</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-row {
  background-color: rgb(26, 36, 47);
}
.el-image {
  height: 75px;
}
.right-col {
  display: flex;
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
