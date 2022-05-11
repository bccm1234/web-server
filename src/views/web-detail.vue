<template>
  <div class="totalbox">
    <!-- 左 -->
    <details-leftbox :infoObj="infoObj" :formula="formula"></details-leftbox>
    <!-- 右 -->
    <div class="rightBox">
      <!-- Box1 -->
      <details-abstract
        :crystalURL="crystalURL"
        :infoObj="infoObj"
        :spaceGroup="spaceGroup"
        :color1="color1"
        :color2="color2"
      >
      </details-abstract>
      <!-- Box2 -->
      <details-crystal
        :infoObj="infoObj"
        :spaceGroup="spaceGroup"
      ></details-crystal>
      <!-- box3 -->
      <details-band></details-band>
      <!-- box4 -->
      <details-charge></details-charge>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import detailsLeftbox from "../components/details/details-leftbox.vue";
import detailsAbstract from "../components/details/details-abstract.vue";
import detailsCrystal from "../components/details/details-crystal.vue";
import detailsBand from "../components/details/details-band.vue";
import detailsCharge from "../components/details/details-charge.vue";
export default {
  name: "web-detail",
  components: {
    detailsLeftbox,
    detailsAbstract,
    detailsCrystal,
    detailsBand,
    detailsCharge
  },
  data() {
    return {
      infoObj: {},
      color1: "",
      color2: "",
      spaceGroup: "",
      crystalURL: "",
      chargeURL: "",
      formula: "",
      hashNum: null
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
    this.handleInfo();
  },
  mounted() {
    window.addEventListener("scroll", this.scrollColor);
    this.tranStr(0, "CO2");
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    async fetchData() {
      let idNumber = window.location.hash;
      let hashId = idNumber.substring(12, idNumber.length);
      const { data: res } = await axios.get("/index/element");
      this.infoObj = res.data[hashId - 1];
      this.hashNum = hashId;
      this.crystalURL =
        "http://127.0.0.1:5501/web-server/public/model/chemdoodle/chemdoodle.html?" +
        hashId;
      this.chargeURL =
        "http://127.0.0.1:5501/web-server/public/model/3dmol/3dmol.html" +
        hashId;
      // console.log("infoObj", this.infoObj);
    },
    async handleInfo() {
      const { data: res } = await axios.get("/childpage/elementcolor");
      setTimeout(() => {
        this.color2 = res.data[this.infoObj.element[0] - 1]["color"];
        this.color1 = res.data[this.infoObj.element[1] - 1]["color"];
        const spaceGroup = this.infoObj["space group"];
        const formula = this.infoObj["formula"];
        this.tranStr(1, spaceGroup);
        this.tranStr(0, formula);
      }, 50);
    },
    tranStr(num, str) {
      // 0 means formula
      // 1 means space group symbol
      let a = "";
      let b = "";
      let newStr = "";
      if (num == 0) {
        for (let i of str) {
          if (i.match(/\d+/)) {
            newStr += "<sub>" + i + "</sub>";
          } else {
            newStr += i;
          }
        }
        console.log(newStr);
        this.formula = newStr;
      } else if (num == 1) {
        for (let i = 0; i < str.length; i++) {
          if (str[i] === "-") {
            a = str[i] + str[i + 1];
            b =
              "<span span style='text-decoration: overline'>" +
              str[i + 1] +
              "</span>";
            i += 50;
            str = str.replace(new RegExp(a), b);
          } else if (str[i] === "_") {
            a = str[i] + str[i + 1];
            b = "<sub>" + str[i + 1] + "</sub>";
            i += 10;
            str = str.replace(new RegExp(a), b);
          }
        }
        this.spaceGroup = str;
      }
    },
    //滑动相应导航单改变
    scrollColor() {
      const nav = document.getElementsByClassName("navItem");
      const item = document.getElementsByClassName("rightItem");
      const scrolltop = document.documentElement.scrollTop;
      const screenHeight = document.documentElement.clientHeight;
      const scrollHeight = (screenHeight - 160) / 2;
      for (let i = 0; i < item.length; i++) {
        const distanceT = item[i].offsetTop - scrolltop;
        if (distanceT < scrollHeight && distanceT > -scrollHeight) {
          for (let i = 0; i < item.length; i++) {
            nav[i].style.backgroundColor = "";
            nav[i].className = "navItem";
          }
          nav[i].classList.add("bgc");
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.totalbox {
  position: relative;
  left: 50%;
  top: 50px;
  margin-left: -650px;
  width: 1300px;
}
.topBox {
  position: fixed;
  top: 0;
  height: 160px;
  width: 100%;
  background-color: #e4e6e8;
  z-index: 99;
}
.rightBox {
  position: relative;
  left: 390px;
  width: 860px;
  height: 300px;
}
//子组件样式穿透
//标题
::v-deep .title {
  width: 740px;
  height: 40px;
  font-size: 24px;
  font-family: PHTB;
  line-height: 40px;
  letter-spacing: 1px;
  color: #3d3d3d;
}
//小项
::v-deep .item {
  display: inline-block;
  width: 370px;
  height: 40px;
  font-size: 18px;
  font-family: PHTB;
  line-height: 40px;
  color: #3d3d3d;
}
::v-deep canvas {
  border-radius: 10px;
  background: #eef5ff;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
::v-deep .itemLeft {
  display: inline-block;
  margin-right: 30px;
}
::v-deep .itemRight {
  color: #551a8b;
}
::v-deep .navName {
  width: 860px;
  height: 70px;
  font-size: 32px;
  line-height: 70px;
  letter-spacing: 0px;
  color: #3d3d3d;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
  font-family: PHTM;
}
::v-deep .PHTR {
  font-family: PHTR;
}
::v-deep .PHTB {
  font-family: PHTB;
}
::v-deep .PHTM {
  font-family: PHTM;
}
</style>
