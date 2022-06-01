<template>
  <div class="totalbox">
    <!-- 左 -->
    <details-leftbox :infoObj="infoObj"></details-leftbox>
    <!-- 右 -->
    <div class="rightBox">
      <!-- Box1 -->
      <details-abstract :crystalURL="crystalURL" :infoObj="infoObj">
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
      crystalURL: "",
      chargeURL: "",
      hashNum: null,
      // vuex
      allInfo: {}
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
      let hashId = idNumber.substring(12, idNumber.length);
      const { data: res } = await this.$axios.get("/materials/index");
      // console.log("res", res);
      const { data: colorRes } = await this.$axios.get(
        "/materials/detail/atomcolor"
      );
      // console.log("colorRes", colorRes);
      this.infoObj = res[hashId - 1];
      // console.log("info", this.infoObj);
      this.infoObj.color1 = colorRes[this.infoObj.element[1] - 1]["color"];
      this.infoObj.color2 = colorRes[this.infoObj.element[0] - 1]["color"];
      this.infoObj["space group"] = this.tranStr(
        1,
        this.infoObj["space group"]
      );
      this.infoObj.formula = this.tranStr(0, this.infoObj["formula"]);
      this.hashNum = hashId;
      this.crystalURL =
        "http://localhost:3000/public/html/chemdoodle/chemdoodle.html?" +
        hashId;
      // console.log("infoObj", this.infoObj);
      const { data: result } = await this.$axios.get("/materials/detail/Cu2O");
      this.allInfo = result;
      //vuex
      this.$store.commit("system/SET_AllInfo", this.allInfo);
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
  user-select: none;
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
  user-select: text;
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
::v-deep .br-10 {
  border-radius: 10px;
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
::v-deep .notFound {
  font-size: 24px;
  font-weight: 700;
}
</style>
