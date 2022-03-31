<template>
  <div>
    <hr />
    <ul class="foot">
      <li>Home</li>
      <li>About</li>
      <li>Apps</li>
      <li>Documents</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
div .foot {
  margin: 0 auto;
  width: 700px;
  display: flex;
  justify-content: space-around;
  li {
    display: inline-block;
  }
}
</style>
