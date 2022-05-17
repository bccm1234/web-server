<template>
  <div id="app">
    <!-- <header>
      <myWebHead></myWebHead>
    </header> -->
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
// import myWebHead from "@/components/web-head.vue";
import myWebNav from "@/components/web-nav.vue";
import myWebFooter from "@/components/web-foot.vue";
export default {
  components: {
    // myWebHead,
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
  font-family: "PHTB";
}
</style>
