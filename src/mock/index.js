// import Mock from "mockjs";
// Mock.mock("/index/element", "get", () => {
//   return {
//     status: 200,
//     message: "get data successfully!",
//     data: [
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe342"
//         },
//         id: 1,
//         formula: "Cu2O",
//         element: [8, 29],
//         element1: "Cu",
//         element2: "O",
//         element1num: 2,
//         element2num: 1,
//         a: 4.29,
//         b: 4.29,
//         c: 4.29,
//         α: 90,
//         β: 90,
//         γ: 90,
//         volume: 78.83,
//         "band gap": 0.51,
//         "crystal system": "cubic",
//         "space group": "Pn-3m",
//         "energy above hull": 0,
//         "predicted formation energy": -0.644,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0.01,
//         "experimentally observed": "yes",
//         experiment: {
//           a: 4.2,
//           b: 4.2,
//           c: 4.2,
//           α: 90,
//           β: 90,
//           γ: 90,
//           doi: "https://doi.org/10.2788/33777"
//         }
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe343"
//         },
//         id: 2,
//         formula: "CuO",
//         element: [8, 29],
//         element1: "Cu",
//         element2: "O",
//         element1num: 1,
//         element2num: 1,
//         a: 4.25,
//         b: 4.06,
//         c: 5.16,
//         α: 90,
//         β: 92.5,
//         γ: 90,
//         volume: 88.97,
//         "band gap": 0,
//         "crystal system": "monoclinic",
//         "space group": "C2/c",
//         "energy above hull": 0,
//         "predicted formation energy": -0.943,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe344"
//         },
//         id: 3,
//         formula: "Cu3O4",
//         element1: "Cu",
//         element2: "O",
//         element: [8, 29],
//         element1num: 3,
//         element2num: 4,
//         a: 9.02,
//         b: 9.02,
//         c: 9.02,
//         α: 90,
//         β: 90,
//         γ: 90,
//         volume: 733.66,
//         "band gap": 0,
//         "crystal system": "cubic",
//         "space group": "Fm-3m",
//         "energy above hull": 0.066,
//         "predicted formation energy": -0.798,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "no"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe345"
//         },
//         id: 4,
//         formula: "Cu4O3",
//         element: [8, 29],
//         element1: "Cu",
//         element2: "O",
//         element1num: 4,
//         element2num: 3,
//         a: 5.91,
//         b: 5.91,
//         c: 9.84,
//         α: 90,
//         β: 90,
//         γ: 90,
//         volume: 343.53,
//         cifUrl: "",
//         "band gap": 0,
//         "crystal system": "tetragonal",
//         "space group": "I4_1/amd",
//         "energy above hull": 0.008,
//         "predicted formation energy": -0.807,
//         "magnetic ordering": "ferromagnetic",
//         "total magnetization": 1.02,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe346"
//         },
//         id: 5,
//         formula: "Cu2O3",
//         element: [8, 29],
//         element1: "Cu",
//         element2: "O",
//         element1num: 2,
//         element2num: 3,
//         a: 3.61,
//         b: 9.73,
//         c: 11.92,
//         α: 90,
//         β: 90,
//         γ: 90,
//         volume: 418.45,
//         "band gap": 0.14,
//         "crystal system": "orthorhombic",
//         "space group": "Fdd2",
//         "energy above hull": 0.005,
//         "predicted formation energy": -0.828,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "no"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe347"
//         },
//         id: 6,
//         formula: "Cu2O3",
//         element: [8, 29],
//         element1: "Cu",
//         element2: "O",
//         element1num: 2,
//         element2num: 3,
//         a: 9.34,
//         b: 9.34,
//         c: 9.34,
//         α: 90,
//         β: 90,
//         γ: 90,
//         volume: 814.83,
//         "band gap": 0,
//         "crystal system": "cubic",
//         "space group": "Ia-3",
//         "energy above hull": 0,
//         "predicted formation energy": -0.833,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "no"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe348"
//         },
//         id: 7,
//         formula: "Ti2O",
//         element: [8, 22],
//         element1: "Ti",
//         element2: "O",
//         element1num: 2,
//         element2num: 1,
//         a: 2.98,
//         b: 2.98,
//         c: 4.8,
//         α: 90,
//         β: 90,
//         γ: 120,
//         volume: 37.01,
//         "band gap": 0,
//         "crystal system": "trigonal",
//         "space group": "P-3m1",
//         "energy above hull": 0,
//         "predicted formation energy": -2.036,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe349"
//         },
//         id: 8,
//         formula: "TiO",
//         element: [8, 22],
//         element1: "Ti",
//         element2: "O",
//         element1num: 1,
//         element2num: 1,
//         a: 5.02,
//         b: 5.02,
//         c: 2.88,
//         α: 90,
//         β: 90,
//         γ: 120,
//         volume: 62.86,
//         "band gap": 0,
//         "crystal system": "hexagonal",
//         "space group": "P-62m",
//         "energy above hull": 0,
//         "predicted formation energy": -2.908,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe34a"
//         },
//         id: 9,
//         formula: "TiO2",
//         element: [8, 22],
//         element1: "Ti",
//         element2: "O",
//         element1num: 1,
//         element2num: 2,
//         a: 12.31,
//         b: 3.77,
//         c: 6.62,
//         α: 90,
//         β: 106.95,
//         γ: 90,
//         volume: 293.41,
//         "band gap": 2.68,
//         "crystal system": "monoclinic",
//         "space group": "C2/m",
//         "energy above hull": 0,
//         "predicted formation energy": -3.502,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe34b"
//         },
//         id: 10,
//         formula: "TiO2",
//         element: [8, 22],
//         element1: "Ti",
//         element2: "O",
//         element1num: 1,
//         element2num: 2,
//         a: 3.8,
//         b: 3.8,
//         c: 9.75,
//         α: 90,
//         β: 90,
//         γ: 90,
//         volume: 140.96,
//         "band gap": 2.06,
//         "crystal system": "tetragonal",
//         "space group": "I4_1/amd",
//         "energy above hull": 0.006,
//         "predicted formation energy": -3.495,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe34c"
//         },
//         id: 11,
//         formula: "Ti2O3",
//         element: [8, 22],
//         element1: "Ti",
//         element2: "O",
//         element1num: 2,
//         element2num: 3,
//         a: 5.11,
//         b: 5.11,
//         c: 13.98,
//         α: 90,
//         β: 90,
//         γ: 120,
//         volume: 316.57,
//         "band gap": 0,
//         "crystal system": "trigonal",
//         "space group": "R-3c",
//         "energy above hull": 0,
//         "predicted formation energy": -3.303,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe34d"
//         },
//         id: 12,
//         formula: "Ti3O",
//         element: [8, 22],
//         element1: "Ti",
//         element2: "O",
//         element1num: 3,
//         element2num: 1,
//         a: 5.16,
//         b: 5.16,
//         c: 9.51,
//         α: 90,
//         β: 90,
//         γ: 120,
//         volume: 219.03,
//         "band gap": 0,
//         "crystal system": "trigonal",
//         "space group": "P-31c",
//         "energy above hull": 0,
//         "predicted formation energy": -1.57,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe34e"
//         },
//         id: 13,
//         formula: "Ti3O5",
//         element: [8, 22],
//         element1: "Ti",
//         element2: "O",
//         element1num: 3,
//         element2num: 5,
//         a: 9.88,
//         b: 3.84,
//         c: 9.35,
//         α: 90,
//         β: 91.05,
//         γ: 90,
//         volume: 354.69,
//         "band gap": 0,
//         "crystal system": "monoclinic",
//         "space group": "C2/m",
//         "energy above hull": 0,
//         "predicted formation energy": -3.38,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0.01,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe34f"
//         },
//         id: 14,
//         formula: "Ti3O5",
//         element: [8, 22],
//         element1: "Ti",
//         element2: "O",
//         element1num: 3,
//         element2num: 5,
//         a: 3.8,
//         b: 9.9,
//         c: 10.07,
//         α: 90,
//         β: 90,
//         γ: 90,
//         volume: 378.35,
//         "band gap": 0,
//         "crystal system": "orthorhombic",
//         "space group": "Cmcm",
//         "energy above hull": 0.005,
//         "predicted formation energy": -3.375,
//         "magnetic ordering": "ferromagnetic",
//         "total magnetization": 2,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe350"
//         },
//         id: 15,
//         formula: "Ti4O7",
//         element: [8, 22],
//         element1: "Ti",
//         element2: "O",
//         element1num: 4,
//         element2num: 7,
//         a: 5.64,
//         b: 6.96,
//         c: 7.18,
//         α: 64.18,
//         β: 71.1,
//         γ: 75.11,
//         volume: 237.73,
//         "band gap": 0,
//         "crystal system": "triclinic",
//         "space group": "P-1",
//         "energy above hull": 0.005,
//         "predicted formation energy": -3.409,
//         "magnetic ordering": "ferromagnetic",
//         "total magnetization": 0.98,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe351"
//         },
//         id: 16,
//         formula: "Al2O3",
//         element: [8, 13],
//         element1: "Al",
//         element2: "O",
//         element1num: 2,
//         element2num: 3,
//         a: 4.81,
//         b: 4.81,
//         c: 13.12,
//         α: 90,
//         β: 90,
//         γ: 120,
//         volume: 262.26,
//         "band gap": 5.85,
//         "crystal system": "trigonal",
//         "space group": "R-3c",
//         "energy above hull": 0,
//         "predicted formation energy": -3.427,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe352"
//         },
//         id: 17,
//         formula: "Al2O3",
//         element: [8, 13],
//         element1: "Al",
//         element2: "O",
//         element1num: 2,
//         element2num: 3,
//         a: 11.93,
//         b: 2.94,
//         c: 5.67,
//         α: 90,
//         β: 104.03,
//         γ: 90,
//         volume: 192.95,
//         "band gap": 4.46,
//         "crystal system": "monoclinic",
//         "space group": "C2/m",
//         "energy above hull": 0.009,
//         "predicted formation energy": -3.417,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe353"
//         },
//         id: 18,
//         formula: "Al2O3",
//         element: [8, 13],
//         element1: "Al",
//         element2: "O",
//         element1num: 2,
//         element2num: 3,
//         a: 4.89,
//         b: 8.4,
//         c: 9.02,
//         α: 90,
//         β: 90,
//         γ: 90,
//         volume: 370.29,
//         "band gap": 4.83,
//         "crystal system": "orthorhombic",
//         "space group": "Pna2_1",
//         "energy above hull": 0.017,
//         "predicted formation energy": -3.41,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "yes"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe354"
//         },
//         id: 19,
//         formula: "Al2O3",
//         element: [8, 13],
//         element1: "Al",
//         element2: "O",
//         element1num: 2,
//         element2num: 3,
//         a: 8.98,
//         b: 8.98,
//         c: 8.98,
//         α: 90,
//         β: 90,
//         γ: 90,
//         volume: 723.31,
//         "band gap": 5.22,
//         "crystal system": "cubic",
//         "space group": "Ia-3",
//         "energy above hull": 0.03,
//         "predicted formation energy": -3.397,
//         "magnetic ordering": "non-magnetic",
//         "total magnetization": 0,
//         "experimentally observed": "no"
//       },
//       {
//         _id: {
//           $oid: "624d965e979ab34e785fe355"
//         },
//         id: 20,
//         formula: "Al5O8",
//         element: [8, 13],
//         element1: "Al",
//         element2: "O",
//         element1num: 5,
//         element2num: 8,
//         a: 5.61,
//         b: 5.61,
//         c: 8.97,
//         α: 90,
//         β: 90,
//         γ: 120,
//         volume: 244.11,
//         "band gap": 0,
//         "crystal system": "hexagonal",
//         "space group": "P6_3mc",
//         "energy above hull": 0.063,
//         "predicted formation energy": -3.231,
//         "magnetic ordering": "ferromagnetic",
//         "total magnetization": 1,
//         "experimentally observed": "yes"
//       }
//     ]
//   };
// });
