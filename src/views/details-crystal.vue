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
        <component :is="comName" :experiment="infoObj.experiment">
          <!-- calculation组件 -->
          <template #c-lattice-a>{{ infoObj.a }}</template>
          <template #c-lattice-α>{{ infoObj.α }}</template>
          <template #c-lattice-b>{{ infoObj.b }}</template>
          <template #c-lattice-β>{{ infoObj.β }}</template>
          <template #c-lattice-c>{{ infoObj.a }}</template>
          <template #c-lattice-γ>{{ infoObj.γ }}</template>
          <template #c-crystalSystem>{{ infoObj["crystal system"] }}</template>
          <template #c-spaceGroup
            ><span class="itemRight" v-html="spaceGroup"></span
          ></template>
          <template #c-runType>{{
            infoObj.runtype ? infoObj.a : "Not Found"
          }}</template>
          <template #c-Uvalues>{{
            infoObj.uvalue ? infoObj.value : "Not Found"
          }}</template>
          <template #c-energyCutoff>{{
            infoObj.energyCutoff ? infoObj.energyCutoff : "Not Found"
          }}</template>
          <template #c-code>{{
            infoObj.code ? infoObj.code : "Not Found"
          }}</template>
          <template #c-Kpoint>{{
            infoObj.Kpoint ? infoObj.Kpoint : "Not Found"
          }}</template>
          <template #c-moreDetails>{{
            infoObj.moreDetails ? infoObj.moreDetails : "Not Found"
          }}</template>
          <!-- experiment组件 -->
          <template #e-lattice-a>{{
            infoObj.experiment.a ? infoObj.experiment.a : "Not Found"
          }}</template>
          <template #e-lattice-α>{{
            infoObj.experiment.α ? infoObj.experiment.α : "Not Found"
          }}</template>
          <template #e-lattice-b>{{
            infoObj.experiment.b ? infoObj.experiment.b : "Not Found"
          }}</template>
          <template #e-lattice-β>{{
            infoObj.experiment.β ? infoObj.experiment.β : "Not Found"
          }}</template>
          <template #e-lattice-c>{{
            infoObj.experiment.c ? infoObj.experiment.c : "Not Found"
          }}</template>
          <template #e-lattice-γ>{{
            infoObj.experiment.γ ? infoObj.experiment.γ : "Not Found"
          }}</template>
          <template #e-crystalSystem>{{ infoObj["crystal system"] }}</template>
          <template #e-spaceGroup
            ><span class="itemRight" v-html="spaceGroup"></span
          ></template>
          <template #crystalDoi>
            <a :href="infoObj.experiment.doi" target="blank">{{
              infoObj.experiment.doi
            }}</a>
          </template>
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
  props: ["infoObj", "spaceGroup"],
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
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
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
