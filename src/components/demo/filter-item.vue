<template>
  <div>
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
      <div v-show="toggle.Symmetry" class="filter-body">
        <el-form-item label="Spacegroup Symbol" prop="space group">
          <el-select v-model="spacegroup" ref="spacegroup">
            <template slot="prefix">
              <div
                v-html="spacegroup"
                style="
                  margin-left: 45px;
                  color: rgb(96, 102, 113);
                  font-size: 0.06rem;
                "
              ></div>
            </template>
            <el-option
              v-for="item in this.$store.state.spacegroup_options"
              :key="item.value"
              :label="item.value"
              :value="item.label"
            >
              <span
                style="float: left; font-size: 0.06rem"
                v-html="item.label"
              ></span>
              <span style="float: right; color: #8492a6; font-size: 0.06rem">{{
                item.value
              }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Crystal System" prop="crystal system">
          <el-select v-model="crystalsystem">
            <el-option
              v-for="item in this.$store.state.crystal_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spacegroup: "",
      crystalsystem: "",
      toggle: {
        Symmetry: true
      }
    };
  },
  methods: {
    changetoggle(isdisplay, event) {
      let formkey =
        event.target.innerHTML || event.target.nextSibling.innerHTML;
      for (let key in this.toggle) {
        if (key == formkey) {
          this.toggle[key] = isdisplay;
        } else this.toggle[key] = !isdisplay;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.el-form-item {
  text-align: left;
  margin-left: 21px;
  margin-bottom: 7px;
}
.icon-symmetry {
  display: flex;
  align-items: center;
  margin: 3px 0;
  i {
    font-size: 18px;
  }
  span {
    font-size: 0.1rem;
    font-weight: 600;
    margin-left: 3px;
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
</style>
