let cifData, cubeData, viewer, voldata;
//准备画布和cif/cube文件
function isoPrepare(config) {
  //---create canvas---//
  viewer = $3Dmol.createViewer(config.divId, {
    backgroundColor: "#EEF5FF"
  });
  //---get cif file---//
  jQuery.ajax({
    type: "get",
    url: config.cubeUrl,
    async: false,
    success: function (data) {
      cubeData = data;
    },
    error: function (hdr, status, err) {
      console.log(hdr);
      console.log(status);
      console.error("Failed to load file" + config.cifUrl + ": " + err);
    }
  });
  //---get cube file---//
  jQuery.ajax({
    type: "get",
    url: config.cifUrl,
    async: false,
    success: function (data) {
      cifData = data;
    },
    error: function (hdr, status, err) {
      console.log(hdr);
      console.log(status);
      console.error("Failed to load file" + config.cubeUrl + ": " + err);
    }
  });
}
//以默认参数创建模型
function modelCreate() {
  viewer.clear();
  //---draw isosurface part---//
  voldata = new $3Dmol.VolumeData(cubeData, "cube");
  viewer.addIsosurface(voldata, {
    isoval: 0.01,
    color: "#ffff56",
    opacity: 0.85
  });
  viewer.addIsosurface(voldata, {
    isoval: -0.01,
    color: "#78fbfd",
    opacity: 0.85
  });
  viewer.render(); /* render scene */
  //---draw atoms&bonds part---//
  viewer.addModel(cifData, "cif"); /* load data */
  viewer.addUnitCell();
  // viewer.replicateUnitCell(2,2,2,"cif"); /* supercell */
  viewer.setStyle(
    {},
    {
      stick: {
        colorscheme: "Jmol",
        radius: 0.2
      },
      sphere: {
        colorscheme: "Jmol",
        radius: 0.4
      }
    }
  );
  //---setting part---//
  viewer.setProjection("orthographic");
  viewer.rotate(-85, "x", 1000);
  viewer.zoom(1.5, 1000); /* slight zoom */
  viewer.translate(0, -150, 0, false); /* (x,y,time) */
  viewer.setZoomLimits(5, 200); /* zoomInMax, zoomOutMax*/
  viewer.zoomTo(); /* set camera */
  viewer.render(); /* render scene */
}
//修改参数并创建模型
function resetting(config) {
  console.log("setting success!");
  //Remove all shape objects from viewer
  viewer.removeAllShapes();
  //---draw isosurface part---//
  viewer.addIsosurface(voldata, {
    isoval: config.isovalPositive,
    color: config.isoPositiveColor,
    opacity: 0.85
  });
  viewer.addIsosurface(voldata, {
    isoval: config.isovalNegative,
    color: config.isoNegativeColor,
    opacity: 0.85
  });
  //---draw unitcell---//
  viewer.addUnitCell();
  //---setting part---//
  viewer.translate(config.translate[0], config.translate[1], 1000);
  viewer.spin(config.spinAxis, config.spinSpeed);
  viewer.render(); /* render scene */
}
function getCanvas() {
  let canvasBox = document.getElementsByClassName("containerBox")[0];
  let canvas = canvasBox.children;
  console.log(canvasBox);
  console.log(canvas);
  for (var i = 0; i < canvas.length; i++) {
    canvasBox.removeChild(canvas[i]);
  }
}
window.addEventListener(
  "message",
  function (e) {
    let Data = e.data;
    console.log(Data);
    if (Data.isClean) {
      getCanvas();
      isoPrepare(configFix);
      modelCreate();
    } else {
      let arr1 = JSON.stringify(Data);
      let arr2 = JSON.stringify(configSet);
      let xLength = 0;
      xLength += Data.translate[0];
      if (arr1 !== arr2) {
        console.log("ok");
        configSet = Data;
        resetting(configSet);
      }
    }
  },
  false
);