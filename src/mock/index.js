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
        formula: "Cu₂O",
        element1: "Cu",
        element2: "O",
        element1Num: 2,
        element2Num: 1,
        a: "4.29Å ",
        b: "4.29Å ",
        c: "4.29Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "90.00º ",
        bandgap: "0.51eV ",
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
        a: "4.25Å ",
        b: "4.06Å ",
        c: "5.16Å ",
        "Î±": "90.00º ",
        "Î²": "92.50º ",
        "Î³": "90.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Monoclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e67e"
        },
        ID: "3",
        formula: "Cu₃O₄",
        element1: "Cu",
        element2: "O",
        element1Num: 3,
        element2Num: 4,
        a: "9.02Å ",
        b: "9.02Å ",
        c: "9.02Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "90.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Cubic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e67f"
        },
        ID: "4",
        formula: "Cu₄O₃",
        element1: "Cu",
        element2: "O",
        element1Num: 4,
        element2Num: 3,
        a: "5.91Å ",
        b: "5.91Å ",
        c: "9.84Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "90.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Tetragonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e680"
        },
        ID: "5",
        formula: "Cu₂O₃",
        element1: "Cu",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "3.61Å ",
        b: "9.73Å ",
        c: "11.92Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "90.00º ",
        bandgap: "0.14eV ",
        "crystal system": "Orthorhombic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e681"
        },
        ID: "6",
        formula: "Cu₂O₃",
        element1: "Cu",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "9.34Å ",
        b: "9.34Å ",
        c: "9.34Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "90.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Cubic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e682"
        },
        ID: "7",
        formula: "Ti₂O",
        element1: "Ti",
        element2: "O",
        element1Num: 2,
        element2Num: 1,
        a: "2.98Å ",
        b: "2.98Å ",
        c: "4.80Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "120.00º ",
        bandgap: "0.00eV ",
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
        a: "5.02Å ",
        b: "5.02Å ",
        c: "2.88Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "120.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Hexagonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e684"
        },
        ID: "9",
        formula: "TiO₂",
        element1: "Ti",
        element2: "O",
        element1Num: 1,
        element2Num: 2,
        a: "12.31Å ",
        b: "3.77Å ",
        c: "6.62Å ",
        "Î±": "90.00º ",
        "Î²": "106.95º ",
        "Î³": "90.00º ",
        bandgap: "2.68eV ",
        "crystal system": "Monoclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e685"
        },
        ID: "10",
        formula: "TiO₂",
        element1: "Ti",
        element2: "O",
        element1Num: 1,
        element2Num: 2,
        a: "3.80Å ",
        b: "3.80Å ",
        c: "9.75Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "90.00º ",
        bandgap: "2.06eV ",
        "crystal system": "Tetragonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e686"
        },
        ID: "11",
        formula: "Ti₂O₃",
        element1: "Ti",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "5.11Å ",
        b: "5.11Å ",
        c: "13.98Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "120.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Trigonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e687"
        },
        ID: "12",
        formula: "Ti₃O",
        element1: "Ti",
        element2: "O",
        element1Num: 3,
        element2Num: 1,
        a: "5.16Å ",
        b: "5.16Å ",
        c: "9.51Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "120.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Trigonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e688"
        },
        ID: "13",
        formula: "Ti₃O₅",
        element1: "Ti",
        element2: "O",
        element1Num: 3,
        element2Num: 5,
        a: "9.88Å ",
        b: "3.84Å ",
        c: "9.35Å ",
        "Î±": "90.00º ",
        "Î²": "91.05º ",
        "Î³": "90.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Monoclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e689"
        },
        ID: "14",
        formula: "Ti₃O₅",
        element1: "Ti",
        element2: "O",
        element1Num: 3,
        element2Num: 5,
        a: "3.80Å ",
        b: "9.90Å ",
        c: "10.07Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "90.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Orthorhombic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68a"
        },
        ID: "15",
        formula: "Ti₄O₇",
        element1: "Ti",
        element2: "O",
        element1Num: 4,
        element2Num: 7,
        a: "5.64Å ",
        b: "6.96Å ",
        c: "7.18Å ",
        "Î±": "64.18º ",
        "Î²": "71.10º ",
        "Î³": "75.11º ",
        bandgap: "0.00eV ",
        "crystal system": "Triclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68b"
        },
        ID: "16",
        formula: "Al₂O₃",
        element1: "Al",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "4.81Å ",
        b: "4.81Å ",
        c: "13.12Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "120.00º ",
        bandgap: "5.85eV ",
        "crystal system": "Trigonal"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68c"
        },
        ID: "17",
        formula: "Al₂O₃",
        element1: "Al",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "11.93Å ",
        b: "2.94Å ",
        c: "5.67Å ",
        "Î±": "90.00º ",
        "Î²": "104.03º ",
        "Î³": "90.00º ",
        bandgap: "4.46eV ",
        "crystal system": "Monoclinic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68d"
        },
        ID: "18",
        formula: "Al₂O₃",
        element1: "Al",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "4.89Å ",
        b: "8.40Å ",
        c: "9.02Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "90.00º ",
        bandgap: "4.83eV ",
        "crystal system": "Orthorhombic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68e"
        },
        ID: "19",
        formula: "Al₂O₃",
        element1: "Al",
        element2: "O",
        element1Num: 2,
        element2Num: 3,
        a: "8.98Å ",
        b: "8.98Å ",
        c: "8.98Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "90.00º ",
        bandgap: "5.22eV ",
        "crystal system": "Cubic"
      },
      {
        _id: {
          $oid: "62496e39898178ef0a76e68f"
        },
        ID: "20",
        formula: "Al₅O₈",
        element1: "Al",
        element2: "O",
        element1Num: 5,
        element2Num: 8,
        a: "5.61Å ",
        b: "5.61Å ",
        c: "8.97Å ",
        "Î±": "90.00º ",
        "Î²": "90.00º ",
        "Î³": "120.00º ",
        bandgap: "0.00eV ",
        "crystal system": "Hexagonal"
      }
    ]
  };
});
