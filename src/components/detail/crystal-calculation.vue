<template>
  <div>
    <div v-if="crystalCal.lattice">
      <!-- lattice部分 -->
      <div>
        <ul>
          <li class="title">Lattice</li>
          <li class="item">
            <span class="itemLeft">a :</span>
            <span class="itemRight">
              {{ crystalCal.lattice[0] + " Å" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">α :</span>
            <span class="itemRight">
              {{ crystalCal.lattice[3] + " °" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">b :</span>
            <span class="itemRight">
              {{ crystalCal.lattice[1] + " Å" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">β :</span>
            <span class="itemRight">
              {{ crystalCal.lattice[4] + " °" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">c :</span>
            <span class="itemRight">
              {{ crystalCal.lattice[2] + " Å" }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">γ :</span>
            <span class="itemRight">
              {{ crystalCal.lattice[5] + " °" }}
            </span>
          </li>
        </ul>
      </div>
      <!-- symmetry部分 -->
      <div class="symmetry">
        <ul>
          <li class="title">Symmetry</li>
          <li class="item">
            <span class="itemLeft">Crystal System :</span>
            <span class="itemRight">
              {{ this.assessData(crystalCal.crystalsystem) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Space Group :</span>
            <span
              class="itemRight"
              v-html="this.crystalCal.spacegroup"
              v-show="this.crystalCal.spacegroup"
            ></span>
            <span class="itemRight" v-show="!this.crystalCal.spacegroup"
              >Not Found</span
            >
          </li>
        </ul>
      </div>
      <!-- calculation-summary部分 -->
      <div>
        <ul>
          <li class="title">Calculation Summary</li>
          <li class="item">
            <span class="itemLeft">Run Type :</span>
            <span class="itemRight">
              {{ this.assessData(crystalCal.summary.runtype) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">U-values :</span>
            <span class="itemRight">
              {{ this.assessData(crystalCal.summary.u) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Energy Cutoff :</span>
            <span class="itemRight">
              {{ this.assessData(crystalCal.summary.encut, " ev") }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">code :</span>
            <span class="itemRight">
              {{ this.assessData(crystalCal.summary.code) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Kpoint :</span>
            <span class="itemRight">
              {{ this.assessData(crystalCal.summary.kpoint) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">more details :</span>
            <span class="itemRight">
              {{ this.assessData(crystalCal.summary.details) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!crystalCal.lattice" class="notFound">Not Found</div>
  </div>
</template>

<script>
export default {
  name: "crystal-calucation",
  data() {
    return {
      crystalCal: {}
    };
  },
  watch: {
    //监听vuex getters中的数据变化
    "$store.getters.allInfo"() {
      this.crystalCalInfo();
    }
  },
  methods: {
    //获取数据并处理
    crystalCalInfo() {
      this.crystalCal = this.$store.getters.allInfo["crystal-strusture"].cal;
      if (this.crystalCal.spacegroup.length < 10) {
        this.crystalCal.spacegroup = this.tranStr(
          1,
          this.$store.getters.allInfo["crystal-strusture"].cal.spacegroup
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
</style>
