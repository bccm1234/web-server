function crystal(config) {
  let viewer = new ChemDoodle.TransformCanvas3D(
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

  //ChemDoodle.io.file.conten 内置ajax
  ChemDoodle.io.file.content(config.cifUrl, function (fileContent) {
    // you can change the last three parameter here to generate a supercell
    let cif = ChemDoodle.readCIF(
      fileContent,
      config.xyz[0],
      config.xyz[1],
      config.xyz[2]
    );
    viewer.loadContent([cif.molecule], [cif.unitCell]);
  });
}