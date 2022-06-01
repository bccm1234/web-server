<template>
  <div>
    <div v-if="bandCal.bandgap">
      <div class="band">
        <ul>
          <li class="title">Band Structure</li>
          <li class="item">
            <span>Band Gap : </span>
            <span class="itemRight">
              {{ this.assessData(bandCal.bandgap, " ev") }}
            </span>
          </li>
        </ul>
        <bandPicture></bandPicture>
      </div>
      <div class="density">
        <div class="title">Density Of States</div>
        <dosPicture></dosPicture>
      </div>
      <div class="calculation-summer">
        <ul>
          <li class="title">Calculation Summar</li>
          <li class="item">
            <span class="itemLeft">Run Type :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.runtype) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">U-values :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.u) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Energy Cutoff :</span>
            <span class="itemRight">
              {{ assessData(bandCal.summary.encut) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">code :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.code) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Kpoint :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.kpoint) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">more details :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.details) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!bandCal.bandgap" class="notFound">Not Found</div>
  </div>
</template>

<script>
import bandPicture from "./band-picture.vue";
import dosPicture from "./dos-picture.vue";
export default {
  components: { bandPicture, dosPicture },
  name: "band-calucation",
  data() {
    return {
      bandCal: {}
    };
  },
  watch: {
    "$store.getters.allInfo"() {
      this.dealInfo();
    }
  },
  methods: {
    dealInfo() {
      this.bandCal = this.$store.getters.allInfo["band-dos"].cal;
    }
  }
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
