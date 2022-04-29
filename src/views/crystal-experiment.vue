<template>
  <div>
    <div v-show="false">
      <div class="lattice">
        <ul>
          <li class="title">Lattice</li>
          <li class="item">
            <span class="itemLeft">a :</span>
            <span class="itemRight">
              <slot name="a"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">b :</span>
            <span class="itemRight">
              <slot name="a"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">a :</span>
            <span class="itemRight">
              <slot name="a"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">α :</span>
            <span class="itemRight">
              <slot name="a"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">β :</span>
            <span class="itemRight">
              <slot name="a"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">γ :</span>
            <span class="itemRight">
              <slot name="a"></slot>
            </span>
          </li>
        </ul>
      </div>
      <div class="symmetry">
        <ul>
          <li class="title">Symmetry</li>
          <li class="item">
            <span class="itemLeft">Crystal System :</span>
            <span class="itemRight">
              <slot name="a"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Space Group :</span>
            <span class="itemRight">
              <slot name="a"></slot>
            </span>
          </li>
        </ul>
      </div>
      <div class="article">
        <ul>
          <li class="title">Article</li>
          <li class="item doiBox">
            <span style="margin-right: 10px">Doi :</span>
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
    <div v-show="true">
      <span class="chargeExperiment">Not Found</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "template-experiment"
};
</script>

<style lang="less" scoped>
.symmetry {
  margin: 30px 0;
}
.itemLeft {
  display: inline-block;
  width: 185px;
}
.itemRight {
  color: blue;
}
.doiBox {
  width: 740px;
}
.chargeExperiment {
  font-size: 24px;
  font-weight: 700;
}
</style>
