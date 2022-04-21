<template>
  <div v-show="visible" id="search-result">
    <el-container>
      <el-aside width="450px">
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
          <i
            v-if="!toggle.Symmetry"
            class="el-icon-caret-right"
            @click="changetoggle(true, $event)"
            >Symmetry
          </i>
          <i
            v-else
            class="el-icon-caret-bottom"
            @click="changetoggle(false, $event)"
            >Symmetry</i
          >
          <div v-show="toggle.Symmetry" class="clear">
            <el-form-item label="Spacegroup Symbol" prop="spacegroup">
              <el-select v-model="form.spacegroup">
                <el-option
                  v-for="item in spacegroup_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left" v-html="item.label"></span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{
                    item.value
                  }}</span>
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Crystal System" prop="crystal">
              <el-select v-model="form.crystal">
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
            <span>
              <b>{{ this.searchList.length + " materials" }}</b>
              match your search
            </span>
            <div>
              {{
                "Showing " +
                (this.upper ? this.floor + 1 : 0) +
                "-" +
                this.upper
              }}
            </div>
          </div>
          <el-popover
            placement="left"
            title="列筛选"
            trigger="click"
            width="420"
          >
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
            :default-sort="default_sortmethod"
            @sort-change="sortChange"
            @row-click="detailedinformation"
          >
            <el-table-column prop="id" label="ID" sortable="custom">
            </el-table-column>
            <el-table-column
              prop="a"
              label="a"
              sortable="custom"
            ></el-table-column>
            <el-table-column
              prop="b"
              label="b"
              sortable="custom"
            ></el-table-column>
            <el-table-column
              prop="c"
              label="c"
              sortable="custom"
            ></el-table-column>
            <el-table-column
              prop="α"
              label="α"
              sortable="custom"
            ></el-table-column>
            <el-table-column
              prop="β"
              label="β"
              sortable="custom"
            ></el-table-column>
            <el-table-column
              prop="γ"
              label="γ"
              sortable="custom"
            ></el-table-column>
            <el-table-column
              prop="volume"
              label="volume"
              sortable="custom"
            ></el-table-column>
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
        </el-main>
        <el-footer>
          <el-pagination
            ref="page"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.searchList.length"
          >
          </el-pagination>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { spacegroup: "", crystal: "" },
      List: [],
      currentPage: 1,
      preList: [],
      aftersearchList: [],
      default_sortmethod: { prop: "id", order: "ascending" },
      toggle: {
        Symmetry: false
      },
      floor: "",
      upper: "",
      spacegroup_options: [
        {
          value: "选项1",
          label: "Pn<span style='text-decoration: overline'>3</span>m"
        },
        {
          value: "选项2",
          label: "I4<sub>1</sub>/amd"
        },
        {
          value: "选项3",
          label: "Ia<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      crystal_options: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ]
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
      this.floor =
        (this.$refs.page.internalCurrentPage - 1) *
        this.$refs.page.internalPageSize;
      this.upper = Math.min(
        this.searchList.length,
        this.$refs.page.internalCurrentPage * this.$refs.page.internalPageSize
      );
      this.List = this.preList.slice(this.floor, this.upper);
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
    },
    changetoggle(isdisplay, event) {
      let formkey = event.target.innerHTML.trim();
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
.el-aside {
  background-color: #fff;
  margin: 10px;
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(187, 187, 187);
    height: 70px;
    .filter-header-title {
      font-weight: 700;
      font-size: 20px;
      margin-left: 25px;
    }
    .el-button {
      margin-right: 25px;
    }
  }
  .filter-form /deep/ .el-form-item {
    text-align: left;
    margin-left: 21px;
    margin-bottom: 7px;
  }
  i {
    float: left;
    font-size: 18px;
    font-weight: 600;
    margin: 10px 3px 0;
  }
  .clear {
    clear: both;
    padding-top: 7px;
  }
}
.el-container {
  .el-header {
    display: flex;
    background-color: #fff;
    padding: 0px;
    margin: 10px 20px 0;
    justify-content: space-between;
    .searchresult-header {
      margin-top: 10px;
      padding-left: 10px;
      span {
        font-size: 16px;
        b {
          font-size: 20px;
        }
      }
      div {
        font-size: 14px;
        text-align: left;
      }
    }
    span {
      align-self: center;
    }
  }
}
</style>
