<template>
  <div class="nav-head">
    <img src="@/assets/logo.png" />
    <div>
      <ul>
        <li>
          <el-button type="text" style="color: white">Home</el-button>
        </li>
        <li>
          <el-button type="text" style="color: white"
            >About<el-icon><arrow-down /></el-icon
          ></el-button>
        </li>
        <li>
          <el-button type="text" style="color: white"
            >Apps<el-icon><arrow-down /></el-icon
          ></el-button>
        </li>
        <li>
          <el-button type="text" style="color: white">Documents</el-button>
        </li>
        <li>
          <svg
            t="1647324557458"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3189"
            width="16"
            height="16"
          >
            <path
              d="M573.2 646.5H309.8c-12.6 0-20.8-5.8-22.9-16.1-0.4-2.1-0.4-4.2-0.4-6.4V397.2c0-14.3 7.8-22 22.3-22H573.1v-6.9-201.8c0-9.3 4.4-16.6 11.9-19.5 8.6-3.3 16.2-1.8 22.7 5.1 3.7 3.9 7.8 7.5 11.6 11.4 48.2 48.1 96.3 96.2 144.5 144.2 61.9 61.7 123.7 123.4 185.6 185.2 10.3 10.3 10.4 21.1 0.2 31.2-88.5 88.4-177 176.8-265.6 265.1-25.2 25.1-50.5 50.1-75.7 75.2-6.5 6.5-13.7 9.3-22.5 6-8.6-3.3-12.6-10-12.6-20.7V646.5z m-159-497.3v76.4H212.9c-41 0-71.3 30.3-71.3 71.4 0 142.3 0.3 284.6-0.2 426.9-0.1 37.7 28.5 64.8 55 69.7 5.9 1.1 11.9 1.6 17.9 1.6 64.2 0.1 128.4 0.1 192.6 0.1h7.2v76c-0.9 0.2-2 0.6-3 0.6-68.2 0-136.5 0.7-204.7-0.3-66.7-1-125.7-51.6-138.5-117.1-1.8-9.2-2.7-18.8-2.7-28.2-0.2-143.8-0.5-287.7 0.1-431.5 0.3-60.1 30.1-103.2 82.2-131.2 18.4-9.9 38.7-14.4 59.6-14.4 67.7-0.2 135.3-0.1 203-0.1 1.1 0 2.3 0.1 4.1 0.1z m0 0"
              p-id="3190"
              fill="#ffffff"
            ></path>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-head",
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
.nav-head {
  height: 75px;
  background-color: rgb(26, 36, 47);
  img {
    height: 71px;
    float: left;
    display: block;
    padding: 2px 20px 2px;
    font-size: 20px;
  }
  div {
    color: white;
    float: right;
    height: 100%;
    margin: 0px;
    width: 450px;
    padding-right: 5%;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
