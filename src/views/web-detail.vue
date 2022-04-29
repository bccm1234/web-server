<template>
  <div class="totalbox">
    <!-- 左 -->
    <details-leftbox v-bind:info="infoObj">
      <template #formulaName>{{ infoObj.formula }}</template>
      <template #formulaId>{{ infoObj.id }}</template>
    </details-leftbox>
    <!-- 右 -->
    <div class="rightBox">
      <!-- Box1 -->
      <details-abstract>
        <!-- 模型渲染框 -->
        <template #modelCanvas>
          <iframe :src="JSmolURL" scrolling="no" class="modelCanvas"></iframe>
        </template>
        <template #colorBox>
          <span class="colorBox br-10" :style="{ backgroundColor: color1 }">{{
            infoObj.element1
          }}</span>
          <span class="colorBox br-10" :style="{ backgroundColor: color2 }">{{
            infoObj.element2
          }}</span>
        </template>
        <!-- 右侧信息栏 -->
        <template #abstractItemRight1>{{ infoObj["crystal system"] }}</template>
        <template #abstractItemRight2>
          <span class="abstractItemRight" v-html="spaceGroup"></span>
        </template>
        <template #abstractItemRight3>{{ infoObj["band gap"] }}</template>
        <template #abstractItemRight4>{{ infoObj.a }}</template>
        <template #abstractItemRight5>{{ infoObj.b }}</template>
        <template #abstractItemRight6>{{ infoObj.c }}</template>
        <template #abstractItemRight7>{{ infoObj.α }}</template>
        <template #abstractItemRight8>{{ infoObj.β }}</template>
        <template #abstractItemRight9>{{ infoObj.γ }}</template>
      </details-abstract>
      <!-- Box2 -->
      <details-crystal></details-crystal>
      <!-- box3 -->
      <details-band></details-band>
      <!-- box4 -->
      <details-charge></details-charge>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import detailsLeftbox from "./details-leftbox.vue";
import detailsAbstract from "./details-abstract.vue";
import detailsCrystal from "./details-crystal.vue";
import detailsBand from "./details-band.vue";
import detailsCharge from "./details-charge.vue";
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
      color1: "blue",
      color2: "",
      spaceGroup: "",
      JSmolURL: ""
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
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    async fetchData() {
      let idNumber = window.location.hash;
      let id = idNumber.substring(12, idNumber.length);
      const { data: res } = await axios.get("/index/element");
      this.infoObj = res.data[id];
      console.log("infoObj", this.infoObj);
    },
    async handleInfo() {
      const { data: res } = await axios.get("/childpage/elementcolor");
      //增加延时器确保父节点的异步执行完毕，把info传递过来
      setTimeout(() => {
        this.color2 = res.data[this.infoObj.element[0] - 1]["color"];
        this.color1 = res.data[this.infoObj.element[1] - 1]["color"];
        const str = this.infoObj["space group"];
        this.spaceText(str);
        this.JSmolURL =
          "http://127.0.0.1:5500/public/detail.html?" + (this.infoObj.id - 1);
      }, 100);
    },
    spaceText(str) {
      let a = "";
      let b = "";
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
      console.log(str);
      this.spaceGroup = str;
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
  height: 200px;
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
</style>
<style lang="less">
//detail穿透样式
//标题
.title {
  width: 740px;
  height: 40px;
  font-size: 24px;
  font-weight: bold;
  line-height: 40px;
  letter-spacing: 1px;
  color: #3d3d3d;
}
//小项
.item {
  display: inline-block;
  width: 370px;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  line-height: 40px;
  color: #3d3d3d;
}
canvas {
  border-radius: 10px;
  background: #eef5ff;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}
</style>
