<template>
  <div>
    <div v-if="experiment">
      <div class="lattice">
        <ul>
          <li class="title">Lattice</li>
          <li class="item">
            <span class="itemLeft">a :</span>
            <span class="itemRight">
              <slot name="e-lattice-a"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">α :</span>
            <span class="itemRight">
              <slot name="e-lattice-α"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">b :</span>
            <span class="itemRight">
              <slot name="e-lattice-b"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">β :</span>
            <span class="itemRight">
              <slot name="e-lattice-β"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">c :</span>
            <span class="itemRight">
              <slot name="e-lattice-c"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">γ :</span>
            <span class="itemRight">
              <slot name="e-lattice-γ"></slot>
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
              <slot name="e-crystalSystem"></slot>
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Space Group :</span>
            <span class="itemRight">
              <slot name="e-spaceGroup"></slot>
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
              <slot name="crystalDoi"></slot>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="!experiment">
      <span class="chargeExperiment">Not Found</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "template-experiment",
  props: ["experiment"],
  data() {
    return {
      state: false
    };
  }
};
</script>

<style lang="less" scoped>
.symmetry {
  margin: 20px 0;
}
.itemLeft {
  display: inline-block;
  width: 160px;
}
.itemRight {
  color: #551a8b;
}
.doiBox {
  width: 740px;
}
.chargeExperiment {
  font-size: 24px;
  font-weight: 700;
}
</style>
