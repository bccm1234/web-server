<template>
  <div>
    <div v-if="crystalExp.lattice">
      <div class="lattice">
        <ul>
          <li class="title">Lattice</li>
          <li class="item">
            <span class="itemLeft">a :</span>
            <span class="itemRight">
              {{ crystalExp.lattice[0] + " Å" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">α :</span>
            <span class="itemRight">
              {{ crystalExp.lattice[3] + " °" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">b :</span>
            <span class="itemRight">
              {{ crystalExp.lattice[1] + " Å" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">β :</span>
            <span class="itemRight">
              {{ crystalExp.lattice[4] + " °" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">c :</span>
            <span class="itemRight">
              {{ crystalExp.lattice[2] + " Å" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">γ :</span>
            <span class="itemRight">
              {{ crystalExp.lattice[5] + " °" }}
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
              {{ assessData(crystalExp.crystalsystem) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Space Group :</span>
            <span
              class="itemRight"
              v-html="crystalExp.spacegroup"
              v-show="crystalExp.spacegroup"
            ></span>
            <span class="itemRight" v-show="!crystalExp.spacegroup"
              >Not Found</span
            >
          </li>
        </ul>
      </div>
      <div class="article">
        <ul>
          <li class="title">Article</li>
          <li class="item doiBox">
            <span style="margin-right: 10px">Doi :</span>
            <span>
              <a :href="crystalExp.doi" target="blank" class="doiLink">{{
                assessData(crystalExp.doi)
              }}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="!crystalExp">
      <span class="chargeExperiment">Not Found</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "crystal-experiment",
  props: ["infoObj"],
  data() {
    return {
      state: false,
      crystalExp: {}
    };
  },
  mounted() {
    this.crystalExpInfo();
    console.log("exp");
  },
  watch: {
    "$store.getters.allInfo"() {
      this.crystalExpInfo();
    }
  },
  methods: {
    crystalExpInfo() {
      this.crystalExp = Object.assign(
        {},
        this.$store.getters.allInfo["crystal-strusture"].exp
      );
      console.log("crystalexp", this.crystalExp);
      if (this.crystalExp.spacegroup.length < 10) {
        this.crystalExp.spacegroup = this.tranStr(
          1,
          this.$store.getters.allInfo["crystal-strusture"].exp.spacegroup
        );
      }
    }
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
.article .doiBox {
  width: 700px;
}
.doiLink {
  text-decoration: none;
  color: #000;
}
</style>
