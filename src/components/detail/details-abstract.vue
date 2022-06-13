<template>
  <div class="abstractBox PHTM rightModule" id="0">
    <!-- chemdoodle模型渲染框 -->
    <div class="modelBox">
      <!-- 扩胞设置侧边伸缩框 -->
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
                @propertychange="checkNumInput('input1')"
                @input="checkNumInput('input1')"
                @keypress="checkNumInput('input1')"
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
                @propertychange="checkNumInput('input2')"
                @input="checkNumInput('input2')"
                @keypress="checkNumInput('input2')"
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
                @propertychange="checkNumInput('input3')"
                @input="checkNumInput('input3')"
                @keypress="checkNumInput('input3')"
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
      <!-- chemdoodle -->
      <iframe
        :src="crystalURL"
        scrolling="no"
        class="modelCanvas"
        id="chemIframe"
      ></iframe>
      <!-- 原子颜色 -->
      <span
        class="colorBox br-10 PHTB"
        :style="{ backgroundColor: this.infoObj.color1 }"
        >{{ infoObj.element1 }}</span
      >
      <span
        class="colorBox br-10 PHTB"
        :style="{ backgroundColor: this.infoObj.color2 }"
        >{{ infoObj.element2 }}</span
      >
      <!-- 下载 -->
      <span class="downloadBox br-10"
        ><a
          class="el-icon-download download"
          :href="downLoadUrl"
          @click="downLoad()"
          >DownLoad</a
        ></span
      >
    </div>
    <!-- 右侧内容 -->
    <div class="baseInfo">
      <ul class="abstractTable">
        <!-- abstract部分 -->
        <li class="abstractTitle">Abstract</li>
        <li class="abstractItem">
          <span class="abstractItemLeft">Crystal System:</span>
          <span class="abstractItemRight">{{ infoObj["crystal system"] }}</span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">Space Group:</span>
          <span
            class="abstractItemRight"
            v-html="infoObj['space group']"
          ></span>
        </li>
        <li class="abstractItem">
          <span class="abstractItemLeft">band Gap(Calutation):</span>
          <span class="abstractItemRight">{{ infoObj["band gap"] }}ev</span>
        </li>
        <!-- lattice部分 -->
        <li class="abstractTitle">Lattice</li>
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
    hashNum: Number
  },
  data() {
    return {
      //默认扩胞侧边栏关闭
      isCollapse: true,
      downLoadUrl: "",
      //模型设置栏表单内容
      input1: null,
      input2: null,
      input3: null
    };
  },
  created() {
    this.downLoad();
  },
  methods: {
    //动态拼接下载链接
    downLoad() {
      // console.log(this.infoObj.id);
      this.$nextTick(() => {
        this.downLoadUrl =
          "http://localhost:3000/public/cif/" + this.infoObj.id + ".cif";
      });
    },
    //设置扩胞侧边栏开关
    changeState() {
      this.isCollapse = !this.isCollapse;
      let input1 = document.getElementById("input1").value;
      let input2 = document.getElementById("input2").value;
      let input3 = document.getElementById("input3").value;
      setTimeout(() => {
        document.getElementById("input1").value = input1;
        document.getElementById("input2").value = input2;
        document.getElementById("input3").value = input3;
      }, 340);
    },
    //发送模型设置框内容到iframe内的html页面
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
    checkNumInput(idName) {
      let value = document.getElementById(idName).value;
      value = this.checkNum(value);
      document.getElementById(idName).value = value;
    }
  }
};
</script>

<style lang="less" scoped>
.abstractBox {
  width: 860px;
  height: 550px;
}
.modelBox {
  position: absolute;
  width: 470px;
  height: 520px;
  padding: 25px;
  border-radius: 10px;
  text-align: left;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
//扩胞设置框---start---
.supercellBox {
  position: absolute;
  left: 25px;
  top: 25px;
  z-index: 1;
  width: 0;
}
//伸缩框展开面板
.el-menu-vertical-demo:not(.el-menu--collapse) {
  float: left;
  width: 260px;
  height: 420px;
  padding: 30px 15px;
  border-radius: 10px;
  border: 2px solid #cdd3dc;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.el-menu {
  border: none;
}
//伸缩框收缩面板
.el-menu--collapse {
  float: left;
  width: 0;
  height: 420px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6) !important;
  backdrop-filter: blur(2px);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.setTitle {
  height: 40px;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
.nextTitle {
  height: 30px;
  font-size: 22px;
  line-height: 30px;
  text-transform: capitalize;
  color: #fff;
}
.inputLeft {
  display: inline-block;
  width: 64px;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  text-transform: capitalize;
  color: #ffffff;
  text-align: center;
}
.inputRight {
  width: 108px;
  height: 22px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-family: PHTM;
  font-size: 18px;
  text-indent: 20px;
  background: rgba(0, 0, 0, 0);
  color: #fff;
}
.inputRight::-webkit-input-placeholder {
  color: #464646;
}
//refresh/clean/go按钮
.settingButton {
  float: right;
  min-width: 55px;
  height: 25px;
  padding: 0 3px;
  margin-left: 15px;
  margin-top: 165px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-size: 18px;
  font-family: PHTM;
  background: #d8d8d8;
  cursor: pointer;
}
//侧边设置栏伸缩按钮
.setButton {
  float: left;
  width: 50px;
  height: 40px;
  margin-top: 30px;
  border-radius: 0px 10px 10px 0px;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  background: linear-gradient(
    90deg,
    #cdd3dc 0%,
    #cdd3dc 0%,
    #b9c0b9 100%,
    #b9c0b9 100%
  );
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
//chem渲染画布
.modelCanvas {
  position: absolute;
  left: 25px;
  top: 25px;
  z-index: 0;
  width: 420px;
  height: 420px;
  border: none;
}
.colorBox {
  float: left;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  margin-top: 428px;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}
.downloadBox {
  float: right;
  width: 150px;
  height: 45px;
  margin-top: 428px;
  margin-left: 130px;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  background: #84b1ff;
  cursor: pointer;
}
.download {
  font-weight: 500;
  text-decoration: none;
  color: #000;
}
//右侧内容位置
.baseInfo {
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
}
.abstractTable > li {
  height: 40px;
  line-height: 50px;
}
.abstractTitle {
  margin: 8px 0;
  text-align: left;
  font-size: 24px;
  letter-spacing: 4px;
}
.abstractItem {
  text-align: left;
  font-size: 18px;
}
.abstractItemLeft {
  display: inline-block;
  margin-right: 30px;
}
</style>
