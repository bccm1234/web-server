<template>
  <div v-show="visible">
    <el-table
      :data="List"
      border
      style="width: 60%; margin: 0 auto"
      :default-sort="default_sortmethod"
      @sort-change="sortChange"
      @row-click="detailedinformation"
      id="search-result"
    >
      <el-table-column prop="id" label="ID" sortable> </el-table-column>
      <el-table-column prop="a" label="a" sortable="custom"></el-table-column>
      <el-table-column prop="b" label="b" sortable="custom"></el-table-column>
      <el-table-column prop="c" label="c" sortable="custom"></el-table-column>
      <el-table-column prop="formula" label="formula">
        <template slot-scope="scope"
          ><div v-html="scope.row.formula"></div
        ></template>
      </el-table-column>
      <el-table-column
        prop="band gap"
        label="bandgap"
        sortable="custom"
      ></el-table-column>
      <el-table-column
        prop="crystal system"
        label="crystal system"
      ></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.searchList.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [],
      currentPage: 1,
      preList: [],
      aftersearchList: [],
      default_sortmethod: { prop: "id", order: "ascending" }
    };
  },
  props: {
    visible: { type: Boolean, require: true },
    searchList: { type: Array, require: false }
  },
  watch: {
    searchList: function () {
      this.aftersearchList = JSON.parse(JSON.stringify(this.searchList));
      this.preList = this.aftersearchList.filter(
        (x) => (x["formula"] = this.handleBigNumber(x["formula"]))
      );
      this.handleSizeChange();
    }
  },
  methods: {
    handleBigNumber(num) {
      let List = "";
      for (let i of num) {
        if (i.match(/\d+/)) List += "<sub>" + i + "</sub>";
        else List += i;
      }
      return List;
    },
    handleSizeChange() {
      const floor =
        (this.$children[1].internalCurrentPage - 1) *
        this.$children[1].internalPageSize;
      const upper = Math.min(
        this.searchList.length,
        this.$children[1].internalCurrentPage *
          this.$children[1].internalPageSize
      );
      this.List = this.preList.slice(floor, upper);
    },
    handleCurrentChange() {
      this.handleSizeChange();
    },
    sortChange({ prop, order }) {
      this.preList.sort(this.compare(prop, order));
      this.handleSizeChange();
    },
    compare(propertyName, sort) {
      return function (obj1, obj2) {
        var value1 = obj1[propertyName];
        var value2 = obj2[propertyName];
        var reg = /-?(0|([1-9]\d*))\.?\d*/;
        if (typeof value1 === "string" && typeof value2 === "string") {
          value1 = parseFloat(value1.match(reg)[0]);
          value2 = parseFloat(value2.match(reg)[0]);
        }
        if (value1 <= value2) {
          return sort === "ascending" ? -1 : 1;
        } else if (value1 > value2) {
          return sort === "ascending" ? 1 : -1;
        }
      };
    },
    detailedinformation(row) {
      this.$router.push({ name: "detail", query: { id: row.id } });
    }
  }
};
</script>

<style lang="less" scoped></style>
