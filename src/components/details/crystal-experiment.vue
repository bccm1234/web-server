<template>
  <div>
    <div v-if="infoObj.experiment">
      <div class="lattice">
        <ul>
          <li class="title">Lattice</li>
          <li class="item">
            <span class="itemLeft">a :</span>
            <span class="itemRight">
              {{ infoObj.a ? infoObj.a : "Not Found" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">α :</span>
            <span class="itemRight">
              {{ infoObj.α ? infoObj.α : "Not Found" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">b :</span>
            <span class="itemRight">
              {{ infoObj.b ? infoObj.b : "Not Found" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">β :</span>
            <span class="itemRight">
              {{ infoObj.β ? infoObj.β : "Not Found" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">c :</span>
            <span class="itemRight">
              {{ infoObj.c ? infoObj.c : "Not Found" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">γ :</span>
            <span class="itemRight">
              {{ infoObj.γ ? infoObj.γ : "Not Found" }}
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
      <div class="article">
        <ul>
          <li class="title">Article</li>
          <li class="item doiBox">
            <span style="margin-right: 10px">Doi :</span>
            <span>
              <a :href="infoObj.experiment.doi" target="blank">{{
                infoObj.experiment.doi
              }}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="!infoObj.experiment">
      <span class="chargeExperiment">Not Found</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "template-experiment",
  props: ["infoObj"],
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
.chargeExperiment {
  font-size: 24px;
  font-weight: 700;
}
</style>
