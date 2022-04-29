<template>
  <div id="2" class="totalBox rightItem">
    <div class="navName">Band Structure & Dos</div>
    <div class="body br-10">
      <div class="button">
        <span
          @click="
            comName = 'templateCalculation';
            changeColor(0);
          "
          class="bottonItemBand bgc"
          >calculation</span
        >
        <span
          @click="
            comName = 'templateExperiment';
            changeColor(1);
          "
          class="bottonItemBand"
          >experiment</span
        >
      </div>
      <div class="mainBox">
        <component :is="comName">
          <template #a>2</template>
          <template #bandCanvas>
            <iframe src="" scrolling="no" class="bandCanvas"></iframe>
          </template>
          <template #densityCanvas>
            <iframe src="" scrolling="no" class="bandCanvas"></iframe>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import templateCalculation from "./band-calculation.vue";
import templateExperiment from "./band-experiment.vue";
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
      const buttons = document.getElementsByClassName("bottonItemBand");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = "bottonItemBand";
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
.totalBox {
  margin-top: 30px;
}
.navName {
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
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.button {
  border-bottom: 3px solid rgba(0, 0, 0, 0.8);
}
.bottonItemBand {
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
