var fs = require("fs");
var source = [
  {
    name: "Γ",
    xAxis: 0
  },
  {
    name: "L",
    xAxis: 0.533
  },
  {
    name: "T",
    xAxis: 1.263
  },
  {
    name: "Γ",
    xAxis: 2.169
  },
  {
    name: "F",
    xAxis: 2.909
  }
];
var json = {};
for (let i = 0; i < source.length; i++) {
  // let j = source[i][0];
  json[i] = source[i];
}
// console.log(JSON.stringify(json));
fs.writeFile("band.json", JSON.stringify(json), { flag: "a" }, function (err) {
  if (err) {
    console.log(err);
  }
});
