<template>
  <div v-show="visible" id="search-result">
    <el-container>
      <el-aside width="2.6rem" style="min-width: 280px">
        <div class="filter-header">
          <span class="filter-header-title">Filters</span>
          <el-button @click="reset">Reset</el-button>
        </div>
        <el-form
          :model="form"
          label-position="top"
          class="filter-form"
          ref="form"
        >
          <div>
            <div v-if="!toggle.Symmetry" class="icon-symmetry">
              <i
                class="el-icon-caret-right"
                @click="changetoggle(true, $event)"
                style="cursor: pointer"
              ></i>
              <span @click="changetoggle(true, $event)" style="cursor: pointer"
                >Symmetry</span
              >
            </div>
            <div v-else class="icon-symmetry">
              <i
                class="el-icon-caret-bottom"
                @click="changetoggle(false, $event)"
                style="cursor: pointer"
              ></i>
              <span @click="changetoggle(false, $event)" style="cursor: pointer"
                >Symmetry</span
              >
            </div>
          </div>
          <div v-show="toggle.Symmetry" class="filter-body">
            <el-form-item label="Spacegroup Symbol" prop="space group">
              <el-select
                v-model="form['space group']"
                @change="getspacegroup"
                ref="spacegroup"
              >
                <template slot="prefix">
                  <div
                    v-html="form['space group']"
                    style="
                      margin-left: 45px;
                      color: rgb(96, 102, 113);
                      font-size: 0.06rem;
                    "
                  ></div>
                </template>
                <el-option
                  v-for="item in spacegroup_options"
                  :key="item.value"
                  :label="item.value"
                  :value="item.label"
                >
                  <span
                    style="float: left; font-size: 0.06rem"
                    v-html="item.label"
                  ></span>
                  <span
                    style="float: right; color: #8492a6; font-size: 0.06rem"
                    >{{ item.value }}</span
                  >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Crystal System" prop="crystal system">
              <el-select v-model="form['crystal system']">
                <el-option
                  v-for="item in crystal_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-form>
      </el-aside>
      <el-container>
        <el-header>
          <div class="searchresult-header">
            <div>
              <b>{{ total + " materials" }}</b>
              match your search
            </div>
            <div>
              {{
                "Showing " + (upper ? floor + 1 : 0) + "-" + (upper ? upper : 0)
              }}
            </div>
          </div>
          <el-popover
            placement="left"
            title="列筛选"
            trigger="click"
            width="320"
          >
            <el-checkbox-group v-model="selectedColumns" size="mini">
              <el-checkbox
                v-for="item in selectColumns"
                :key="item"
                :label="item"
                :value="item"
              ></el-checkbox>
            </el-checkbox-group>
            <el-button slot="reference" type="primary" size="small" plain>
              <i class="el-icon-arrow-down el-icon-menu"></i>列表项展示筛选
            </el-button>
          </el-popover>
        </el-header>
        <el-main>
          <el-table
            :data="List"
            border
            style="margin: 0 auto"
            :default-sort="defaultSortMethod"
            @sort-change="sortChange"
            @row-click="detailedinformation"
          >
            <el-table-column
              v-for="item in selectedColumns"
              :prop="item"
              :key="item"
              :label="item"
              :width="flexColumnWidth(item, item)"
              ><template slot-scope="scope"
                ><div v-html="scope.row[item]"></div
              ></template>
            </el-table-column>
          </el-table>
        </el-main>
        <el-footer>
          <el-pagination
            ref="page"
            @size-change="handleSizeChange()"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pagesizeList"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      List: [],
      form: { "space group": "", "crystal system": "" },
      currentPage: 1,
      pagesize: 10,
      preList_filter: [],
      preList: [],
      defaultSortMethod: { prop: "id", order: "ascending" },
      toggle: {
        Symmetry: true
      },
      floor: "",
      upper: "",
      spacegroup_options: this.$store.state.spacegroup_options,
      crystal_options: this.$store.state.crystal_options,
      colData: [
        { title: "id", istrue: true },
        { title: "a", istrue: true },
        { title: "b", istrue: true },
        { title: "c", istrue: true },
        { title: "volume", istrue: true },
        { title: "formula", istrue: true },
        { title: "band gap", istrue: true },
        { title: "crystal system", istrue: true },
        { title: "space group", istrue: true },
        { title: "energy above hull", istrue: true },
        { title: "α", istrue: false },
        { title: "β", istrue: false },
        { title: "γ", istrue: false },
        { title: "predicted formation energy", istrue: false },
        { title: "magnetic ordering", istrue: false },
        { title: "total magnetization", istrue: false },
        { title: "experimentally observed", istrue: false }
      ],
      selectColumns: [],
      selectedColumns: [
        "id",
        "formula",
        "a",
        "b",
        "c",
        "volume",
        "crystal system",
        "space group",
        "band gap",
        "energy above hull"
      ]
    };
  },
  props: {
    visible: { type: Boolean, require: true },
    searchList: { type: Array, require: false }
  },
  computed: {
    total: function () {
      let totalList = this.selectList(this.preList, this.preList_filter);
      return totalList.length;
    },
    pagesizeList: function () {
      return [
        Math.ceil(this.pagesize / 2),
        Math.ceil(this.pagesize),
        Math.ceil(this.pagesize * 1.5),
        Math.ceil(this.pagesize * 2)
      ];
    }
  },
  watch: {
    // 数据后处理及table的初始化
    searchList: function () {
      this.preList = JSON.parse(JSON.stringify(this.searchList));
      this.preList = this.preList.filter(
        (x) => (
          (x["formula"] = this.tranStr(0, x["formula"])),
          (x["space group"] = this.tranStr(1, x["space group"])),
          (x["crystal system"] = this.handleBigChar(x["crystal system"]))
        )
      );
      this.handleSizeChange("init");
    },
    // 列的选择
    selectedColumns: function (newval) {
      let arr = this.selectColumns.filter((i) => !newval.includes(i));
      this.colData.forEach((item) => {
        if (arr.includes(item.title)) {
          item.istrue = false;
        } else item.istrue = true;
      });
    },
    form: {
      handler(newval) {
        this.preList_filter = this.preList.filter((x) => {
          let select = true;
          for (let key in newval) {
            if (newval[key] != "") {
              if (x[key] != newval[key]) select = false;
            }
          }
          if (select) return x;
        });
        this.handleSizeChange("init");
      },
      deep: true
    }
  },
  // 初始化selectColumns数组
  created() {
    this.colData.forEach((item) => {
      this.selectColumns.push(item.title);
    });
  },
  methods: {
    getspacegroup() {
      console.log(this.$refs.spacegroup.$children[0].$props);
    },
    // List数据的选择
    filterisempty(form) {
      for (let key in form) {
        if (form[key] != "") return false;
      }
      return true;
    },
    selectList(preList, preList_filter) {
      if (this.filterisempty(this.form)) return preList;
      else return preList_filter;
    },
    // 首字母大写
    handleBigChar(str) {
      let bigchar = str.slice(0, 1).toUpperCase();
      let smallchar = str.slice(1);
      return bigchar + smallchar;
    },
    // 自适应列宽度函数
    flexColumnWidth(label, prop) {
      // 1.获取该列的所有数据
      const arr = this.List.map((x) => x[prop]);
      arr.push(label); // 把每列的表头也加进去算
      // 2.计算每列内容最大的宽度 + 表格的内间距（依据实际情况而定）
      return this.getMaxLength(arr) + 47 + "px";
    },
    getMaxLength(arr) {
      return arr.reduce((acc, item) => {
        if (item) {
          const calcLen = this.getTextWidth(item);
          if (acc < calcLen) {
            acc = calcLen;
          }
        }
        if (acc < 50) acc = 50;
        return acc;
      }, 0);
    },
    getTextWidth(str) {
      let width = 0;
      const html = document.createElement("span");
      html.innerHTML = str;
      html.style.fontSize = "0.09rem";
      html.className = "getTextWidth";
      document.querySelector("body").appendChild(html);
      width = document.querySelector(".getTextWidth").offsetWidth;
      document.querySelector(".getTextWidth").remove();
      return width;
    },
    // table初始化函数
    handleSizeChange(str) {
      if (str === "init") {
        this.floor = (this.currentPage - 1) * this.$refs.page.internalPageSize;
        this.upper = Math.min(
          this.total,
          this.currentPage * this.$refs.page.internalPageSize
        );
      } else {
        this.floor =
          (this.$refs.page.internalCurrentPage - 1) *
          this.$refs.page.internalPageSize;
        this.upper = Math.min(
          this.total,
          this.$refs.page.internalCurrentPage * this.$refs.page.internalPageSize
        );
      }
      this.List = this.selectList(this.preList, this.preList_filter).slice(
        this.floor,
        this.upper
      );
    },
    handleCurrentChange() {
      this.handleSizeChange();
    },
    // 排序函数
    sortChange({ prop, order }) {
      this.selectList(this.preList, this.preList_filter).sort(
        this.compare(prop, order)
      );
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
    // 路由跳转函数
    detailedinformation(row) {
      this.$router.push({ name: "detail", query: { id: row.id } });
    },
    changetoggle(isdisplay, event) {
      let formkey =
        event.target.innerHTML || event.target.nextSibling.innerHTML;
      for (let key in this.toggle) {
        if (key == formkey) {
          this.toggle[key] = isdisplay;
        } else this.toggle[key] = !isdisplay;
      }
    },
    reset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  .el-aside {
    margin: 0.06rem;
    background-color: #fff;
    .filter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      background-color: rgb(187, 187, 187);
      .filter-header-title {
        margin-left: 0.125rem;
        font-weight: 700;
        font-size: 0.12rem;
      }
      .el-button {
        margin-right: 0.125rem;
        font-size: 0.1rem;
      }
    }
    .filter-form /deep/ .el-form-item {
      margin-left: 21px;
      margin-bottom: 7px;
      text-align: left;
    }
    .icon-symmetry {
      display: flex;
      align-items: center;
      margin: 3px 0;
      i {
        font-size: 18px;
      }
      span {
        margin-left: 3px;
        font-size: 0.1rem;
        font-weight: 600;
      }
    }
    .filter-body {
      padding-top: 7px;
      /deep/ .el-form-item__label {
        font-size: 0.084rem;
      }
      /deep/ .el-input--prefix .el-input__inner {
        padding-left: 15px;
      }
      /deep/ .el-input__inner {
        font-size: 0.084rem;
      }
    }
  }
  .el-container {
    min-width: 540px;
    .el-header {
      display: flex;
      justify-content: space-between;
      padding: 0px;
      margin: 10px 20px 0;
      background-color: #fff;
      .searchresult-header {
        margin-top: 10px;
        padding-left: 10px;
        div:first-child {
          font-size: 0.09rem;
          b {
            font-size: 0.12rem;
          }
        }
        div:last-child {
          font-size: 0.084rem;
          text-align: left;
        }
      }
      span {
        align-self: center;
      }
    }
    .el-table {
      font-size: 0.09rem;
    }
  }
}
</style>
