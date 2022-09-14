<template>
  <div>
    <div v-if="bandCal.bandgap">
      <!-- band部分 -->
      <div>
        <ul>
          <li class="title">Band Structure</li>
          <li class="item">
            <span>Band Gap : </span>
            <span class="itemRight">
              {{ this.assessData(bandCal.bandgap, " ev") }}
            </span>
          </li>
        </ul>
        <dosPicture></dosPicture>
      </div>
      <!-- density部分 -->
      <div class="density">
        <div class="title">Density Of States</div>
        <elePicture></elePicture>
      </div>
      <!-- Calculation Summary部分 -->
      <div>
        <ul>
          <li class="title">Calculation Summary</li>
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
import dosPicture from "./dos-picture.vue";
import elePicture from "./ele-picture.vue";
export default {
  components: { dosPicture, elePicture },
  name: "band-calucation",
  data() {
    return {
      bandCal: {}
    };
  },
  watch: {
    //监听数据变化，调用函数
    "$store.getters.allInfo"() {
      this.bandCalInfo();
    }
  },
  methods: {
    //从vuex中获取数据
    bandCalInfo() {
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
