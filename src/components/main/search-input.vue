<template>
  <div>
    <el-form :inline="true" size="large" :model="form">
      <el-form-item label="Explore Materials">
        <!-- 给已封装好的组件添加原生方法 -->
        <el-autocomplete
          v-focus
          placeholder="Please input"
          v-model="form.input"
          @input="judgeinput"
          @keyup.13.native="getresult(isabled)"
          :fetch-suggestions="querySearch"
        >
          <i
            class="el-icon-close el-input__icon"
            slot="suffix"
            @click="clearinput"
          >
          </i>
          <template slot-scope="{ item }">
            <div class="intro">
              <span>{{ item.intro }}</span>
              <span>{{ item.value }}</span>
            </div>
          </template></el-autocomplete
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getresult" :disabled="!isabled"
          >Search</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isabled: false,
      form: {
        input: ""
      },
      searchMethod: 3,
      example: [
        { intro: "Include at least elements: ", value: "Cu,O" },
        {
          intro: "Include only elements: ",
          value: "Ti-O"
        },
        {
          intro: "Include only elements plus wildcard elements: ",
          value: "O-*"
        },
        { intro: "Has exact formula: ", value: "CuO" },
        {
          intro: "Has formula with wildcard atoms: ",
          value: "Al*"
        }
      ]
    };
  },
  methods: {
    //根据搜索内容返回提示框
    querySearch(queryString, cb) {
      var results = this.example;
      cb(results);
    },
    clearinput() {
      this.form.input = "";
      this.judgeinput();
    },
    async getresult(isabled) {
      if (isabled) {
        let { data: rawlist } = await this.$axios.get("/materials/index");
        rawlist = rawlist.map((x) => {
          x.id = parseInt(x.id);
          x.a = x.a + "Å";
          x.b = x.b + "Å";
          x.c = x.c + "Å";
          x.α = x.α + "°";
          x.β = x.β + "°";
          x.γ = x.γ + "°";
          x["volume"] = x["volume"] + "Å³";
          x["band gap"] = x["band gap"] + "eV";
          x["energy above hull"] = x["energy above hull"] + "eV";
          x["predicted formation energy"] =
            x["predicted formation energy"] + "eV";
          return x;
        });
        let resultList = this.getresultlist(rawlist, this.searchMethod);
        this.$emit("resultList", resultList);
      }
    },
    getresultlist(rawlist, method) {
      switch (method) {
        case 0:
          return rawlist.filter((x) => x.formula == this.form.input);
        case 1:
          return this.getresultMethodOne(rawlist);
        case 2:
          return this.getresultMethodTwo(rawlist);
        case 3:
          return this.getresultMethodThree(rawlist);
        case 4:
          return this.getresultMethodFour(rawlist);
        case 5:
          break;
      }
    },
    getresultMethodOne(rawlist) {
      let inputelelist = this.form.input.split(",");
      //去除空元素
      inputelelist = inputelelist.filter((x) => {
        if (x) return x;
      });
      //得到元素对应编号列表
      inputelelist = inputelelist.map((x) => {
        x = x.replaceAll(/[0-9]+/g, "");
        return this.$store.state.element_table[x];
      });
      return rawlist.filter(
        (x) =>
          x.element.length >= inputelelist.length &&
          this.judgeList(inputelelist, x.element)
      );
    },
    getresultMethodTwo(rawlist) {
      let elelist = [],
        startindex = "",
        endindex = "";
      for (let i = 0; i < this.form.input.length; i++) {
        if (this.form.input[i].match(/[A-Z*]/)) {
          startindex = endindex;
          endindex = i;
          // 相比之前的切片函数，少捕捉前面第一部分(因为之前已经捕捉过了，之前的捕捉是为了检查非法字符)
          // 此时必然没有非法字符，只需对比元素即可
          if (parseFloat(startindex).toString() !== "NaN")
            elelist.push(this.form.input.slice(startindex, endindex));
        }
      }
      elelist.push(this.form.input.slice(endindex, this.form.input.length));
      // 将*转化为1，*2转化为2
      elelist = elelist.map((x) => {
        if (x === "*") x = "1";
        else x = x.replace(/\*/, "");
        return x;
      });
      let inputelelist = [];
      // 提取元素信息
      elelist.forEach((x) => {
        if (x.match(/[A-Z]/)) {
          inputelelist.push(x.replace(/[0-9]/g, ""));
        }
      });
      return rawlist.filter(
        (x) =>
          x.element.length == elelist.length &&
          this.judgecharList(inputelelist, x, elelist)
      );
    },
    getresultMethodThree(rawlist) {
      let inputelelist = this.form.input.split("-");
      // 去除空元素
      inputelelist = inputelelist.filter((x) => {
        if (x) return x;
      });
      //得到元素对应编号列表
      inputelelist = inputelelist.map((x) => {
        x = x.replaceAll(/[0-9]+/g, "");
        return this.$store.state.element_table[x];
      });
      return rawlist.filter(
        (x) =>
          x.element.length == inputelelist.length &&
          this.judgeList(inputelelist, x.element)
      );
    },
    getresultMethodFour(rawlist) {
      let inputelelist = this.form.input.split("-");
      inputelelist = inputelelist.filter((x) => {
        if (x) return x;
      });
      // 后面把*号除去，此时需记录length
      let elelistlength = inputelelist.length;
      inputelelist = inputelelist.filter((x) => {
        if (!x.match(/\*/g)) return x;
      });
      inputelelist = inputelelist.map((x) => {
        x = x.replaceAll(/[0-9]+/g, "");
        return this.$store.state.element_table[x];
      });
      return rawlist.filter(
        (x) =>
          x.element.length == elelistlength &&
          this.judgeList(inputelelist, x.element)
      );
    },
    judgeList(inputelelist, elelist) {
      for (let i = 0; i < inputelelist.length; i++) {
        if (!elelist.includes(inputelelist[i])) return false;
      }
      return true;
    },
    judgecharList(inputelelist, data, elelist) {
      for (let i = 0; i < elelist.length; i++) {
        if (elelist[i].match(/[A-Z]/)) {
          // 捕捉元素种类
          if (!data.formula.includes(elelist[i])) return false;
          // 捕捉原子数量(只捕捉种类会出现Cu match Cu3的现象)
          else {
            if (!this.judgeelenum(elelist[i], data)) return false;
          }
        } else {
          let num = elelist[i];
          // *号匹配元素
          if (!this.judgecharele(num, data, inputelelist)) return false;
        }
      }
      return true;
    },
    judgeelenum(ele, data) {
      let elechar = ele.match(/[A-Za-z]+/g);
      let elenum = ele.match(/[0-9]+/g) ? ele.match(/[0-9]+/g) : ["1"];
      for (let i = 1; i < data.element.length + 1; i++) {
        if (
          data["element" + i + "num"] == elenum &&
          data["element" + i] == elechar
        )
          return true;
      }
      return false;
    },
    judgecharele(num, data, inputelelist) {
      for (let i = 1; i < data.element.length + 1; i++) {
        if (
          data["element" + i + "num"] == num &&
          !inputelelist.includes(data["element" + i])
        ) {
          return true;
        }
      }
      return false;
    },
    //判断input输入内容是否合法
    judgeinput() {
      let ElementList = [];
      let forminput = this.form.input;
      this.searchMethod =
        forminput.length > 0 ? this.judgesearchMethod(forminput) : 3;
      let inputeleList = this.sliceinput(forminput);
      [this.isabled, ElementList] = this.judgeinputeleList(inputeleList);
      this.$emit("inputList", ElementList);
    },
    judgesearchMethod(forminput) {
      if (forminput.includes("mp")) {
        // 使用Material ID搜索
        return 5;
      } else if (forminput.includes("-") && forminput.includes("*")) {
        // 使用半模糊查询
        return 4;
      } else if (forminput.includes("-")) {
        // 使用-查询
        return 3;
      } else if (forminput.includes("*")) {
        // 使用模糊查询
        return 2;
      } else if (forminput.includes(",")) {
        // 使用,查询
        return 1;
      } else {
        // 固定查询
        return 0;
      }
    },
    //切分input内容
    sliceinput(forminput) {
      let elelist = [];
      if (forminput.includes("-")) {
        elelist = forminput.split("-");
      } else if (forminput.includes(",")) {
        elelist = forminput.split(",");
      } else {
        let startindex = "";
        let endindex = "";
        for (let i = 0; i < forminput.length; i++) {
          if (forminput[i].match(/[A-Z*]/)) {
            startindex = endindex;
            endindex = i;
            if (endindex != 0 && startindex === "") {
              //捕捉436Cu2Zn3中的436
              elelist.push(forminput.slice(0, endindex));
            }
            if (parseFloat(startindex).toString() !== "NaN") {
              //捕捉436Cu2Zn3中的Cu2
              elelist.push(forminput.slice(startindex, endindex));
            }
          }
        }
        //捕捉436Cu2Zn3中的Zn3
        elelist.push(forminput.slice(endindex, forminput.length));
      }
      return elelist;
    },
    //判断切分后的内容
    judgeinputeleList(list) {
      let state = [],
        List = [];
      list.forEach((x) => {
        x.match(/[^A-Za-z0-9,*-]/) ? state.push(false) : state.push(true); //判断是否含非法字符
        let newx = x.replaceAll(/[^A-Za-z*]/g, "");
        if (
          !Object.keys(this.$store.state.isActive).includes(newx) && //判断是否含非法元素
          newx !== "" &&
          newx !== "*"
        )
          state.push(false);
        else {
          state.push(true);
          if (newx !== "") List.push(newx);
        }
      });
      return [List.length > 0 ? state.every((x) => x == true) : false, List];
    },
    //点击element-table设置该事件
    changeinput(inputlist) {
      inputlist.length > 0
        ? (this.isabled = true)
        : ((this.isabled = false), (this.searchMethod = 3));
      switch (this.searchMethod) {
        case 0:
        case 2:
          this.form.input = inputlist.join("");
          break;
        case 1:
          this.form.input = inputlist.join(",");
          break;
        case 3:
        case 4:
          this.form.input = inputlist.join("-");
          break;
        case 5:
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.el-form {
  margin-top: 15px;
  /deep/ .el-form-item__label {
    font-size: 0.1rem;
    margin-right: 0.2rem;
  }
  .el-button {
    font-size: 0.1rem;
  }

  .el-autocomplete {
    width: 400px;
    /deep/ .el-input__inner {
      font-size: 0.1rem;
    }

    .intro {
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 0.084rem;
    }
  }
}
</style>
