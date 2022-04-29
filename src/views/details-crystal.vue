<template>
  <div id="1" class="totalBox rightItem">
    <div class="title">Crystal Strusture</div>
    <div class="body br-10">
      <div class="button">
        <span
          @click="
            comName = 'templateCalculation';
            changeColor(0);
          "
          class="bottonItemCrystal bgc"
          >calculation</span
        >
        <span
          @click="
            comName = 'templateExperiment';
            changeColor(1);
          "
          class="bottonItemCrystal"
          >experiment</span
        >
      </div>
      <div class="mainBox">
        <component :is="comName">
          <template #a>1</template>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import templateCalculation from "./crystal-calculation.vue";
import templateExperiment from "./crystal-experiment.vue";
export default {
  name: "template",
  data() {
    return {
      comName: "templateCalculation"
    };
  },
  components: {
    templateCalculation,
    templateExperiment
  },
  methods: {
    changeColor(id) {
      const buttons = document.getElementsByClassName("bottonItemCrystal");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = "bottonItemCrystal";
      }
      buttons[id].classList.add("bgc");
    }
  }
};
</script>

<style lang="less" scoped>
//动态绑定样式
.bgc {
  background: #84b1ff;
}
//固定样式
.title {
  width: 860px;
  height: 70px;
  font-size: 32px;
  font-weight: bold;
  line-height: 70px;
  letter-spacing: 0px;
  color: #3d3d3d;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
}
.body {
  background-color: #fff;
  padding: 30px;
  text-align: left;
}
.button {
  border-bottom: 3px solid rgba(0, 0, 0, 0.8);
}
.bottonItemCrystal {
  display: inline-block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px 10px 0px 0px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}
.mainBox {
  padding: 20px 20px 0;
}
</style>
