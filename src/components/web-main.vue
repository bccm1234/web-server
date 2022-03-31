<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <chemsearch></chemsearch>
        <mytable></mytable>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import mytable from "@/components/my-table.vue";
import chemsearch from "@/components/chem-search.vue";
export default {
  components: {
    mytable,
    chemsearch
  }
};
</script>

<style lang="less" scoped></style>
