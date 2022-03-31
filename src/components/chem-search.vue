<template>
  <div>
    <el-form :inline="true" size="large">
      <el-form-item label="Explore Materials">
        <el-select v-model="value" class="m-2" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="input" placeholder="Please input" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Search</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
const input = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1"
  },
  {
    value: "Option2",
    label: "Option2"
  },
  {
    value: "Option3",
    label: "Option3"
  },
  {
    value: "Option4",
    label: "Option4"
  },
  {
    value: "Option5",
    label: "Option5"
  }
];
</script>

<style lang="less" scoped></style>
