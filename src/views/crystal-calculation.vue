<template>
  <div>
    <div class="lattice">
      <ul>
        <li class="title">Lattice</li>
        <li class="item">
          <span class="itemLeft">a :</span>
          <span class="itemRight">
            <slot name="c-lattice-a"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">α :</span>
          <span class="itemRight">
            <slot name="c-lattice-α"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">b :</span>
          <span class="itemRight">
            <slot name="c-lattice-b"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">β :</span>
          <span class="itemRight">
            <slot name="c-lattice-β"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">c :</span>
          <span class="itemRight">
            <slot name="c-lattice-c"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">γ :</span>
          <span class="itemRight">
            <slot name="c-lattice-γ"></slot>
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
            <slot name="c-crystalSystem"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">Space Group :</span>
          <slot name="c-spaceGroup"></slot>
        </li>
      </ul>
    </div>
    <div class="calculation-summer">
      <ul>
        <li class="title">Calculation Summary</li>
        <li class="item">
          <span class="itemLeft">Run Type :</span>
          <span class="itemRight">
            <slot name="c-runType"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">U-values :</span>
          <span class="itemRight">
            <slot name="c-Uvalues"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">Energy Cutoff :</span>
          <span class="itemRight">
            <slot name="c-energyCutoff"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">code :</span>
          <span class="itemRight">
            <slot name="c-code"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">Kpoint :</span>
          <span class="itemRight">
            <slot name="c-Kpoint"></slot>
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">more details :</span>
          <span class="itemRight">
            <slot name="c-moreDetails"></slot>
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
</style>
