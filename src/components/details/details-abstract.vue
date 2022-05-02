/* eslint-disable vue/no-dupe-keys */
<template>
  <div class="abstractBox rightItem" id="0">
    <div class="modelBox">
      <iframe :src="JSmolURL" scrolling="no" class="modelCanvas"></iframe>
      <span class="colorBox br-10" :style="{ backgroundColor: color1 }">{{
        infoObj.element1
      }}</span>
      <span class="colorBox br-10" :style="{ backgroundColor: color2 }">{{
        infoObj.element2
      }}</span>
      <span class="downloadBox br-10"
        ><i class="el-icon-download download"></i> DownLoad</span
      >
    </div>
    <div class="list">
      <ul class="abstractTable">
        <li class="abstractTitle">Abstract</li>
        <li class="abstractItem">
          <span class="abstractItemLeft">Crystal System:</span>
          <span class="abstractItemRight">{{ infoObj["crystal system"] }}</span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">Space Group:</span>
          <span class="abstractItemRight" v-html="spaceGroup"></span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">band Gap(Calutation):</span>
          <span class="abstractItemRight">{{ infoObj["band gap"] }}ev</span>
        </li>
        <li class="abstractTitle" style="margin-bottom: 0px">Lattice</li>
        <li class="abstractItem">
          <span class="abstractItemLeft">a:</span>
          <span class="abstractItemRight">{{ infoObj.a + " Å" }}</span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">b:</span>
          <span class="abstractItemRight">{{ infoObj.b + " Å" }}</span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">c:</span>
          <span class="abstractItemRight">{{ infoObj.c + " Å" }}</span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">α:</span>
          <span class="abstractItemRight">{{ infoObj.α + " °" }}</span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">β:</span>
          <span class="abstractItemRight">{{ infoObj.β + " °" }}</span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">γ:</span>
          <span class="abstractItemRight">{{ infoObj.γ + " °" }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "details-abstract",
  data() {
    return {};
  },
  props: {
    infoObj: Object,
    JSmolURL: String,
    color1: String,
    color2: String,
    spaceGroup: String
  }
};
</script>

<style lang="less" scoped>
//圆角
.br-10 {
  border-radius: 10px;
}
//字体加粗
.fw-600 {
  font-weight: 600;
}
.abstractBox {
  width: 860px;
  height: 550px;
  overflow: hidden;
}
.modelBox {
  position: absolute;
  width: 470px;
  height: 520px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  text-align: left;
  padding-left: 40px;
}
.modelCanvas {
  position: absolute;
  left: 40px;
  top: 40px;
  width: 395px;
  height: 395px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
}
.colorBox {
  display: inline-block;
  width: 45px;
  height: 45px;
  line-height: 50px;
  margin-top: 453px;
  text-align: center;
  margin-right: 3%;
  font-weight: 700;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.downloadBox {
  display: inline-block;
  width: 150px;
  height: 45px;
  line-height: 50px;
  margin-top: 453px;
  text-align: center;
  margin-left: 130px;
  font-weight: 700;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  background: #84b1ff;
  cursor: pointer;
}
.download {
  font-weight: 700;
}
.list {
  /* list */
  position: absolute;
  right: 0;
  width: 360px;
  height: 520px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.abstractTable {
  position: absolute;
  left: 35.53px;
  top: 19.74px;
  width: 285px;
  height: 480px;
  display: flex;
  flex-direction: column;
  padding: 0px;
}
.abstractTable > li {
  height: 40px;
  line-height: 50px;
}
.abstractTitle {
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 4px;
  margin: 8px 0;
}
.abstractItem {
  text-align: left;
}
.abstractItemLeft {
  display: inline-block;
  margin-right: 30px;
}
.abstractItemRight {
  color: blue;
}
</style>
