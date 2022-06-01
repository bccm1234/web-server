<template>
  <div id="app">
    <nav>
      <myWebNav></myWebNav>
    </nav>
    <main>
      <keep-alive exclude="web-detail">
        <router-view></router-view>
      </keep-alive>
    </main>
    <footer>
      <myWebFooter></myWebFooter>
    </footer>
    <canvas class="qqq"></canvas>
  </div>
</template>
<script>
import myWebNav from "@/components/web/web-nav.vue";
import myWebFooter from "@/components/web/web-foot.vue";
export default {
  components: {
    myWebNav,
    myWebFooter
  }
};
</script>
<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 80px;
  -moz-user-select: none; //火狐
  -webkit-user-select: none; //webkit浏览器
  -ms-user-select: none; //IE10
  -khtml-user-select: none; //早期浏览器
  user-select: none;
}

* {
  list-style: none;
  // font-family: "PHTB";
}
</style>
