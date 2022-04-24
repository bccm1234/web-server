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
              <b>{{ this.total + " materials" }}</b>
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
  data() {
    return {
      List: [],
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
          value: "1",
          label: "P1"
        },
        {
          value: "2",
          label: "P<span style='text-decoration: overline'>1</span>"
        },
        {
          value: "3",
          label: "P121"
        },
        {
          value: "4",
          label: "P12_1<span style='text-decoration: overline'>1</span>"
        },
        {
          value: "5",
          label: "C121"
        },
        {
          value: "6",
          label: "P1m1"
        },
        {
          value: "7",
          label: "P1c1"
        },
        {
          value: "8",
          label: "C1m1"
        },
        {
          value: "9",
          label: "C1c1"
        },
        {
          value: "10",
          label: "P12/m1"
        },
        {
          value: "11",
          label: "P12<sub>1</sub>/m1"
        },
        {
          value: "12",
          label: "C12/m1"
        },
        {
          value: "13",
          label: "P12/c1"
        },
        {
          value: "14",
          label: "P12<sub>1</sub>/c1"
        },
        {
          value: "15",
          label: "C12/c1"
        },
        {
          value: "16",
          label: "P222"
        },
        {
          value: "17",
          label: "P222<sub>1</sub>"
        },
        {
          value: "18",
          label:
            "P2_1<span style='text-decoration: overline'>2</span>_1<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "19",
          label:
            "P2_1<span style='text-decoration: overline'>2</span>_12<span style='text-decoration: overline'>1</span>"
        },
        {
          value: "20",
          label: "C222<sub>1</sub>"
        },
        {
          value: "21",
          label: "C222"
        },
        {
          value: "22",
          label: "F222"
        },
        {
          value: "23",
          label: "I222"
        },
        {
          value: "24",
          label:
            "I2_1<span style='text-decoration: overline'>2</span>_12<span style='text-decoration: overline'>1</span>"
        },
        {
          value: "25",
          label: "Pmm2"
        },
        {
          value: "26",
          label: "Pmc2<sub>1</sub>"
        },
        {
          value: "27",
          label: "Pcc2"
        },
        {
          value: "28",
          label: "Pma2"
        },
        {
          value: "29",
          label: "Pca2<sub>1</sub>"
        },
        {
          value: "30",
          label: "Pnc2"
        },
        {
          value: "31",
          label: "Pmn2<sub>1</sub>"
        },
        {
          value: "32",
          label: "Pba2"
        },
        {
          value: "33",
          label: "Pna2<sub>1</sub>"
        },
        {
          value: "34",
          label: "Pnn2"
        },
        {
          value: "35",
          label: "Cmm2"
        },
        {
          value: "36",
          label: "Cmc2<sub>1</sub>"
        },
        {
          value: "37",
          label: "Ccc2"
        },
        {
          value: "38",
          label: "Amm2"
        },
        {
          value: "39",
          label: "Aem2"
        },
        {
          value: "40",
          label: "Ama2"
        },
        {
          value: "41",
          label: "Aea2"
        },
        {
          value: "42",
          label: "Fmm2"
        },
        {
          value: "43",
          label: "Fdd2"
        },
        {
          value: "44",
          label: "Imm2"
        },
        {
          value: "45",
          label: "Iba2"
        },
        {
          value: "46",
          label: "Ima2"
        },
        {
          value: "47",
          label: "Pmmm"
        },
        {
          value: "48",
          label: "Pnnn1"
        },
        {
          value: "49",
          label: "Pccm"
        },
        {
          value: "50",
          label: "Pban1"
        },
        {
          value: "51",
          label: "Pmma"
        },
        {
          value: "52",
          label: "Pnna"
        },
        {
          value: "53",
          label: "Pmna"
        },
        {
          value: "54",
          label: "Pcca"
        },
        {
          value: "55",
          label: "Pbam"
        },
        {
          value: "56",
          label: "Pccn"
        },
        {
          value: "57",
          label: "Pbcm"
        },
        {
          value: "58",
          label: "Pnnm"
        },
        {
          value: "59",
          label: "Pmmn1"
        },
        {
          value: "60",
          label: "Pbcn"
        },
        {
          value: "61",
          label: "Pbca"
        },
        {
          value: "62",
          label: "Pnma"
        },
        {
          value: "63",
          label: "Cmcm"
        },
        {
          value: "64",
          label: "Cmce"
        },
        {
          value: "65",
          label: "Cmmm"
        },
        {
          value: "66",
          label: "Cccm"
        },
        {
          value: "67",
          label: "Cmme"
        },
        {
          value: "68",
          label: "Ccce1"
        },
        {
          value: "69",
          label: "Fmmm"
        },
        {
          value: "70",
          label: "Fddd1"
        },
        {
          value: "71",
          label: "Immm"
        },
        {
          value: "72",
          label: "Ibam"
        },
        {
          value: "73",
          label: "Ibca"
        },
        {
          value: "74",
          label: "Imma"
        },
        {
          value: "75",
          label: "P4"
        },
        {
          value: "76",
          label: "P4<sub>1</sub>"
        },
        {
          value: "77",
          label: "P4<sub>2</sub>"
        },
        {
          value: "78",
          label: "P4<sub>3</sub>"
        },
        {
          value: "79",
          label: "I4"
        },
        {
          value: "80",
          label: "I4<sub>1</sub>"
        },
        {
          value: "81",
          label: "P<span style='text-decoration: overline'>4</span>"
        },
        {
          value: "82",
          label: "I<span style='text-decoration: overline'>4</span>"
        },
        {
          value: "83",
          label: "P4/m"
        },
        {
          value: "84",
          label: "P4<sub>2</sub>/m"
        },
        {
          value: "85",
          label: "P4/n1"
        },
        {
          value: "86",
          label: "P4<sub>2</sub>/n"
        },
        {
          value: "87",
          label: "I4/m"
        },
        {
          value: "88",
          label: "I4<sub>1</sub>/a"
        },
        {
          value: "89",
          label: "P422"
        },
        {
          value: "90",
          label: "P42_1<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "91",
          label: "P4_12<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "92",
          label:
            "P4_1<span style='text-decoration: overline'>2</span>_1<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "93",
          label: "P4_22<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "94",
          label:
            "P4_2<span style='text-decoration: overline'>2</span>_1<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "95",
          label: "P4_32<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "96",
          label:
            "P4_3<span style='text-decoration: overline'>2</span>_1<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "97",
          label: "I422"
        },
        {
          value: "98",
          label: "I4_12<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "99",
          label: "P4mm"
        },
        {
          value: "100",
          label: "P4bm"
        },
        {
          value: "101",
          label: "P4<sub>2</sub>cm"
        },
        {
          value: "102",
          label: "P4<sub>2</sub>nm"
        },
        {
          value: "103",
          label: "P4cc"
        },
        {
          value: "104",
          label: "P4nc"
        },
        {
          value: "105",
          label: "P4<sub>2</sub>mc"
        },
        {
          value: "106",
          label: "P4<sub>2</sub>bc"
        },
        {
          value: "107",
          label: "I4mm"
        },
        {
          value: "108",
          label: "I4cm"
        },
        {
          value: "109",
          label: "I4<sub>1</sub>md"
        },
        {
          value: "110",
          label: "I4<sub>1</sub>cd"
        },
        {
          value: "111",
          label: "P<span style='text-decoration: overline'>4</span>2m"
        },
        {
          value: "112",
          label: "P<span style='text-decoration: overline'>4</span>2c"
        },
        {
          value: "113",
          label:
            "P<span style='text-decoration: overline'>4</span>2<sub>1</sub>m"
        },
        {
          value: "114",
          label:
            "P<span style='text-decoration: overline'>4</span>2<sub>1</sub>c"
        },
        {
          value: "115",
          label: "P<span style='text-decoration: overline'>4</span>m2"
        },
        {
          value: "116",
          label: "P<span style='text-decoration: overline'>4</span>c2"
        },
        {
          value: "117",
          label: "P<span style='text-decoration: overline'>4</span>b2"
        },
        {
          value: "118",
          label: "P<span style='text-decoration: overline'>4</span>n2"
        },
        {
          value: "119",
          label: "I<span style='text-decoration: overline'>4</span>m2"
        },
        {
          value: "120",
          label: "I<span style='text-decoration: overline'>4</span>c2"
        },
        {
          value: "121",
          label: "I<span style='text-decoration: overline'>4</span>2m"
        },
        {
          value: "122",
          label: "I<span style='text-decoration: overline'>4</span>2d"
        },
        {
          value: "123",
          label: "P4/mmm"
        },
        {
          value: "124",
          label: "P4/mcc"
        },
        {
          value: "125",
          label: "P4/nbm1"
        },
        {
          value: "126",
          label: "P4/nnc1"
        },
        {
          value: "127",
          label: "P4/mbm"
        },
        {
          value: "128",
          label: "P4/mnc"
        },
        {
          value: "129",
          label: "P4/nmm1"
        },
        {
          value: "130",
          label: "P4/ncc1"
        },
        {
          value: "131",
          label: "P4<sub>2</sub>/mmc"
        },
        {
          value: "132",
          label: "P4<sub>2</sub>/mcm"
        },
        {
          value: "133",
          label: "P4<sub>2</sub>/nbc"
        },
        {
          value: "134",
          label: "P4<sub>2</sub>/nnm"
        },
        {
          value: "135",
          label: "P4<sub>2</sub>/mbc"
        },
        {
          value: "136",
          label: "P4<sub>2</sub>/mnm"
        },
        {
          value: "137",
          label: "P4<sub>2</sub>/nmc"
        },
        {
          value: "138",
          label: "P4<sub>2</sub>/ncm"
        },
        {
          value: "139",
          label: "I4/mmm"
        },
        {
          value: "140",
          label: "I4/mcm"
        },
        {
          value: "141",
          label: "I4<sub>1</sub>/amd"
        },
        {
          value: "142",
          label: "I4<sub>1</sub>/acd"
        },
        {
          value: "143",
          label: "P3"
        },
        {
          value: "144",
          label: "P3<sub>1</sub>"
        },
        {
          value: "145",
          label: "P3<sub>2</sub>"
        },
        {
          value: "146",
          label: "R3"
        },
        {
          value: "147",
          label: "P<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "148",
          label: "R<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "149",
          label: "P312"
        },
        {
          value: "150",
          label: "P321"
        },
        {
          value: "151",
          label: "P3_11<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "152",
          label: "P3_12<span style='text-decoration: overline'>1</span>"
        },
        {
          value: "153",
          label: "P3_21<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "154",
          label: "P3_22<span style='text-decoration: overline'>1</span>"
        },
        {
          value: "155",
          label: "R32"
        },
        {
          value: "156",
          label: "P3m1"
        },
        {
          value: "157",
          label: "P31m"
        },
        {
          value: "158",
          label: "P3c1"
        },
        {
          value: "159",
          label: "P31c"
        },
        {
          value: "160",
          label: "R3m"
        },
        {
          value: "161",
          label: "R3c"
        },
        {
          value: "162",
          label: "P<span style='text-decoration: overline'>3</span>1m"
        },
        {
          value: "163",
          label: "P<span style='text-decoration: overline'>3</span>1c"
        },
        {
          value: "164",
          label: "P<span style='text-decoration: overline'>3</span>m1"
        },
        {
          value: "165",
          label: "P<span style='text-decoration: overline'>3</span>c1"
        },
        {
          value: "166",
          label: "R<span style='text-decoration: overline'>3</span>m"
        },
        {
          value: "167",
          label: "R<span style='text-decoration: overline'>3</span>c"
        },
        {
          value: "168",
          label: "P6"
        },
        {
          value: "169",
          label: "P6<sub>1</sub>"
        },
        {
          value: "170",
          label: "P6<sub>5</sub>"
        },
        {
          value: "171",
          label: "P6<sub>2</sub>"
        },
        {
          value: "172",
          label: "P6<sub>4</sub>"
        },
        {
          value: "173",
          label: "P6<sub>3</sub>"
        },
        {
          value: "174",
          label: "P<span style='text-decoration: overline'>6</span>"
        },
        {
          value: "175",
          label: "P6/m"
        },
        {
          value: "176",
          label: "P6<sub>3</sub>/m"
        },
        {
          value: "177",
          label: "P622"
        },
        {
          value: "178",
          label: "P6_12<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "179",
          label: "P6_52<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "180",
          label: "P6_22<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "181",
          label: "P6_42<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "182",
          label: "P6_32<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "183",
          label: "P6mm"
        },
        {
          value: "184",
          label: "P6cc"
        },
        {
          value: "185",
          label: "P6<sub>3</sub>cm"
        },
        {
          value: "186",
          label: "P6<sub>3</sub>mc"
        },
        {
          value: "187",
          label: "P<span style='text-decoration: overline'>6</span>m2"
        },
        {
          value: "188",
          label: "P<span style='text-decoration: overline'>6</span>c2"
        },
        {
          value: "189",
          label: "P<span style='text-decoration: overline'>6</span>2m"
        },
        {
          value: "190",
          label: "P<span style='text-decoration: overline'>6</span>2c"
        },
        {
          value: "191",
          label: "P6/mmm"
        },
        {
          value: "192",
          label: "P6/mcc"
        },
        {
          value: "193",
          label: "P6<sub>3</sub>/mcm"
        },
        {
          value: "194",
          label: "P6<sub>3</sub>/mmc"
        },
        {
          value: "195",
          label: "P23"
        },
        {
          value: "196",
          label: "F23"
        },
        {
          value: "197",
          label: "I23"
        },
        {
          value: "198",
          label: "P2_1<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "199",
          label: "I2_1<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "200",
          label: "Pm<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "201",
          label: "Pn<span style='text-decoration: overline'>3</span>1"
        },
        {
          value: "202",
          label: "Fm<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "203",
          label: "Fd<span style='text-decoration: overline'>3</span>1"
        },
        {
          value: "204",
          label: "Im<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "205",
          label: "Pa<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "206",
          label: "Ia<span style='text-decoration: overline'>3</span>"
        },
        {
          value: "207",
          label: "P432"
        },
        {
          value: "208",
          label: "P4_23<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "209",
          label: "F432"
        },
        {
          value: "210",
          label: "F4_13<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "211",
          label: "I432"
        },
        {
          value: "212",
          label: "P4_33<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "213",
          label: "P4_13<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "214",
          label: "I4_13<span style='text-decoration: overline'>2</span>"
        },
        {
          value: "215",
          label: "P<span style='text-decoration: overline'>4</span>3m"
        },
        {
          value: "216",
          label: "F<span style='text-decoration: overline'>4</span>3m"
        },
        {
          value: "217",
          label: "I<span style='text-decoration: overline'>4</span>3m"
        },
        {
          value: "218",
          label: "P<span style='text-decoration: overline'>4</span>3n"
        },
        {
          value: "219",
          label: "F<span style='text-decoration: overline'>4</span>3c"
        },
        {
          value: "220",
          label: "I<span style='text-decoration: overline'>4</span>3d"
        },
        {
          value: "221",
          label: "Pm<span style='text-decoration: overline'>3</span>m"
        },
        {
          value: "222",
          label: "Pn<span style='text-decoration: overline'>3</span>n1"
        },
        {
          value: "223",
          label: "Pm<span style='text-decoration: overline'>3</span>n"
        },
        {
          value: "224",
          label: "Pn<span style='text-decoration: overline'>3</span>m1"
        },
        {
          value: "225",
          label: "Fm<span style='text-decoration: overline'>3</span>m"
        },
        {
          value: "226",
          label: "Fm<span style='text-decoration: overline'>3</span>c"
        },
        {
          value: "227",
          label: "Fd<span style='text-decoration: overline'>3</span>m1"
        },
        {
          value: "228",
          label: "Fd<span style='text-decoration: overline'>3</span>c1"
        },
        {
          value: "229",
          label: "Im<span style='text-decoration: overline'>3</span>m"
        },
        {
          value: "230",
          label: "Ia<span style='text-decoration: overline'>3</span>d"
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
    total: function () {
      if (this.preList_filter.length != 0) {
        return this.preList_filter.length;
      } else return this.searchList.length;
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
        this.handleSizeChange();
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
        this.total,
        this.$refs.page.internalCurrentPage * this.$refs.page.internalPageSize
      );
      this.getList(this.preList, this.preList_filter);
    },
    getList(List, filterList) {
      if (filterList.length != 0) {
        this.List = filterList.slice(this.floor, this.upper);
      } else this.List = List.slice(this.floor, this.upper);
    },
    handleCurrentChange() {
      this.handleSizeChange();
    },
    sortChange({ prop, order }) {
      if (this.preList_filter.length != 0)
        this.preList_filter.sort(this.compare(prop, order));
      else this.preList.sort(this.compare(prop, order));
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
