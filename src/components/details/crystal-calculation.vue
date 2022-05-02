<template>
  <div>
    <div class="lattice">
      <ul>
        <li class="title">Lattice</li>
        <li class="item">
          <span class="itemLeft">a :</span>
          <span class="itemRight">
            {{ infoObj.a ? infoObj.a + " Å" : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">α :</span>
          <span class="itemRight">
            {{ infoObj.α ? infoObj.α + " °" : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">b :</span>
          <span class="itemRight">
            {{ infoObj.b ? infoObj.b + " Å" : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">β :</span>
          <span class="itemRight">
            {{ infoObj.β ? infoObj.β + " °" : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">c :</span>
          <span class="itemRight">
            {{ infoObj.c ? infoObj.c + " Å" : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">γ :</span>
          <span class="itemRight">
            {{ infoObj.γ ? infoObj.γ + " °" : "Not Found" }}
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
            {{
              infoObj["crystal system"]
                ? infoObj["crystal system"]
                : "Not Found"
            }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">Space Group :</span>
          <span
            class="itemRight"
            v-html="spaceGroup"
            v-show="spaceGroup"
          ></span>
          <span class="itemRight" v-show="!spaceGroup">Not Found</span>
        </li>
      </ul>
    </div>
    <div class="calculation-summer">
      <ul>
        <li class="title">Calculation Summary</li>
        <li class="item">
          <span class="itemLeft">Run Type :</span>
          <span class="itemRight">
            {{ infoObj.runtype ? infoObj.runtype : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">U-values :</span>
          <span class="itemRight">
            {{ infoObj.uvalue ? infoObj.uvalue : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">Energy Cutoff :</span>
          <span class="itemRight">
            {{ infoObj.energyCutoff ? infoObj.energyCutoff : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">code :</span>
          <span class="itemRight">
            {{ infoObj.code ? infoObj.code : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">Kpoint :</span>
          <span class="itemRight">
            {{ infoObj.Kpoint ? infoObj.Kpoint : "Not Found" }}
          </span>
        </li>
        <li class="item">
          <span class="itemLeft">more details :</span>
          <span class="itemRight">
            {{ infoObj.moreDetails ? infoObj.code : "Not Found" }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "template-calucation",
  data() {
    return {
      infoObj: {},
      spaceGroup: ""
    };
  }
};
</script>

<style lang="less" scoped>
.symmetry {
  margin: 20px 0;
}
</style>
