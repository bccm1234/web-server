<template>
  <div style="width: 100%; height: 417px" ref="dos"></div>
</template>

<script>
export default {
  name: "ele-test",
  data() {
    return {
      chartInstance: null,
      dosdata: {}
    };
  },
  mounted() {
    this.chartInstance = this.$echarts.init(this.$refs.dos);
    this.getData();
  },
  methods: {
    async getData() {
      const { data: dosdata } = await this.$axios.get(
        "/public/echart/dos/lot.json"
      );
      this.dosdata = dosdata;
      this.setOption();
    },
    setOption() {
      let source = this.dosdata.source;
      this.chartInstance.setOption({
        title: {},
        tooltip: {},
        toolbox: {
          feature: { saveAsImage: {}, dataView: {}, restore: {}, dataZoom: {} }
        },
        legend: {
          bottom: "90%",
          formatter: function (name) {
            return name;
          }
        },
        dataset: {
          source: source
        },
        xAxis: [
          {
            name: "DistanceX",
            nameLocation: "center",
            min: function (value) {
              return value.min - 0.2;
            },
            max: function (value) {
              return value.max + 0.2;
            },
            axisLabel: {
              showMaxLabel: false,
              showMinLabel: false
            },
            axisLine: { onZero: false },
            nameGap: 20,
            gridIndex: 0
          },
          {
            name: "DistanceY",
            nameLocation: "center",
            min: function (value) {
              return value.min - 0.2;
            },
            max: function (value) {
              return value.max + 0.2;
            },
            axisLabel: {
              showMaxLabel: false,
              showMinLabel: false
            },
            axisLine: { onZero: false },
            nameGap: 20,
            gridIndex: 1
          },
          {
            name: "DistanceZ",
            nameLocation: "center",
            min: function (value) {
              return value.min - 0.5;
            },
            max: function (value) {
              return value.max + 0.2;
            },
            axisLabel: {
              showMaxLabel: false,
              showMinLabel: false
            },
            axisLine: { onZero: false },
            nameGap: 20,
            gridIndex: 2
          }
        ],
        yAxis: [
          {
            axisLine: { onZero: false },
            name: "Energy(eV)",
            nameLocation: "center",
            nameGap: 20,
            gridIndex: 0
          },
          {
            axisLine: { onZero: false },
            nameLocation: "center",
            nameGap: 20,
            gridIndex: 1
          },
          {
            axisLine: { onZero: false },
            nameLocation: "center",
            nameGap: 20,
            gridIndex: 2
          }
        ],
        grid: [
          {
            // 调整每个图表的位置
            left: "5%",
            right: "65 %"
          },
          {
            left: "40%",
            right: "35%"
          },
          {
            left: "70%",
            right: "3%"
          }
        ],
        series: [
          {
            type: "line",
            name: "x axis",
            seriesLayoutBy: "row",
            encode: {
              x: "distancex",
              y: "potentialx"
            },
            showSymbol: false,
            itemStyle: { color: "rgb(0,0,255)" },
            lineStyle: { width: 1 }
          },
          {
            type: "line",
            name: "y axis",
            seriesLayoutBy: "row",
            encode: {
              x: "distancey",
              y: "potentialy"
            },
            showSymbol: false,
            itemStyle: { color: "rgb(255,0,0)" },
            lineStyle: { width: 1 },
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            type: "line",
            name: "z axis",
            seriesLayoutBy: "row",
            encode: {
              x: "distancez",
              y: "potentialz"
            },
            showSymbol: false,
            itemStyle: { color: "rgb(0,255,0)" },
            lineStyle: { width: 1 },
            xAxisIndex: 2,
            yAxisIndex: 2
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
