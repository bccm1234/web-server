<template>
  <div id="app">
    <header>
      <myWebHead></myWebHead>
    </header>
    <nav>
      <myWebNav></myWebNav>
    </nav>
    <main>
      <myWebMain></myWebMain>
    </main>
    <footer>
      <myWebFooter></myWebFooter>
    </footer>
  </div>
</template>
<script>
import myWebHead from "@/components/web-head.vue";
import myWebNav from "@/components/web-nav.vue";
import myWebMain from "@/components/web-main.vue";
import myWebFooter from "@/components/web-foot.vue";
export default {
  components: {
    myWebHead,
    myWebNav,
    myWebMain,
    myWebFooter
  }
};
</script>
<style lang="less">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(228, 230, 232);
}
</style>
