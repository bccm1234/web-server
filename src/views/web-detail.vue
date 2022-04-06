<template>
  <div>
    <iframe
      :src="JSmolURL"
      frameborder="0px"
      style="width: 420px; height: 420px"
      scorlling="no"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "web-detail",
  data() {
    return {
      JSmolURL: ""
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      var idNumber = window.location.hash;
      var id = idNumber.substring(12, idNumber.length);
      this.JSmolURL = "http://127.0.0.1:5500/public/detail.html?" + id;
    }
  }
};
</script>
<style>
iframe {
  position: absolute;
  top: 150px;
  left: 25px;
}
</style>
