let cifData, viewer;
//准备画布和cif文件
function crystalPrepare(cifUrl) {
  //---create canvas---//
  viewer = new ChemDoodle.TransformCanvas3D(
    "canvasDom",
    420,
    420
  ); /* setup canvas (name, width, height) */
  viewer.styles.set3DRepresentation(
    "Ball and Stick"
  ); /* set the atom/bond 'Stick', 'Line', 'van der Waals Spheres'(ball), 'Wireframe' */
  viewer.styles.backgroundColor = "#EEF5FF"; /* set canvas bgc */
  viewer.styles.projectionPerspective_3D = false; /* 是否开透视 */
  viewer.styles.shapes_color = "black"; /* unitcell box line color */
  viewer.styles.atoms_useJMOLColors = true; /* 原子颜色用Jmol */
  viewer.styles.compass_display = true; /* 添加罗盘 */
  viewer.styles.compass_size_3D = 40; /* 罗盘大小 */
  //get cif file
  jQuery.ajax({
    type: "get",
    url: cifUrl,
    async: false,
    success: function (data) {
      cifData = data;
    },
    error: function (hdr, status, err) {
      console.log(hdr);
      console.log(status);
      console.error("Failed to load file" + cifUrl + ": " + err);
    }
  });
}
//以默认参数创建模型
function modelCreate() {
  let cif = ChemDoodle.readCIF(cifData, 2, 2, 2);
  viewer.loadContent([cif.molecule], [cif.unitCell]);
}
//修改参数并创建模型
function resetting(xyz) {
  let cif = ChemDoodle.readCIF(cifData, xyz[0], xyz[1], xyz[2]);
  viewer.loadContent([cif.molecule], [cif.unitCell]);
}
window.addEventListener(
  "message",
  function (e) {
    let Data = e.data;
    console.log(Data);
    if (Data == "refresh") {
      getCanvas();
      crystalPrepare(cifUrl);
      modelCreate();
    } else {
      for (let i = 0; i < Data.length; i++) {
        if (xyz[i] !== Data[i]) {
          xyz = Data;
          resetting(xyz);
          break;
        }
      }
    }
  },
  false
);
function getCanvas() {
  let canvasBox = document.getElementsByClassName("containerBox")[0];
  let canvas = canvasBox.children;
  console.log(canvasBox);
  console.log(canvas);
  for (var i = 0; i < canvas.length; i++) {
    canvasBox.removeChild(canvas[i]);
  }
}