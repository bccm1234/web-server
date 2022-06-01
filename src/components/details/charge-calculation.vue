<template>
  <div>
    <div class="chargeBox" v-if="charge.cifUrl">
      <div class="chargeTop PHTM">
        <div class="chargeSetBox">
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
          >
            <form action="" v-show="!isCollapse" ref="chargeForm">
              <div class="setTitle">SETTING</div>
              <div class="nextTitle">Isosurface</div>
              <table class="isoSetTable">
                <tr>
                  <td>Choose</td>
                  <td>Model</td>
                  <td>isosurface level&nbsp;</td>
                  <td>Color</td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      v-model="isPositive"
                      class="chargeCheck"
                    ></el-checkbox>
                  </td>
                  <td>Positive</td>
                  <td>
                    <input
                      type="text"
                      id="inputP"
                      class="isoInput"
                      placeholder="eg:0.05"
                      autocomplete="off"
                      @input="checkNumP()"
                      value=""
                    />
                  </td>
                  <td class="colorBox">
                    <el-color-picker v-model="colorPositive"></el-color-picker>
                  </td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      v-model="isNegative"
                      class="chargeCheck"
                    ></el-checkbox>
                  </td>
                  <td>Negative</td>
                  <td>
                    <input
                      type="text"
                      id="inputN"
                      class="isoInput"
                      placeholder="eg:-0.05"
                      autocomplete="off"
                      @propertychange="checkNumN()"
                      @input="checkNumN()"
                      @keypress="checkNumN()"
                    />
                  </td>
                  <td class="colorBox">
                    <el-color-picker v-model="colorNegative"></el-color-picker>
                  </td>
                </tr>
                <tr style="font-size: 22px">
                  <td>Move</td>
                  <td>Model</td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      v-model="isMoveX"
                      class="chargeCheck"
                    ></el-checkbox>
                  </td>
                  <td>X Axis</td>
                  <td>
                    <input
                      type="text"
                      id="inputX"
                      class="isoInput"
                      placeholder="eg:20"
                      autocomplete="off"
                      oninput="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'');"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <el-checkbox
                      v-model="isMoveY"
                      class="chargeCheck"
                    ></el-checkbox>
                  </td>
                  <td>Y Axis</td>
                  <td>
                    <input
                      id="inputY"
                      type="text"
                      class="isoInput"
                      placeholder="eg:20"
                      autocomplete="off"
                      oninput="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'');"
                    />
                  </td>
                </tr>
                <tr style="font-size: 22px">
                  <td>Spin</td>
                </tr>
              </table>
              <div class="settingButtons">
                <button
                  class="settingButton"
                  @click="sentToChargeIframe"
                  type="button"
                >
                  Go!
                </button>
                <button
                  class="settingButton"
                  @click="resetChargeForm"
                  type="button"
                >
                  Clean
                </button>
                <button
                  class="settingButton"
                  @click="refreshModel"
                  type="button"
                >
                  Refresh
                </button>
              </div>
            </form>
            <table v-show="!isCollapse" class="spinSelectTable">
              <tr>
                <td style="width: 64px; text-align: center">
                  <el-checkbox
                    v-model="isSpin"
                    class="chargeCheck"
                  ></el-checkbox>
                </td>
                <td class="spinSelect" style="width: 80px; text-align: center">
                  <el-select v-model="spinAxis" :popper-append-to-body="isbody">
                    <el-option key="选项1" label="X Axis" value="x"></el-option>
                    <el-option key="选项2" label="Y Axis" value="y"></el-option>
                    <el-option
                      key="选项3"
                      label="Z Axis"
                      value="z"
                      selected
                    ></el-option>
                  </el-select>
                </td>
              </tr>
            </table>
          </el-menu>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <div class="setButton el-icon-setting" @click="changeState()"></div>
          </el-radio-group>
        </div>
        <iframe
          :src="chargeURL"
          scrolling="no"
          class="chargeCanvas"
          id="chargeIframe"
        ></iframe>
      </div>
      <div class="calculation-summer PHTB">
        <ul>
          <li class="title">Calculation Summar</li>
          <li class="item">
            <span class="itemLeft">Run Type :</span>
            <span class="itemRight">
              {{ assessData(charge.summary.runtype) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">U-values :</span>
            <span class="itemRight">
              {{ assessData(charge.summary.u) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Energy Cutoff :</span>
            <span class="itemRight">
              {{ assessData(charge.summary.encut) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">code :</span>
            <span class="itemRight">
              {{ assessData(charge.summary.code) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Kpoint :</span>
            <span class="itemRight">
              {{ assessData(charge.summary.kpoint) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">more details :</span>
            <span class="itemRight">
              {{ assessData(charge.summary.details) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!charge.cifUrl" class="notFound">Not Found</div>
  </div>
</template>

<script>
export default {
  name: "charge-calucation",
  data() {
    return {
      isCollapse: true,
      isPositive: false,
      isNegative: false,
      isMoveX: false,
      isMoveY: false,
      isSpin: false,
      colorPositive: "#ffff56",
      colorNegative: "#78fbfd",
      spinAxis: "z",
      isbody: false,
      xLength: 0,
      yLength: 0,
      chargeConfig: {},
      chargeURL: "",
      charge: {}
    };
  },
  watch: {
    "$store.getters.allInfo"() {
      this.dealInfo();
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let idNumber = window.location.hash;
      let hashId = idNumber.substring(12, idNumber.length);
      this.chargeURL =
        "http://localhost:3000/public/html/3dmol/3Dmol.html?" + hashId;
    },
    dealInfo() {
      this.charge = this.$store.getters.allInfo["charge-density"];
    },
    //限制positive输入0-1内的四位小数
    checkNumP() {
      let value = document.getElementById("inputP").value;
      let num = "" + value;
      num = num
        .replace(/[^\d.]/g, "")
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".")
        .replace(/^(\.-)*(\d+)\.(\d\d\d\d).*$/, "$1$2.$3");
      if (num.indexOf(".") < 0 && num !== "") {
        num = parseFloat(num);
      }
      if (num >= 1) {
        num = 1;
      }
      value = num;
      document.getElementById("inputP").value = value;
    },
    //限制negative输入-1-0内的四位小数
    checkNumN() {
      let value = document.getElementById("inputN").value;
      let numStr = "" + value;
      let num = numStr.replace("-", "");
      num = num
        .replace(/[^\d.]/g, "")
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".")
        .replace(/^(\.-)*(\d+)\.(\d\d\d\d).*$/, "$1$2.$3");
      if (num.indexOf(".") < 0 && num !== "") {
        num = parseFloat(num);
      }
      if (num >= 1) {
        num = 1;
      }
      // console.log("numafter", num);
      if (numStr !== "") {
        numStr = "-" + num;
      }
      // console.log("numStrafter", numStr);
      value = numStr;
      document.getElementById("inputN").value = value;
    },
    //改变设置侧边栏开关状态
    changeState() {
      this.isCollapse = !this.isCollapse;
      let inputP = document.getElementById("inputP").value;
      let inputN = document.getElementById("inputN").value;
      let inputX = document.getElementById("inputX").value;
      let inputY = document.getElementById("inputY").value;
      console.log(inputP, inputN, inputX, inputY);
      setTimeout(() => {
        document.getElementById("inputP").value = inputP;
        document.getElementById("inputN").value = inputN;
        document.getElementById("inputX").value = inputX;
        document.getElementById("inputY").value = inputY;
      }, 340);
    },
    //发送表单内容到html页面
    sentToChargeIframe() {
      let chargeIframe = document.getElementById("chargeIframe");
      let isovalPositive = this.isPositive
        ? document.getElementById("inputP").value
          ? document.getElementById("inputP").value - 0
          : 0.01
        : 0.01;
      let isoPositiveColor = this.isPositive ? this.colorPositive : "#ffff56";
      let isoNegativeColor = this.isNegative ? this.colorNegative : "#78fbfd";
      let isovalNegative = this.isNegative
        ? document.getElementById("inputN").value
          ? document.getElementById("inputN").value - 0
          : -0.01
        : -0.01;
      let moveX = this.isMoveX
        ? document.getElementById("inputX").value
          ? document.getElementById("inputX").value - 0
          : 0
        : 0;
      let moveY = this.isMoveY
        ? document.getElementById("inputY").value
          ? document.getElementById("inputY").value - 0
          : 0
        : 0;
      let translate = [moveX, moveY];
      let spinSpeed = this.isSpin ? 1 : 0;
      this.chargeConfig = {
        isRefresh: false,
        isovalPositive,
        isovalNegative,
        isoPositiveColor,
        isoNegativeColor,
        translate,
        spinAxis: this.spinAxis,
        spinSpeed
      };
      this.xLength += moveX;
      this.yLength += moveY;
      chargeIframe.contentWindow.postMessage(this.chargeConfig, this.chargeURL);
    },
    //表单内容重置
    resetChargeForm() {
      this.$refs.chargeForm.reset();
      (this.isPositive = false),
        (this.isNegative = false),
        (this.isMoveX = false),
        (this.isMoveY = false),
        (this.isSpin = false),
        (this.colorPositive = "#ffff56"),
        (this.colorNegative = "#78fbfd"),
        (this.spinAxis = "z");
    },
    //销毁画布重新渲染模型
    refreshModel() {
      this.resetChargeForm();
      this.chargeConfig.isRefresh = true;
      let chargeIframe = document.getElementById("chargeIframe");
      chargeIframe.contentWindow.postMessage(this.chargeConfig, this.chargeURL);
    }
  }
};
</script>

<style lang="less" scoped>
.chargeBox {
  position: relative;
}
.chargeTop {
  width: 740px;
  height: 500px;
  font-size: 18px;
  text-align: right;
  margin: 10px 0;
}
//charge伸缩设置框，start
.chargeSetBox {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 0;
  height: 0;
  z-index: 2;
}
//伸缩框设置
.el-menu-vertical-demo:not(.el-menu--collapse) {
  float: left;
  width: 370px;
  height: 500px;
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
  height: 500px;
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
  text-align: left;
}
.isoSetTable {
  text-align: center;
  color: #fff;
  font-size: 18px;
  width: 340px;
}
.isoSetTable > tr {
  height: 30px;
  line-height: 29px;
}
//选择框
.chargeCheck /deep/.el-checkbox__input > .el-checkbox__inner {
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
  width: 18px;
  height: 18px;
}
.isoInput {
  width: 108px;
  background: none;
  width: 108px;
  height: 22px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  text-indent: 15px;
  font-size: 18px;
  font-weight: 500;
  // padding-top: 2px;
  color: #fff;
  font-family: PHTM;
}
input::-webkit-input-placeholder {
  font-size: 18px;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 0px;
  color: #464646;
  // line-height: 22px;
}
//颜色选择器
.colorBox {
  height: 30px;
  line-height: 30px;
}
.el-color-picker {
  display: block;
  height: 22px;
  /deep/ .el-color-picker__trigger {
    padding: 0;
    border: none;
    width: 22px;
    height: 22px;
    border-radius: 11px;
    .el-color-picker__color {
      border: none;
      .el-color-picker__color-inner {
        border: 1px solid #fff;
        border-radius: 11px;
      }
    }
    .el-color-picker__icon {
      font-size: 0;
    }
  }
}
.spinSelectTable {
  position: relative;
  top: -30px;
}
//模型旋转xyz下拉选框
.spinSelect /deep/ .el-select {
  .el-input {
    .el-input__inner {
      width: 64px;
      height: 30px;
      padding: 0 5px;
      font-size: 18px;
      background: #d8d8d8;
      border-radius: 0;
      font-family: PHTM;
      font-size: 18px;
      line-height: 30px;
      text-transform: capitalize;
      letter-spacing: 0px;
      color: #5f6266;
      border: 1px solid #fff;
    }
    .el-input__suffix > .el-input__suffix-inner > .el-select__caret {
      display: none;
    }
  }
  .el-popper {
    margin-top: 0;
    width: 64px;
    margin: 0 !important;
    .el-scrollbar > .el-scrollbar__wrap > .el-select-dropdown__list {
      padding: 0;
      border-bottom: 1px solid #fff;
      .el-select-dropdown__item {
        padding: 0;
        width: 64px;
        height: 30px;
        background: rgba(0, 0, 0, 0.6);
        box-sizing: border-box;
        font-size: 18px;
        font-family: PHTM;
        line-height: 30px;
        text-transform: capitalize;
        letter-spacing: 0px;
        text-align: center;
        color: #fff;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }
    }
  }
  .el-select-dropdown {
    margin: 0;
    border: none;
    border-radius: 0 !important;
    .popper__arrow {
      display: none !important;
    }
  }
}
//go/clean/refresh 按钮
.settingButtons {
  width: 340px;
  height: 30px;
  position: relative;
  top: 105px;
}
.settingButton {
  float: right;
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
//设置（抽屉开关按钮）
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
//侧边设置栏end
//charge渲染画布
.chargeCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 740px;
  height: 500px;
  margin: 0 0 20px;
  border-radius: 10px;
  background: #eef5ff;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  border: none;
}
</style>
