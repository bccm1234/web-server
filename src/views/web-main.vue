<template>
  <div style="width: 100%">
    <mysearchinput
      ref="input"
      :inputList="inputList"
      @inputList="updateET"
      @resultList="updatesearchList"
    ></mysearchinput>
    <elementtable
      :light="inputList"
      @addelement="pushele"
      @delelement="delele"
    ></elementtable>
    <mysearchresult
      ref="searchresult"
      :visible="visible"
      :searchList="searchList"
    ></mysearchresult>
  </div>
</template>

<script>
import mysearchinput from "@/components/main/search-input.vue";
import elementtable from "@/components/main/element-table.vue";
import mysearchresult from "@/components/main/search-result.vue";
export default {
  components: {
    mysearchresult,
    mysearchinput,
    elementtable
  },
  data() {
    return {
      inputList: [],
      visible: false,
      searchList: [],
      timer: null
    };
  },
  methods: {
    updateET(list) {
      this.inputList = list;
    },
    updatesearchList(searchlist) {
      this.searchList = searchlist;
      this.$refs.searchresult.reset();
      this.visible = true;
      this.jumptoresult();
    },
    pushele(ele) {
      this.inputList.push(ele);
      this.$refs.input.changeinput(this.inputList);
    },
    delele(ele) {
      this.inputList = this.inputList.filter((x) => x !== ele);
      this.$refs.input.changeinput(this.inputList);
    },
    jumptoresult() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let el = document.querySelector("#search-result");
        window.scrollTo(0, el.offsetTop - 110);
      }, 50);
    }
  }
};
</script>

<style lang="less" scoped></style>
