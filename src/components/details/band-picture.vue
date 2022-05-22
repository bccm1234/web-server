<template>
  <div style="width: 100%; height: 417px" ref="band"></div>
</template>

<script>
export default {
  name: "band-picture",
  data() {
    return {
      chartInstance: null,
      banddata: {}
    };
  },
  mounted() {
    this.chartInstance = this.$echarts.init(this.$refs.band);
    this.getData();
  },
  methods: {
    async getData() {
      const { data: banddata } = await this.$axios.get(
        "/public/echart/band/band.json"
      );
      this.banddata = banddata;
      this.setOption();
    },
    setOption() {
      let Xdata = this.banddata.source.x;
      let Ydata = this.banddata.source.y;
      let markLinedata = this.banddata.markLinedata;
      this.chartInstance.setOption({
        title: {},
        tooltip: {},
        toolbox: {
          feature: { saveAsImage: {}, dataView: {}, restore: {}, dataZoom: {} }
        },
        dataset: {
          source: [Xdata, Ydata]
        },
        xAxis: [
          {
            axisLine: { onZero: false },
            min: "dataMin",
            max: function (value) {
              return value.max + 0.001;
            },
            position: "bottom",
            axisLabel: { show: false },
            axisTick: { show: false }
          },
          {
            axisLine: { onZero: false },
            min: "dataMin",
            max: "dataMax",
            position: "top"
          }
        ],
        yAxis: [
          {
            axisLine: { onZero: false },
            min: -15,
            max: 12,
            axisLabel: { showMaxLabel: false },
            name: "Energy(eV)",
            nameLocation: "center",
            position: "left"
          },
          {
            axisLine: { onZero: false },
            axisLabel: {},
            position: "right"
          }
        ],
        series: [
          {
            type: "line",
            seriesLayoutBy: "row",
            showSymbol: false,
            itemStyle: { color: "#FF0000" },
            markLine: {
              symbol: ["none", "none"], //去掉箭头
              lineStyle: { type: "dashed", color: "black" },
              label: { position: "start", formatter: "{b}" },
              data: markLinedata
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
