<template>
  <div v-show="visible">
    <el-table :data="searchList" border style="width: 75%; margin: 0 auto">
      <el-table-column prop="ID" label="ID" width="180" sortable>
      </el-table-column>
      <el-table-column prop="a" label="a" width="180" sortable>
      </el-table-column>
      <el-table-column
        prop="b"
        label="b"
        width="180"
        sortable
      ></el-table-column>
      <el-table-column
        prop="c"
        label="c"
        width="180"
        sortable
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
        sortable
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
      constList: []
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
    }
  }
};
</script>

<style lang="less" scoped></style>
