<template>
  <div>
    <div class="chargeTop">
      <div>
        <form>
          <span>ISO :</span>
          <input
            type="text"
            id="txtInput"
            @propertychange="checkNum()"
            @input="checkNum()"
            @keypress="checkNum()"
            value=""
            placeholder="0-1"
            class="br-10"
          />
          <span class="goBox br-10">Go!</span>
        </form>
      </div>
      <canvas class="chargeCanvas"></canvas>
    </div>
    <div class="calculation-summer">
      <ul>
        <li class="title">Calculation Summar</li>
        <li class="item">Run Type :</li>
        <li class="item">U-values :</li>
        <li class="item">Energy Cutoff :</li>
        <li class="item">code :</li>
        <li class="item">Kpoint :</li>
        <li class="item">more details :</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "template-calucation",
  methods: {
    checkNum() {
      let value = document.getElementById("txtInput").value;
      let num = "" + value;
      num = num
        .replace(/[^\d.]/g, "")
        .replace(/\.{2,}/g, ".")
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".")
        .replace(/^(\.-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
      if (num.indexOf(".") < 0 && num !== "") {
        num = parseFloat(num);
      }
      if (num >= 1) {
        num = 1;
      }
      document.getElementById("txtInput").value = num;
    }
  }
};
</script>

<style lang="less" scoped>
.chargeTop {
  font-size: 18px;
  text-align: right;
}
#txtInput {
  width: 100px;
  height: 29px;
  margin: 0 10px;
  text-align: center;
}
.goBox {
  display: inline-block;
  width: 37px;
  height: 29px;
  font-size: 18px;
  line-height: 29px;
  background: #404756;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.chargeCanvas {
  width: 740px;
  height: 417px;
  margin: 5px 0 20px;
}
</style>
