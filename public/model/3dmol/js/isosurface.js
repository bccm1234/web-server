function isoSurface(config1, config2) {
  //create canvas
  let viewer = $3Dmol.createViewer(config1.divId, {
    backgroundColor: "#EEF5FF"
  });
  //ajax get cube file
  jQuery.ajax(config1.cubeUrl, {
    success: function (data) {
      let voldata = new $3Dmol.VolumeData(data, "cube");
      viewer.addIsosurface(voldata, {
        isoval: config2.isovalPositive,
        color: config2.isoPositiveColor,
        opacity: 0.85
      });
      viewer.addIsosurface(voldata, {
        isoval: config2.isovalNegative,
        color: config2.isoNegativeColor,
        opacity: 0.85
      });
      viewer.render();
    },
    error: function (hdr, status, err) {
      console.log(hdr);
      console.log(status);
      console.error("Failed to load file" + config1.cubeUrl + ": " + err);
    }
  });
  //ajax get cif file
  jQuery.ajax(config1.cifUrl, {
    success: function (data) {
      viewer.addModel(data, "cif"); /* load data */
      viewer.addUnitCell();
      // viewer.replicateUnitCell(2,2,2,"cif");
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
      ); /* set model style */
      viewer.setProjection("orthographic");
      viewer.rotate(-85, "x", 0); /* (rotateAngle,rotateAxis,time) */
      viewer.translate(
        0 + config2.translate[0],
        -150 + config2.translate[1],
        0
      ); /* (x,y,time) */
      viewer.spin(config2.spinAxis, config2.spinSpeed);
      viewer.zoom(1.5, 1000); /* slight zoom */
      viewer.setZoomLimits(5, 200); /* zoomInMax, zoomOutMax*/
      viewer.zoomTo(); /* set camera */
      viewer.render(); /* render scene */
    },
    error: function (hdr, status, err) {
      console.log(hdr);
      console.log(status);
      console.error("Failed to load file" + config1.cifUrl + ": " + err);
    }
  });
}
