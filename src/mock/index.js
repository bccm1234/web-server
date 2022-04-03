import Mock from "mockjs";
Mock.mock("/index/element", "get", () => {
  return {
    status: 200,
    message: "get data successfully ðŸ¥³",
    data: [
      {
        _id: {
          $oid: "62496e39898178ef0a76e67c"
        },
        ID: "1",
        formula: "Cuâ‚‚O",
        element1: "Cu",
        element2: "O",
        element1Num: 2,
        element2Num: 1,
        a: "4.29 Ã…",
        b: "4.29 Ã…",
        c: "4.29 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "90.00 Âº",
        bandgap: "0.51 eV",
        "crystal system": "Cubic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e67d"
        },
        ID: "2",
        formula: "CuO",
        element1: "Cu",
        element2: "O",
        element1Num: 1,
        element2Num: 1,
        a: "4.25 Ã…",
        b: "4.06 Ã…",
        c: "5.16 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "92.50 Âº",
        "Î³": "90.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Monoclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e67e"
        },
        ID: "3",
        formula: "Cuâ‚ƒOâ‚„",
        element1: "Cu",
        element2: "O",
        element1Num: 3,
        element2Num: 4,
        a: "9.02 Ã…",
        b: "9.02 Ã…",
        c: "9.02 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "90.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Cubic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e67f"
        },
        ID: "4",
        formula: "Cuâ‚„Oâ‚ƒ",
        element1: "Cu",
        element2: "O",
        element1Num: 4,
        element2Num: 3,
        a: "5.91 Ã…",
        b: "5.91 Ã…",
        c: "9.84 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "90.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Tetragonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e680"
        },
        ID: "5",
        formula: "Cuâ‚‚Oâ‚ƒ",
        element1: "Cu",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "3.61 Ã…",
        b: "9.73 Ã…",
        c: "11.92 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "90.00 Âº",
        bandgap: "0.14 eV",
        "crystal system": "Orthorhombic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e681"
        },
        ID: "6",
        formula: "Cuâ‚‚Oâ‚ƒ",
        element1: "Cu",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "9.34 Ã…",
        b: "9.34 Ã…",
        c: "9.34 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "90.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Cubic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e682"
        },
        ID: "7",
        formula: "Tiâ‚‚O",
        element1: "Ti",
        element2: "O",
        element1Num: 2,
        element2Num: 1,
        a: "2.98 Ã…",
        b: "2.98 Ã…",
        c: "4.80 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "120.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Trigonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e683"
        },
        ID: "8",
        formula: "TiO",
        element1: "Ti",
        element2: "O",
        element1Num: 1,
        element2Num: 1,
        a: "5.02 Ã…",
        b: "5.02 Ã…",
        c: "2.88 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "120.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Hexagonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e684"
        },
        ID: "9",
        formula: "TiOâ‚‚",
        element1: "Ti",
        element2: "O",
        element1Num: 1,
        element2Num: 2,
        a: "12.31 Ã…",
        b: "3.77 Ã…",
        c: "6.62 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "106.95 Âº",
        "Î³": "90.00 Âº",
        bandgap: "2.68 eV",
        "crystal system": "Monoclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e685"
        },
        ID: "10",
        formula: "TiOâ‚‚",
        element1: "Ti",
        element2: "O",
        element1Num: 1,
        element2Num: 2,
        a: "3.80 Ã…",
        b: "3.80 Ã…",
        c: "9.75 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "90.00 Âº",
        bandgap: "2.06 eV",
        "crystal system": "Tetragonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e686"
        },
        ID: "11",
        formula: "Tiâ‚‚Oâ‚ƒ",
        element1: "Ti",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "5.11 Ã…",
        b: "5.11 Ã…",
        c: "13.98 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "120.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Trigonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e687"
        },
        ID: "12",
        formula: "Tiâ‚ƒO",
        element1: "Ti",
        element2: "O",
        element1Num: 3,
        element2Num: 1,
        a: "5.16 Ã…",
        b: "5.16 Ã…",
        c: "9.51 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "120.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Trigonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e688"
        },
        ID: "13",
        formula: "Tiâ‚ƒOâ‚…",
        element1: "Ti",
        element2: "O",
        element1Num: 3,
        element2Num: 5,
        a: "9.88 Ã…",
        b: "3.84 Ã…",
        c: "9.35 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "91.05 Âº",
        "Î³": "90.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Monoclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e689"
        },
        ID: "14",
        formula: "Tiâ‚ƒOâ‚…",
        element1: "Ti",
        element2: "O",
        element1Num: 3,
        element2Num: 5,
        a: "3.80 Ã…",
        b: "9.90 Ã…",
        c: "10.07 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "90.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Orthorhombic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68a"
        },
        ID: "15",
        formula: "Tiâ‚„Oâ‚‡",
        element1: "Ti",
        element2: "O",
        element1Num: 4,
        element2Num: 7,
        a: "5.64 Ã…",
        b: "6.96 Ã…",
        c: "7.18 Ã…",
        "Î±": "64.18 Âº",
        "Î²": "71.10 Âº",
        "Î³": "75.11 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Triclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68b"
        },
        ID: "16",
        formula: "Alâ‚‚Oâ‚ƒ",
        element1: "Al",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "4.81 Ã…",
        b: "4.81 Ã…",
        c: "13.12 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "120.00 Âº",
        bandgap: "5.85 eV",
        "crystal system": "Trigonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68c"
        },
        ID: "17",
        formula: "Alâ‚‚Oâ‚ƒ",
        element1: "Al",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "11.93 Ã…",
        b: "2.94 Ã…",
        c: "5.67 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "104.03 Âº",
        "Î³": "90.00 Âº",
        bandgap: "4.46 eV",
        "crystal system": "Monoclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68d"
        },
        ID: "18",
        formula: "Alâ‚‚Oâ‚ƒ",
        element1: "Al",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "4.89 Ã…",
        b: "8.40 Ã…",
        c: "9.02 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "90.00 Âº",
        bandgap: "4.83 eV",
        "crystal system": "Orthorhombic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68e"
        },
        ID: "19",
        formula: "Alâ‚‚Oâ‚ƒ",
        element1: "Al",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "8.98 Ã…",
        b: "8.98 Ã…",
        c: "8.98 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "90.00 Âº",
        bandgap: "5.22 eV",
        "crystal system": "Cubic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68f"
        },
        ID: "20",
        formula: "Alâ‚…Oâ‚ˆ",
        element1: "Al",
        element2: "O",
        element1Num: 5,
        element2Num: 8,
        a: "5.61 Ã…",
        b: "5.61 Ã…",
        c: "8.97 Ã…",
        "Î±": "90.00 Âº",
        "Î²": "90.00 Âº",
        "Î³": "120.00 Âº",
        bandgap: "0.00 eV",
        "crystal system": "Hexagonal"
      }
    ]
  };
});
