<template>
  <div id="3" class="totalBox rightModule">
    <div class="moduleTitle">Charge Density</div>
    <div class="body br-10">
      <div class="button">
        <span
          @click="
            comName = 'templateCalculation';
            changeColor(0);
          "
          class="bottonItemCharge bgc"
          >calculation</span
        >
      </div>
      <div class="mainBox">
        <component :is="comName"></component>
      </div>
    </div>
    <div class="bottomBox"></div>
  </div>
</template>

<script>
import templateCalculation from "./charge-calculation.vue";
import templateExperiment from "./charge-experiment.vue";
export default {
  name: "details-charge",
  data() {
    return {
      comName: "templateCalculation",
      chargeURL: ""
    };
  },
  components: {
    templateCalculation,
    templateExperiment
  }
};
</script>

<style lang="less" scoped>
//动态绑定样式
.bgc {
  background: #84b1ff;
}
//固定样式
.totalBox {
  margin-top: 30px;
}
.navName {
  width: 860px;
  height: 70px;
  font-size: 32px;
  font-weight: bold;
  line-height: 70px;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
  color: #3d3d3d;
}
.body {
  padding: 30px;
  text-align: left;
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.button {
  border-bottom: 3px solid rgba(0, 0, 0, 0.8);
}
.bottonItemCharge {
  display: inline-block;
  width: 150px;
  height: 40px;
  border-radius: 10px 10px 0px 0px;
  font-size: 18px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.mainBox {
  padding: 20px 30px 0;
}
.bottomBox {
  position: relative;
  width: 100%;
  height: 60px;
}
</style>
