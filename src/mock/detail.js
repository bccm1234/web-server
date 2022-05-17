import Mock from "mockjs";
Mock.mock("/childpage/spacegroup", "get", () => {
  return {
    status: 200,
    message: "get data successfully!",
    data: {
      _id: {
        $oid: "613b53ed3900000023006b62"
      },
      id: "mdb-1",
      formula: "Cu2O",
      name: "Cuprous oxide;Copper(I) oxide;Copper suboxide;Copper oxide",
      density: "6.03",
      crystalsystem: "Cubic",
      spacegroup: "pn-3m",
      spacegroupnum: "224",
      "crystal-strusture": {
        cal: {
          lattice: ["4.27", "4.27", "4.27", "90", "90", "90"],
          crystalsystem: "cubic",
          spacegroup: "pn-3m",
          summary: {
            runtype: "PBE",
            encut: "500",
            kpoint: "5*5*5",
            u: "no",
            code: "vasp",
            inputUrl: "unknown"
          }
        },
        exp: {
          lattice: ["4.27", "4.27", "4.27", "90", "90", "90"],
          crystalsystem: "cubic",
          spacegroup: "pn-3m",
          doi: "doi.org/10.1103/PhysRevB.25.5929"
        }
      },
      "band-dos": {
        bandUrl: "Unknown",
        dosUrl: "Unknown",
        cal: {
          bandgap: "2.10",
          summary: {
            runtype: "PBE0",
            encut: "500",
            kpoint: "5*5*5",
            u: "no",
            code: "vasp",
            inputUrl: "unknown"
          }
        },
        exp: {
          bandgap: "2.17",
          doi: "doi.org/10.1016/0031-9163(66)90044-8"
        }
      },
      "charge-density": {
        cifUrl: "unknown",
        cubeUrl: "unknown",
        summary: {
          runtype: "PBE0",
          encut: "500",
          kpoint: "5*5*5",
          u: "no",
          code: "vasp",
          inputUrl: "unknown"
        }
      }
    }
  };
});
