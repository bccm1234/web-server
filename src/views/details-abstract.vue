<template>
  <div class="abstractBox rightItem" id="0">
    <div class="modelBox">
      <slot name="modelCanvas"></slot>
      <slot name="colorBox"></slot>
      <span class="downloadBox br-10"
        ><i class="el-icon-download download"></i> DownLoad</span
      >
    </div>
    <div class="list">
      <ul class="abstractTable">
        <li class="abstractTitle">Abstract</li>
        <li class="abstractItem">
          <span class="abstractItemLeft">Crystal System:</span>
          <span class="abstractItemRight"
            ><slot name="abstractItemRight1"></slot
          ></span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">Space Group:</span>
          <slot name="abstractItemRight2"></slot>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">band Gap(Calutation):</span>
          <span class="abstractItemRight"
            ><slot name="abstractItemRight3"></slot>ev</span
          >
        </li>
        <li class="abstractTitle" style="margin-bottom: 0px">Lattice</li>
        <li class="abstractItem">
          <span class="abstractItemLeft">a:</span>
          <span class="abstractItemRight"
            ><slot name="abstractItemRight4"></slot
          ></span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">b:</span>
          <span class="abstractItemRight"
            ><slot name="abstractItemRight5"></slot
          ></span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">c:</span>
          <span class="abstractItemRight"
            ><slot name="abstractItemRight6"></slot
          ></span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">α:</span>
          <span class="abstractItemRight"
            ><slot name="abstractItemRight7"></slot
          ></span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">β:</span>
          <span class="abstractItemRight"
            ><slot name="abstractItemRight8"></slot
          ></span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">γ:</span>
          <span class="abstractItemRight"
            ><slot name="abstractItemRight9"></slot
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "details-abstract",
  data() {
    return {
      JSmolURL: "",
      spaceGroup: "",
      color1: "",
      color2: ""
    };
  },
  props: {
    info: Object
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
  font-style: 22px;
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
