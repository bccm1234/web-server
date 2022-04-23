<template>
  <div class="totalDetail">
    <div class="topBox"></div>
    <!-- left -->
    <div class="leftBox">
      <el-card>
        <img src="../assets/logo.png" class="image" />
        <span class="formulaName">{{ infoObject["formula"] }}</span>
        <br />
        <span class="formulaID">mp-{{ infoObject["id"] }}</span>
      </el-card>
      <div class="leftNav">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-menu-item
                index="2"
                @click="jump(0)"
                class="navItem"
                style="background-color: #ecf5ff"
              >
                Summery
              </el-menu-item>
              <el-submenu index="2">
                <span slot="title">Properties</span>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="jump(1)" class="navItem"
                    >Electronic Structure</el-menu-item
                  >
                  <el-menu-item index="1-2" @click="jump(2)" class="navItem"
                    >Themodynamic Stablity</el-menu-item
                  >
                  <el-menu-item index="1-2" @click="jump(3)" class="navItem"
                    >box4</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- right -->
    <div class="rightBox">
      <div class="rightItem" id="0">
        <div class="jsmolBox">
          <iframe :src="JSmolURL" scrolling="no" class="br-5"></iframe>
          <div class="colorDownload">
            <span
              class="colorBox br-5"
              :style="{ backgroundColor: color1 }"
              style="color: white"
              >{{ infoObject.element1 }}</span
            >
            <span
              class="colorBox br-5"
              :style="{ backgroundColor: color2 }"
              style="color: white"
              >{{ infoObject.element2 }}</span
            >
            <a class="downloadLink" href="#">download Link</a>
          </div>
        </div>
        <div class="properties">
          <el-card class="box-card base">
            <div class="text baseItem">
              <span class="leftStr">Energy Above Hull</span>
              <span class="rightNum"
                >{{ infoObject["energy above hull"] }} eV/atom</span
              >
            </div>
            <div class="text baseItem">
              <span class="leftStr">Band Gap</span>
              <span class="rightNum">{{ infoObject["band gap"] }} eV</span>
            </div>
            <div class="text baseItem">
              <span class="leftStr">Speace Group</span>
              <span class="rightNum" v-html="speaceGroup"></span>
            </div>
            <div class="text baseItem">
              <span class="leftProperties leftStr"
                >Predicted Formation Energy</span
              >
              <span class="rightNum"
                >{{ infoObject["predicted formation energy"] }} ev/atom</span
              >
            </div>
            <div class="text baseItem">
              <span class="leftStr">Total Magnetization</span>
              <span class="rightNum"
                >{{ infoObject["total magnetization"] }} μB/f.u.</span
              >
            </div>
            <div class="text baseItem">
              <span class="leftStr">Magnetic Ordering</span>
              <span class="rightNum">{{
                infoObject["magnetic ordering"]
              }}</span>
            </div>
            <div class="text baseItem">
              <span class="leftProperties leftStr"
                >Experimentally Observed</span
              >
              <span class="rightNum">{{
                infoObject["experimentally observed"]
              }}</span>
            </div>
          </el-card>
        </div>
        <div class="spaceLattic">
          <el-card class="box-card spaceGroup clearfix">
            <div class="text Title">
              <span>Space Group</span>
              <hr />
            </div>
            <div class="text spaceItemBox">
              <span class="fw-600">Hermann Mauguin</span> <br />
              <span>000000</span>
            </div>
            <div class="text spaceItemBox">
              <span class="fw-600">Point Group</span> <br />
              <span>000000</span>
            </div>
            <div class="text spaceItemBox">
              <span class="fw-600">Hall</span> <br />
              <span>000000</span>
            </div>
            <div class="text spaceItemBox">
              <span class="fw-600">crystal system</span> <br />
              <span>{{ infoObject["crystal system"] }}</span>
            </div>
          </el-card>
          <el-card class="box-card latticePara">
            <div class="text Title">
              <span class="Title">Lattice Parameters</span>
              <hr />
            </div>
            <div class="text">
              <span class="w-25">
                <span class="latticeLength">a</span>
              </span>
              <span class="w-25">{{ infoObject["a"] }}</span>
              <span class="w-25">
                <span class="latticeLength">α</span>
              </span>
              <span class="w-25">{{ infoObject["α"] }}</span>
            </div>
            <div class="text">
              <span class="w-25">
                <span class="latticeLength">b</span>
              </span>
              <span class="w-25">{{ infoObject["b"] }}</span>
              <span class="w-25">
                <span class="latticeLength">β</span>
              </span>
              <span class="w-25">{{ infoObject["β"] }}</span>
            </div>
            <div class="text">
              <span class="w-25">
                <span class="latticeLength">c</span>
              </span>
              <span class="w-25">{{ infoObject["c"] }}</span>
              <span class="w-25">
                <span class="latticeLength">γ</span>
              </span>
              <span class="w-25">{{ infoObject["γ"] }}</span>
            </div>
          </el-card>
        </div>
      </div>
      <div class="rightItem" id="1">
        <div style="height: 600px">box1</div>
      </div>
      <div class="rightItem" id="2">
        <div style="height: 600px">box2</div>
      </div>
      <div class="rightItem" id="3">
        <div style="height: 600px">box3</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "web-detail",
  data() {
    return {
      JSmolURL: "",
      infoObject: {},
      speaceGroup: "",
      color1: "blue",
      color2: ""
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
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
      this.JSmolURL =
        "http://127.0.0.1:5501/web-server/public/detail.html?" + id;
      const { data: res } = await axios.get("/index/element");
      this.infoObject = res.data[id];
      console.log("info", this.infoObject);
      this.spaceText(this.infoObject["space group"]);
      this.getcolor();
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
      this.speaceGroup = str;
    },
    async getcolor() {
      const { data: res } = await axios.get("/childpage/elementcolor");
      this.color2 = res.data[this.infoObject.element[0] - 1].color;
      this.color1 = res.data[this.infoObject.element[1] - 1].color;
      console.log("22222222", this.color1);
      console.log("res", res);
    },
    jump(id) {
      const scrolly = document.getElementById(id).offsetTop;
      window.scrollTo(0, scrolly);
      const nav = document.getElementsByClassName("navItem");
      nav[id].classList.add("bgc");
    },
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
            nav[i].className = "el-menu-item navItem";
          }
          nav[i].classList.add("is-active");
          nav[i].style.backgroundColor = "#ecf5ff";
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
//圆角
.br-5 {
  border-radius: 5px;
}
//字体加粗
.fw-600 {
  font-weight: 600;
}
.topBox {
  position: fixed;
  top: 0;
  height: 160px;
  width: 100%;
  background-color: #e4e6e8;
  z-index: 99;
}
.totalDetail {
  margin-top: 40px;
  position: relative;
  width: 60%;
  left: 50%;
  margin-left: -30%;
  height: 100%;
}
.leftBox {
  position: fixed;
  top: 160px;
  left: 20%;
  width: 16%;
  height: 100%;
  text-align: left;
}
.infoCard {
  width: 100%;
  aspect-ratio: 2.5;
  background-color: #fff;
}
.image {
  float: left;
  margin-top: 5%;
  margin-left: 5%;
  width: 25%;
  aspect-ratio: 1;
}
.formulaName {
  display: inline-block;
  font-size: 30px;
  font-weight: 700;
  margin-top: 5%;
}
.formulaID {
  display: inline-block;
  margin-top: 6%;
  font-size: 22px;
}
.leftNav {
  background-color: #fff;
  margin-top: 10px;
  height: 100%;
}
.rightBox {
  position: relative;
  width: 73%;
  height: 100%;
  left: 27%;
  overflow: hidden;
}
.jsmolBox {
  float: left;
  width: 50%;
}
iframe {
  width: 100%;
  aspect-ratio: 1;
  border: none;
}
.colorDownload {
  float: left;
  width: 100%;
  text-align: left;
  padding: 0 10px;
  margin-top: 10px;
}
.colorBox {
  display: inline-block;
  width: 50px;
  height: 50px;
  // background-color: #fff;
  line-height: 50px;
  margin-top: 1%;
  text-align: center;
  margin-right: 3%;
}
.downloadLink {
  float: right;
  margin-top: 6%;
  text-decoration-line: none;
}
.properties {
  position: relative;
  top: 0;
  left: 50%;
  width: 50%;
  aspect-ratio: 0.8;
}
.base {
  position: absolute;
  left: 1%;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  line-height: 40px;
}
.baseItem {
  position: relative;
  border-bottom: 1px solid #ccc;
  text-align: left;
  aspect-ratio: 5.5;
}
.leftProperties {
  display: inline-block;
  width: 64%;
}
.leftStr {
  position: absolute;
  bottom: 10%;
  width: 60%;
  line-height: 1.3rem;
}
.rightNum {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 36%;
  line-height: 1.3rem;
  color: blue;
}
.spaceLattic {
  float: left;
  width: 100%;
  margin-top: 10px;
}
.spaceGroup {
  float: left;
  width: 49%;
  text-align: left;
}
.Title {
  font-size: 18px;
  font-weight: 700;
  line-height: 2rem;
}
.spaceItemBox {
  border-bottom: 1px solid #ebeef5;
  line-height: 1.7rem;
  padding: 0 1rem;
}
.latticePara {
  float: right;
  width: 49%;
  line-height: 4.62rem;
}
.latticeLength {
  display: inline-block;
  width: 40px;
  height: 30px;
  border-radius: 15px;
  background-color: #d9edf7;
  text-align: center;
  line-height: 30px;
}
.w-25 {
  display: inline-block;
  width: 25%;
}
.rightItem {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
}
</style>
