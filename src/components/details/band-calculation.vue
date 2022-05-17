<template>
  <div>
    <div class="band">
      <ul>
        <li class="title">Band Structure</li>
        <li class="item">
          <span>Band Gap : </span>
          <span class="itemRight">
            <slot name="a"></slot>
            ev
          </span>
        </li>
      </ul>
      <slot name="bandCanvas"></slot>
    </div>
    <div class="density">
      <div class="title">Density Of States</div>
      <slot name="densityCanvas"></slot>
    </div>
    <div class="calculation-summer">
      <ul>
        <li class="title">Calculation Summar</li>
        <li class="item">
          <span class="itemLeft">Run Type :</span>
          <span class="itemRight">
            <slot name="a"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">U-values :</span>
          <span class="itemRight">
            <slot name="a"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">Energy Cutoff :</span>
          <span class="itemRight">
            <slot name="a"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">code :</span>
          <span class="itemRight">
            <slot name="a"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">Kpoint :</span>
          <span class="itemRight">
            <slot name="a"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">more details :</span>
          <span class="itemRight">
            <slot name="a"></slot>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "template-calucation"
};
</script>

<style lang="less" scoped>
.bandCanvas {
  width: 740px;
  height: 417px;
  margin-bottom: 10px;
}
.density {
  margin-top: 30px;
}
</style>
