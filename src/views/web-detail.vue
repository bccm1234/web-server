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
              <el-menu-item index="2">
                <span slot="title"><a href="#one">Summery</a></span>
              </el-menu-item>
              <el-submenu index="2">
                <span slot="title">Properties</span>
                <el-menu-item-group>
                  <el-menu-item index="1-1"
                    ><a href="#two">Electronic Structure</a></el-menu-item
                  >
                  <el-menu-item index="1-2">Themodynamic Stablity</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- right -->
    <div class="rightBox">
      <div class="rightBox1">
        <a id="one"></a>
        <div class="jsmolBox is-always-shadow">
          <iframe :src="JSmolURL" scrolling="no" class="br-5"></iframe>
        </div>
        <div class="properties">
          <el-card class="box-card base">
            <div class="text baseItem">
              <span>Energy Above Hull</span>
            </div>
            <div class="text baseItem">
              <span>Band Gap</span>
              <span class="rightNum">{{ infoObject["band gap"] }}</span>
            </div>
            <div class="text baseItem">
              <span>Energy Above Hull</span>
            </div>
            <div class="text baseItem">
              <span>Energy Above Hull</span>
            </div>
            <div class="text baseItem">
              <span>Energy Above Hull</span>
            </div>
          </el-card>
          <div class="latticeRight">
            <el-card class="box-card spaceGroup clearfix">
              <div class="text" slot="header">
                <span class="Title">Space Group</span>
              </div>
              <div class="text">
                <span>crystal system</span> <br />
                <span>{{ infoObject["crystal system"] }}</span>
              </div>
              <div class="text">
                <span>crystal system</span> <br />
                <span>{{ infoObject["crystal system"] }}</span>
              </div>
            </el-card>
            <el-card class="box-card latticePara">
              <div class="text" slot="header">
                <span class="Title">Lattice Parameters</span>
              </div>
              <div class="text">
                <span class="latticeLength">a</span>
                <span>{{ infoObject["a"] }}</span>
                <span class="latticeLength">α</span>
                <span>{{ infoObject["Î±"] }}</span>
              </div>
              <div class="text">
                <span class="latticeLength">a</span>
                <span>{{ infoObject["b"] }}</span>
                <span class="latticeLength">β</span>
                <span>{{ infoObject["Î²"] }}</span>
              </div>
              <div class="text">
                <span class="latticeLength">a</span>
                <span>{{ infoObject["c"] }}</span>
                <span class="latticeLength">γ</span>
                <span>{{ infoObject["Î³"] }}</span>
              </div>
            </el-card>
          </div>
        </div>
        <div class="colorDownload">
          <span class="colorBox br-5">{{ infoObject.element1 }}</span>
          <span class="colorBox br-5">{{ infoObject.element2 }}</span>
          <a
            href="https://github.com/bccm1234/web-server/blob/details/model/1.cif"
            >download Link</a
          >
        </div>
      </div>
      <div class="rightBox2">
        <a id="two"></a>
        box
      </div>
      <div class="rightBox2">box</div>
      <div class="rightBox2">box</div>
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
      infoObject: {}
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    async fetchData() {
      var idNumber = window.location.hash;
      var id = idNumber.substring(12, idNumber.length);
      this.JSmolURL =
        "http://127.0.0.1:5500/web-server/public/detail.html?" + id;
      const { data: res } = await axios.get("/index/element");
      console.log(res.data[id]);
      this.infoObject = res.data[id];
      console.log(this.infoObject);
      return this.infoObject;
    }
  }
};
</script>
<style lang="less" scoped>
//圆角
.br-5 {
  border-radius: 5px;
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
  margin-top: 160px;
  position: relative;
  width: 60%;
  left: 50%;
  // border: 1px solid black;
  margin-left: -30%;
  height: 100%;
  background-color: pink;
}
.leftBox {
  position: fixed;
  top: 160px;
  left: 20%;
  width: 17%;
  height: 100%;
  border: 1px solid black;
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
  width: 71%;
  height: 100%;
  border: 1px solid pink;
  left: 29%;
  overflow: hidden;
}
.rightBox1 {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: red;
}
iframe {
  float: left;
  width: 50%;
  aspect-ratio: 1;
  border: none;
}
.properties {
  float: right;
  width: 49%;
  aspect-ratio: 0.86;
  background-color: olive;
}
.base {
  padding: 0 20px;
  line-height: 40px;
}
.baseItem {
  border-bottom: 1px solid #ccc;
  text-align: left;
}
.rightNum {
  float: right;
  width: 40%;
  text-align: left;
}
.latticeRight {
  width: 100%;
  aspect-ratio: 1.9;
  background-color: #fff;
  margin-top: 10px;
  text-align: left;
}
.Title {
  font-size: 17px;
  font-weight: 700;
}
.spaceGroup {
  float: left;
  width: 49%;
}
.latticePara {
  float: right;
  width: 49%;
  // overflow: hidden;
}
.latticeLength {
  float: left;
  width: 30px;
  height: 25px;
  border-radius: 17px;
  background-color: rgba(182, 230, 244, 0.976);
  text-align: center;
  line-height: 25px;
}
.colorDownload {
  position: absolute;
  bottom: 7px;
  width: 50%;
  aspect-ratio: 7;
  background-color: pink;
  text-align: left;
  padding: 0 10px;
}
.colorBox {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  margin-top: 1%;
  text-align: center;
  margin-right: 1%;
}
.downloadLink {
  float: right;
  margin-top: 6%;
  text-decoration-line: none;
}
.rightBox2 {
  width: 100%;
  background-color: #fff;
  height: 500px;
  margin-top: 10px;
}
</style>
