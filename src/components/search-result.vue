<template>
  <div v-show="visible">
    <el-table
      :data="searchList"
      border
      style="width: 75%; margin: 0 auto"
      :default-sort="default_sortmethod"
      @sort-change="sortChange"
      @row-click="detailedinformation"
    >
      <el-table-column prop="ID" label="ID" width="180" sortable>
      </el-table-column>
      <el-table-column prop="a" label="a" width="180" sortable="custom">
      </el-table-column>
      <el-table-column
        prop="b"
        label="b"
        width="180"
        sortable="custom"
      ></el-table-column>
      <el-table-column
        prop="c"
        label="c"
        width="180"
        sortable="custom"
      ></el-table-column>
      <el-table-column
        prop="formula"
        label="formula"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="bandgap"
        label="bandgap"
        width="180"
        sortable="custom"
      ></el-table-column>
      <el-table-column
        prop="crystal system"
        label="crystal system"
        min-width="180"
      ></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.constList.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchList: [],
      currentPage: 1,
      constList: [],
      default_sortmethod: { prop: "ID", order: "ascending" }
    };
  },
  props: { visible: { type: Boolean, require: true } },
  created() {
    axios
      .get("/index/element")
      .then(function (response) {
        return response.data.data;
      })
      .then(
        (data) => (
          (this.constList = data.filter((x) => (x.ID = parseInt(x.ID)))),
          this.handleSizeChange()
        )
      );
  },
  methods: {
    handleSizeChange() {
      const floor =
        (this.$children[1].internalCurrentPage - 1) *
        this.$children[1].internalPageSize;
      const upper = Math.min(
        this.constList.length,
        this.$children[1].internalCurrentPage *
          this.$children[1].internalPageSize
      );
      this.searchList = this.constList.slice(floor, upper);
    },
    handleCurrentChange() {
      this.handleSizeChange();
    },
    sortChange({ prop, order }) {
      this.searchList.sort(this.compare(prop, order));
    },
    compare(propertyName, sort) {
      return function (obj1, obj2) {
        var value1 = obj1[propertyName];
        var value2 = obj2[propertyName];
        var reg = /-?(0|([1-9]\d*))\.\d+/;
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
      this.$router.push({ name: "detail", query: row.ID });
    }
  }
};
</script>

<style lang="less" scoped></style>
