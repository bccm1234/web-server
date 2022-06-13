<template>
  <div style="width: 100%; height: 417px" ref="dos"></div>
</template>

<script>
export default {
  name: "dos-picture",
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
        "/public/echart/dos/dos.json"
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
          bottom: "16%",
          formatter: function (name) {
            return name;
          }
        },
        dataset: {
          source: source
        },
        xAxis: [
          {
            name: "Energy(eV)",
            nameLocation: "center",
            min: "dataMin",
            max: "dataMax",
            axisLabel: {
              showMaxLabel: false,
              showMinLabel: false
            },
            axisLine: { onZero: false }
          },
          {
            min: "dataMin",
            max: "dataMax",
            axisLabel: {
              showMaxLabel: false,
              showMinLabel: false
            },
            axisLine: { onZero: false }
          }
        ],
        yAxis: [
          {
            axisLine: { onZero: false },
            name: "Density of State",
            nameLocation: "center",
            nameGap: 20
          },
          {
            axisLine: { onZero: false },
            nameGap: 20
          }
        ],
        series: [
          {
            type: "line",
            name: "tot+",
            seriesLayoutBy: "row",
            encode: {
              x: "energy",
              y: "tot+"
            },
            showSymbol: false,
            itemStyle: { color: "rgb(135,135,135)" },
            lineStyle: { width: 1 },
            areaStyle: { color: "rgb(200,200,200)" }
          },
          {
            type: "line",
            name: "tot-",
            seriesLayoutBy: "row",
            encode: {
              x: "energy",
              y: "tot-"
            },
            showSymbol: false,
            itemStyle: { color: "rgb(135,135,135)" },
            lineStyle: { width: 1 },
            areaStyle: { color: "rgb(200,200,200)" }
          },
          {
            type: "line",
            name: "s+",
            seriesLayoutBy: "row",
            encode: {
              x: "energy",
              y: "s+"
            },
            showSymbol: false,
            itemStyle: { color: "rgb(255,0,0)" },
            lineStyle: { width: 1 }
          },
          {
            type: "line",
            name: "s-",
            seriesLayoutBy: "row",
            encode: {
              x: "energy",
              y: "s-"
            },
            showSymbol: false,
            itemStyle: { color: "rgb(255,0,0)" },
            lineStyle: { width: 1 }
          },
          {
            type: "line",
            name: "p+",
            seriesLayoutBy: "row",
            encode: {
              x: "energy",
              y: "p+"
            },
            showSymbol: false,
            itemStyle: { color: "#0000FF" },
            lineStyle: { width: 1 }
          },
          {
            type: "line",
            name: "p-",
            seriesLayoutBy: "row",
            encode: {
              x: "energy",
              y: "p-"
            },
            showSymbol: false,
            itemStyle: { color: "#0000FF" },
            lineStyle: { width: 1 }
          },
          {
            type: "line",
            name: "d+",
            seriesLayoutBy: "row",
            encode: {
              x: "energy",
              y: "d+"
            },
            showSymbol: false,
            itemStyle: { color: "#00FF00" },
            lineStyle: { width: 1 }
          },
          {
            type: "line",
            name: "d-",
            seriesLayoutBy: "row",
            encode: {
              x: "energy",
              y: "d-"
            },
            showSymbol: false,
            itemStyle: { color: "#00FF00" },
            lineStyle: { width: 1 }
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
