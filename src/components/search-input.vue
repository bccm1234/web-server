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
          @keyup.13.native="getresult"
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
    getresult() {
      this.getresultlist(this.searchMethod);
    },
    getresultlist(i) {
      console.log(i);
    },
    //判断input输入内容是否合法
    judgeinput() {
      let ElementList = [];
      let forminput = this.form.input;
      this.searchMethod = this.judgesearchMethod(forminput);
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
    //应该是点击element-table设置该事件
    changeinput(inputlist) {
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
      this.isabled = true;
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
