<template>
  <div>
    <div class="title">Band Gap :</div>
    <div class="articleBox">
      <ul>
        <li class="title">Article</li>
        <li class="item doiBox">
          <span>Doi :</span>
          <span>
            <slot name="crystalDoi">
              <a
                href="https://doi.org/10.1016/S0925-8388(97)00142-4"
                target="blank"
              >
                https://doi.org/10.1016/S0925-8388(97)00142-4
              </a></slot
            >
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "template-experiment"
};
</script>

<style lang="less" scoped>
.articleBox {
  margin-top: 10px;
}
.doiBox {
  width: 740px;
}
</style>
