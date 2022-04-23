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
                  :value="item.label"
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
                  :value="item.label"
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
            width="340"
          >
            <el-checkbox-group v-model="checkedColumns" size="mini">
              <el-checkbox
                v-for="item in checkBoxGroup"
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
            :default-sort="default_sortmethod"
            @sort-change="sortChange"
            @row-click="detailedinformation"
          >
            <el-table-column
              v-if="colData[0].istrue"
              prop="id"
              label="ID"
              sortable="custom"
              :width="flexColumnWidth('ID', 'id')"
            >
            </el-table-column>
            <el-table-column
              v-if="colData[1].istrue"
              prop="a"
              label="a"
              sortable="custom"
              :width="flexColumnWidth('a', 'a')"
            ></el-table-column>
            <el-table-column
              v-if="colData[2].istrue"
              prop="b"
              label="b"
              sortable="custom"
              :width="flexColumnWidth('b', 'b')"
            ></el-table-column>
            <el-table-column
              v-if="colData[3].istrue"
              prop="c"
              label="c"
              sortable="custom"
              :width="flexColumnWidth('c', 'c')"
            ></el-table-column>
            <el-table-column
              v-if="colData[4].istrue"
              prop="α"
              label="α"
              sortable="custom"
              :width="flexColumnWidth('α', 'α')"
            ></el-table-column>
            <el-table-column
              v-if="colData[5].istrue"
              prop="β"
              label="β"
              sortable="custom"
              :width="flexColumnWidth('β', 'β')"
            ></el-table-column>
            <el-table-column
              v-if="colData[6].istrue"
              prop="γ"
              label="γ"
              sortable="custom"
              :width="flexColumnWidth('γ', 'γ')"
            ></el-table-column>
            <el-table-column
              v-if="colData[7].istrue"
              prop="volume"
              label="volume"
              sortable="custom"
              :width="flexColumnWidth('volume', 'volume')"
            ></el-table-column>
            <el-table-column
              v-if="colData[8].istrue"
              prop="formula"
              label="formula"
              :width="flexColumnWidth('formula', 'formula')"
            >
              <template slot-scope="scope"
                ><div v-html="scope.row.formula"></div
              ></template>
            </el-table-column>
            <el-table-column
              v-if="colData[9].istrue"
              prop="band gap"
              label="band gap"
              sortable="custom"
              :width="flexColumnWidth('band gap', 'band gap')"
            ></el-table-column>
            <el-table-column
              v-if="colData[10].istrue"
              prop="crystal system"
              label="crystal system"
              :width="flexColumnWidth('crystal system', 'crystal')"
            ></el-table-column>
            <el-table-column
              v-if="colData[11].istrue"
              prop="space group"
              label="space group"
              :width="flexColumnWidth('space group', 'space group')"
            >
              <template slot-scope="scope"
                ><div v-html="scope.row['space group']"></div
              ></template>
            </el-table-column>
            <el-table-column
              v-if="colData[12].istrue"
              prop="energy above hull"
              label="energy above hull"
              sortable="custom"
              :width="flexColumnWidth('energy above hull', 'energy above hull')"
            ></el-table-column>
            <el-table-column
              v-if="colData[13].istrue"
              prop="predicted formation energy"
              label="predicted formation energy"
              sortable="custom"
              :width="
                flexColumnWidth(
                  'predicted formation energy',
                  'predicted formation energy'
                )
              "
            ></el-table-column>
            <el-table-column
              v-if="colData[14].istrue"
              prop="magnetic ordering"
              label="magnetic ordering"
              :width="flexColumnWidth('magnetic ordering', 'magnetic ordering')"
            ></el-table-column>
            <el-table-column
              v-if="colData[15].istrue"
              prop="total magnetization"
              label="total magnetization"
              sortable="custom"
              :width="
                flexColumnWidth('total magnetization', 'total magnetization')
              "
            ></el-table-column>
            <el-table-column
              v-if="colData[16].istrue"
              prop="experimentally observed"
              label="experimentally observed"
              :width="
                flexColumnWidth(
                  'experimentally observed',
                  'experimentally observed'
                )
              "
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
      currentPage: 1,
      preList_filter: [],
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
          value: "Cubic",
          label: "Cubic"
        },
        {
          value: "Hexagonal",
          label: "Hexagonal"
        },
        {
          value: "Trigonal",
          label: "Trigonal"
        },
        {
          value: "Tetragonal",
          label: "Tetragonal"
        },
        {
          value: "Orthorhombic",
          label: "Orthorhombic"
        },
        {
          value: "Monoclinic",
          label: "Monoclinic"
        },
        {
          value: "Triclinic",
          label: "Triclinic"
        }
      ],
      colData: [
        { title: "ID", istrue: true },
        { title: "a", istrue: true },
        { title: "b", istrue: true },
        { title: "c", istrue: true },
        { title: "α", istrue: true },
        { title: "β", istrue: true },
        { title: "γ", istrue: true },
        { title: "volume", istrue: true },
        { title: "formula", istrue: true },
        { title: "band gap", istrue: true },
        { title: "crystal system", istrue: true },
        { title: "space group", istrue: true },
        { title: "energy above hull", istrue: false },
        { title: "predicted formation energy", istrue: false },
        { title: "magnetic ordering", istrue: false },
        { title: "total magnetization", istrue: false },
        { title: "experimentally observed", istrue: false }
      ],
      checkBoxGroup: [],
      checkedColumns: [
        "ID",
        "formula",
        "a",
        "b",
        "c",
        "α",
        "β",
        "γ",
        "volume",
        "crystal system",
        "space group",
        "band gap"
      ]
    };
  },
  props: {
    visible: { type: Boolean, require: true },
    searchList: { type: Array, require: false }
  },
  computed: {
    List: function () {
      let beforeList =
        this.preList_filter == [] ? this.preList : this.preList_filter;
      return beforeList.slice(this.floor, this.upper);
    }
  },
  watch: {
    searchList: function () {
      this.aftersearchList = JSON.parse(JSON.stringify(this.searchList));
      this.preList = this.aftersearchList.filter(
        (x) => (
          (x["formula"] = this.handleBigNumber(x["formula"])),
          (x["space group"] = this.handlespacegroup(x["space group"])),
          (x["crystal system"] = this.handleBigChar(x["crystal system"]))
        )
      );
      this.handleSizeChange();
    },
    checkedColumns: function (newval) {
      let arr = this.checkBoxGroup.filter((i) => !newval.includes(i));
      this.colData.forEach((item) => {
        if (arr.includes(item.title)) {
          item.istrue = false;
        } else item.istrue = true;
      });
    },
    "form.crystal": {
      handler(newval) {
        this.preList_filter = this.preList.filter((x) => {
          if (x["crystal system"] == newval) return x;
        });
      },
      deep: true
    }
  },
  created() {
    this.colData.forEach((item) => {
      this.checkBoxGroup.push(item.title);
    });
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
    handlespacegroup(str) {
      let a = "";
      let b = "";
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "-") {
          a = str[i] + str[i + 1];
          b =
            "<span style='text-decoration: overline'>" + str[i + 1] + "</span>";
          i += b.length - 1;
          str = str.replace(new RegExp(a), b);
        } else if (str[i] === "_") {
          a = str[i] + str[i + 1];
          b = "<sub>" + str[i + 1] + "</sub>";
          i += b.length - 1;
          str = str.replace(new RegExp(a), b);
        }
      }
      return str;
    },
    handleBigChar(str) {
      let bigchar = str.slice(0, 1).toUpperCase();
      let smallchar = str.slice(1);
      return bigchar + smallchar;
    },
    flexColumnWidth(label, prop) {
      // 1.获取该列的所有数据
      const arr = this.List.map((x) => x[prop]);
      arr.push(label); // 把每列的表头也加进去算
      // 2.计算每列内容最大的宽度 + 表格的内间距（依据实际情况而定）
      return this.getMaxLength(arr) + 35 + "px";
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
      html.className = "getTextWidth";
      document.querySelector("body").appendChild(html);
      width = document.querySelector(".getTextWidth").offsetWidth;
      document.querySelector(".getTextWidth").remove();
      return width;
    },
    handleSizeChange() {
      this.floor =
        (this.$refs.page.internalCurrentPage - 1) *
        this.$refs.page.internalPageSize;
      this.upper = Math.min(
        this.searchList.length,
        this.$refs.page.internalCurrentPage * this.$refs.page.internalPageSize
      );
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
