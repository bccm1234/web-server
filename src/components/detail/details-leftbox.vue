<template>
  <!-- left -->
  <div class="leftBox">
    <!-- 元素卡片 -->
    <ul class="formulaBox">
      <li class="formulaName" v-html="infoObj.formula"></li>
      <li class="formulaId">mp-{{ infoObj.id }}</li>
    </ul>
    <!-- 左侧导航栏 -->
    <div>
      <ul class="leftNav PHTM">
        <li class="navTitle">CONTENTS</li>
        <li></li>
        <li class="navItem activeItem" @click="jump(0)">Abstract</li>
        <li class="navItem" @click="jump(1)">Crystal Structure</li>
        <li class="navItem" @click="jump(2)">Band Structure & Dos</li>
        <li class="navItem" @click="jump(3)">Charge Density</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "details-leftbox",
  props: {
    infoObj: Object,
    formula: String
  },
  data() {
    return {
      //   info: 1
    };
  },
  methods: {
    //点击导航栏跳转
    jump(id) {
      const scrolly = document.getElementById(id).offsetTop;
      window.scrollTo(0, scrolly);
      const nav = document.getElementsByClassName("navItem");
      for (let i = 0; i < nav.length; i++) {
        nav[i].className = "navItem";
      }
      nav[id].classList.add("bgc");
    }
  }
};
</script>

<style lang="less" scoped>
.bgc {
  background-color: #002fa7;
  color: #fff;
}
.leftBox {
  position: fixed;
  top: 130px;
  left: 50%;
  width: 320px;
  height: 1000px;
  margin-left: -650px;
  text-align: left;
}
//元素卡片
.formulaBox {
  /* title */
  position: absolute;
  left: 0px;
  top: 35px;
  padding-left: 50px;
  min-width: 220px;
  margin-bottom: 75px;
  text-align: center;
  color: #3d3d3d;
  user-select: none;
}
.formulaName {
  display: block;
  height: 75px;
  width: 220px;
  font-family: "PHTB";
  font-size: 64px;
  letter-spacing: 1px;
  line-height: 75px;
  font-weight: bold;
}
.formulaId {
  display: block;
  width: 220px;
  height: 60px;
  font-family: "PHTR";
  font-size: 36px;
  line-height: 60px;
  text-align: center;
}
.leftNav {
  position: absolute;
  top: 210px;
  width: 100%;
  height: 735px;
  margin-top: 10px;
  text-indent: 30px;
  color: #202535;
}
.leftNav > li {
  width: 320px;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
}
.navTitle {
  text-transform: uppercase;
  letter-spacing: 6px;
}
.navItem {
  display: block;
  border-radius: 8px;
  cursor: pointer;
}
.activeItem {
  background: #002fa7;
  color: #fff;
}
</style>
