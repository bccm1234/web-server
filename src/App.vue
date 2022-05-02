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
}
* {
  list-style: none;
  font-family: PHTR;
}
.br-10 {
  border-radius: 10px;
}
</style>
