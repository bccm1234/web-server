<template>
  <div>
    <div v-if="bandExp.bandgap">
      <!-- bandGap部分 -->
      <div class="title">
        <span class="itemLeft">Band Gap :</span>
        <span class="itemRight">{{ assessData(bandExp.bandgap, " ev") }}</span>
      </div>
      <!-- article部分 -->
      <div class="articleBox">
        <ul>
          <li class="title">Article</li>
          <li class="item" style="width: 700px">
            <span>Doi :</span>
            <span>
              <a :href="bandExp.doi" target="blank" class="doiLink">
                {{ assessData(bandExp.doi) }}
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="!bandExp.bandgap" class="notFound">Not Found</div>
  </div>
</template>

<script>
export default {
  name: "band-experiment",
  data() {
    return {
      bandExp: {}
    };
  },
  mounted() {
    //渲染组件时调用函数
    this.bandExpInfo();
  },
  methods: {
    //从vuex中获取数据
    bandExpInfo() {
      this.bandExp = this.$store.getters.allInfo["band-dos"].exp;
    }
  }
};
</script>

<style lang="less" scoped>
.articleBox {
  margin-top: 10px;
}
.doiLink {
  text-decoration: none;
  color: #000;
}
</style>
