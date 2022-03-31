<template>
  <head>
    <myWebHead></myWebHead>
  </head>
  <nav>
    <myWebNav></myWebNav>
  </nav>
  <main>
    <myWebMain></myWebMain>
  </main>
  <footer>
    <myWebFooter></myWebFooter>
  </footer>
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
    myWebFooter,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
