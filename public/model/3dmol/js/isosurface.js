function isoSurface(config) {
  //create canvas
  let viewer = $3Dmol.createViewer(config.divId, {
    backgroundColor: '#EEF5FF',
  });
  //ajax get cube file
  jQuery.ajax(config.cubeUrl, {
    success: function (data) {
      let voldata = new $3Dmol.VolumeData(data, "cube");
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
      viewer.render();
    },
    error: function (hdr, status, err) {
      console.log(hdr);
      console.log(status);
      console.error("Failed to load file" + config.cubeUrl + ": " + err);
    }
  });
  //ajax get cif file
  jQuery.ajax(config.cifUrl, {
    success: function (data) {
      viewer.addModel(data, 'cif'); /* load data */
      viewer.addUnitCell();
      // viewer.replicateUnitCell(2,2,2,"cif");
      viewer.setStyle({}, {
        stick: {
          colorscheme: "Jmol",
          radius: 0.2
        },
        sphere: {
          colorscheme: "Jmol",
          radius: 0.4
        }
      }); /* set model style */
      viewer.setProjection("orthographic");
      viewer.rotate(-85, "x", 0); /* (rotateAngle,rotateAxis,time) */
      viewer.translate(0 + config.translate[0], -150 + config.translate[1], 0); /* (x,y,time) */
      viewer.spin(config.spinAxis, config.spinSpeed);
      viewer.zoom(1.5, 1000); /* slight zoom */
      viewer.setZoomLimits(5, 200); /* zoomInMax, zoomOutMax*/
      viewer.zoomTo(); /* set camera */
      viewer.render(); /* render scene */
    },
    error: function (hdr, status, err) {
      console.log(hdr);
      console.log(status);
      console.error("Failed to load file" + config.cifUrl + ": " + err);
    }
  });
};