<template>
  <div>
    <div v-if="bandCal.bandgap">
      <div class="band">
        <ul>
          <li class="title">Band Structure</li>
          <li class="item">
            <span>Band Gap : </span>
            <span class="itemRight">
              {{ this.assessData(bandCal.bandgap, " ev") }}
            </span>
          </li>
        </ul>
        <div style="width: 100%; height: 417px" ref="chartband"></div>
      </div>
      <div class="density">
        <div class="title">Density Of States</div>
        <div style="width: 100%; height: 417px" ref="chartdensity"></div>
      </div>
      <div class="calculation-summer">
        <ul>
          <li class="title">Calculation Summar</li>
          <li class="item">
            <span class="itemLeft">Run Type :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.runtype) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">U-values :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.u) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Energy Cutoff :</span>
            <span class="itemRight">
              {{ assessData(bandCal.summary.encut) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">code :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.code) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">Kpoint :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.kpoint) }}
            </span>
          </li>
          <li class="item">
            <span class="itemLeft">more details :</span>
            <span class="itemRight">
              {{ this.assessData(bandCal.summary.details) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "band-calucation",
  data() {
    return {
      bandCal: {},
      banddata: {},
      densitydata: {}
    };
  },
  watch: {
    "$store.getters.allInfo"() {
      this.dealInfo();
    }
  },
  async mounted() {
    const { data: banddata } = await this.$axios.get(
      "/public/echart/band/band.json"
    );
    this.$nextTick(() => {
      this.banddata = banddata;
    });
    const { data: dosdata } = await this.$axios.get(
      "/public/echart/dos/dos.json"
    );
    this.$nextTick(() => {
      this.densitydata = dosdata.source;
    });
  },
  updated() {
    setTimeout(() => {
      this.Chartband();
    }, 50);
    setTimeout(() => {
      this.Chartdensity();
    }, 50);
  },
  methods: {
    dealInfo() {
      this.bandCal = Object.assign(
        { a: 1 },
        this.$store.getters.allInfo["band-dos"].cal
      );
    },
    Chartdensity() {
      let source = this.densitydata;
      let myChart = this.$echarts.init(this.$refs.chartdensity);
      myChart.setOption({
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
    },
    Chartband() {
      let Xdata = this.banddata.source.x;
      let Ydata = this.banddata.source.y;
      let markLinedata = this.banddata.markLinedata;
      let myChart = this.$echarts.init(this.$refs.chartband);
      myChart.setOption({
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

<style lang="less" scoped>
.bandCanvas {
  width: 740px;
  height: 417px;
  margin-bottom: 10px;
}
.density {
  margin-top: 30px;
}
</style>
