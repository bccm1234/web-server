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
var id = 3;
export default {
  name: "web-detail",
  data() {
    return {
      JSmolURL: "file:///D:/Desktop/webdatabasev2/public/detail.html?" + id
    };
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
