<template>
  <div>
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
.symmetry {
  margin: 20px 0;
}
.itemLeft {
  display: inline-block;
  width: 185px;
}
.itemRight {
  color: blue;
}
</style>
