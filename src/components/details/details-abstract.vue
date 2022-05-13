/* eslint-disable vue/no-dupe-keys */
<template>
  <div class="abstractBox PHTM rightItem" id="0">
    <div class="modelBox">
      <div class="supercellBox">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <form action="" v-show="!isCollapse" ref="chemForm">
            <div class="setTitle">SETTING</div>
            <div class="nextTitle">Supercell</div>
            <div style="width: 200px">
              <span class="inputLeft">X</span>
              <input
                class="inputRight"
                type="text"
                placeholder="eg:2"
                id="input1"
                autocomplete="off"
                @propertychange="checkNumX()"
                @input="checkNumX()"
                @keypress="checkNumX()"
              />
            </div>
            <div style="width: 200px">
              <span class="inputLeft">Y</span>
              <input
                class="inputRight"
                type="text"
                placeholder="eg:2"
                id="input2"
                autocomplete="off"
                @propertychange="checkNumY()"
                @input="checkNumY()"
                @keypress="checkNumY()"
              />
            </div>
            <div style="width: 200px">
              <span class="inputLeft">Z</span>
              <input
                class="inputRight"
                type="text"
                placeholder="eg:2"
                id="input3"
                autocomplete="off"
                @propertychange="checkNumZ()"
                @input="checkNumZ()"
                @keypress="checkNumZ()"
              />
            </div>
            <div style="width: 230px">
              <button
                class="settingButton"
                @click="sentToChemIframe()"
                type="button"
              >
                Go!
              </button>
              <button
                class="settingButton"
                @click="resetSupecell()"
                type="button"
              >
                Clean
              </button>
              <button
                class="settingButton"
                @click="refreshSupecell()"
                style="margin-left: 0"
                type="button"
              >
                Refresh
              </button>
            </div>
          </form>
        </el-menu>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <div class="setButton el-icon-setting" @click="changeState()"></div>
        </el-radio-group>
      </div>
      <iframe
        :src="crystalURL"
        scrolling="no"
        class="modelCanvas"
        id="chemIframe"
      ></iframe>
      <span class="colorBox br-10 PHTB" :style="{ backgroundColor: color1 }">{{
        infoObj.element1
      }}</span>
      <span class="colorBox br-10 PHTB" :style="{ backgroundColor: color2 }">{{
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
  props: {
    infoObj: Object,
    crystalURL: String,
    color1: String,
    color2: String,
    spaceGroup: String,
    hashNum: Number
  },
  data() {
    return {
      //默认扩胞侧边栏关闭
      isCollapse: true
    };
  },
  methods: {
    //设置扩胞侧边栏开关
    changeState() {
      this.isCollapse = !this.isCollapse;
    },
    sentToChemIframe() {
      let iFrame1 = document.getElementById("chemIframe");
      //有输入值，传值，没有输入值，传默认值[2,2,2]
      let x = document.getElementById("input1").value
        ? document.getElementById("input1").value - 0
        : 2;
      let y = document.getElementById("input2").value
        ? document.getElementById("input2").value - 0
        : 2;
      let z = document.getElementById("input3").value
        ? document.getElementById("input3").value - 0
        : 2;
      let xyz = [x, y, z];
      //发送消息到指chemdoodle页面
      iFrame1.contentWindow.postMessage(xyz, this.crystalURL);
    },
    resetSupecell() {
      this.$refs.chemForm.reset();
    },
    refreshSupecell() {
      this.resetSupecell();
      let iFrame1 = document.getElementById("chemIframe");
      iFrame1.contentWindow.postMessage("refresh", this.crystalURL);
    },
    //限制输入框0-5之内
    checkNum(value) {
      let num = "" + value;
      // console.log(value);
      num = num.replace(/[^0-9]/g, "");
      // console.log(num);
      if (num === "0") {
        num = 1;
      }
      if (num >= 5) {
        num = 5;
      }
      value = num;
      return value;
    },
    checkNumX() {
      let value = document.getElementById("input1").value;
      value = this.checkNum(value);
      document.getElementById("input1").value = value;
    },
    checkNumY() {
      let value = document.getElementById("input2").value;
      value = this.checkNum(value);
      document.getElementById("input2").value = value;
    },
    checkNumZ() {
      let value = document.getElementById("input3").value;
      value = this.checkNum(value);
      document.getElementById("input3").value = value;
    }
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
  padding: 25px;
}
.supercellBox {
  position: absolute;
  left: 25px;
  top: 25px;
  width: 0;
  z-index: 1;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  float: left;
  width: 260px;
  height: 420px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  border: 2px solid #cdd3dc;
  backdrop-filter: blur(2px);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 30px 15px;
}
.el-menu {
  border: none;
}
.el-menu--collapse {
  float: left;
  width: 0;
  height: 420px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6) !important;
  box-sizing: border-box;
  backdrop-filter: blur(2px);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.setTitle {
  height: 40px;
  font-size: 28px;
  line-height: 40px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #ffffff;
  text-align: center;
}
.nextTitle {
  height: 30px;
  font-size: 22px;
  line-height: 30px;
  text-transform: capitalize;
  letter-spacing: 0px;
  color: #fff;
}
.inputLeft {
  display: inline-block;
  width: 64px;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  text-transform: capitalize;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
}
.inputRight {
  width: 108px;
  height: 22px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  background: rgba(0, 0, 0, 0);
  text-indent: 1rem;
  color: #fff;
  font-family: PHTM;
  font-size: 18px;
}
.inputRight::-webkit-input-placeholder {
  color: #464646;
}
//refresh/clean/go按钮
.settingButton {
  float: right;
  margin-top: 165px;
  min-width: 55px;
  height: 25px;
  border-radius: 10px;
  background: #d8d8d8;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  margin-left: 15px;
  cursor: pointer;
  font-size: 18px;
  font-family: PHTM;
  padding: 0 3px;
}
//侧边设置栏伸缩按钮
.setButton {
  float: left;
  margin-top: 30px;
  width: 50px;
  height: 40px;
  border-radius: 0px 10px 10px 0px;
  background: linear-gradient(
    90deg,
    #cdd3dc 0%,
    #cdd3dc 0%,
    #b9c0b9 100%,
    #b9c0b9 100%
  );
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
//chem渲染画布
.modelCanvas {
  position: absolute;
  left: 25px;
  top: 25px;
  width: 420px;
  height: 420px;
  border: none;
  z-index: 0;
}
.colorBox {
  float: left;
  width: 45px;
  height: 45px;
  line-height: 50px;
  margin-top: 428px;
  text-align: center;
  margin-right: 10px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.downloadBox {
  float: right;
  width: 150px;
  height: 45px;
  line-height: 50px;
  margin-top: 428px;
  text-align: center;
  margin-left: 130px;
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
</style>
