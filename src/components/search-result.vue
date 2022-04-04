<template>
  <div v-show="visible">这是一个搜索结果。</div>
</template>

<script>
import axios from "axios";
export default {
  props: { visible: { type: String, require: true } },
  created() {
    axios.get("/index/element").then(function (response) {
      console.log(response);
    });
  }
};
</script>

<style lang="less" scoped></style>
