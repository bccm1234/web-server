import Mock from "mockjs";
Mock.mock("/childpage/elementcolor", "get", () => {
  return {
    status: 200,
    message: "get data successfully!",
    data: [
      { id: 1, element: "H", color: "#ffffff" },
      { id: 2, element: "He", color: "#d9ffff" },
      { id: 3, element: "Li", color: "#cc80ff" },
      { id: 4, element: "Be", color: "#c2ff00" },
      { id: 5, element: "B", color: "#ffb5b5" },
      { id: 6, element: "C", color: "#909090" },
      { id: 7, element: "N", color: "#3050f8" },
      { id: 8, element: "O", color: "#ff0d0d" },
      { id: 9, element: "F", color: "#90e050" },
      { id: 10, element: "Ne", color: "#b3e3f5" },
      { id: 11, element: "Na", color: "#ab5cf2" },
      { id: 12, element: "Mg", color: "#8aff00" },
      { id: 13, element: "Al", color: "#bfa6a6" },
      { id: 14, element: "Si", color: "#f0c8a0" },
      { id: 15, element: "P", color: "#ff8000" },
      { id: 16, element: "S", color: "#ffff30" },
      { id: 17, element: "Cl", color: "#1ff01f" },
      { id: 18, element: "Ar", color: "#80d1e3" },
      { id: 19, element: "K", color: "#8f40d4" },
      { id: 21, element: "Sc", color: "#e6e6e6" },
      { id: 22, element: "Ti", color: "#bfc2c7" },
      { id: 23, element: "V", color: "#a6a6ab" },
      { id: 24, element: "cr", color: "#8a99c7" },
      { id: 25, element: "Mn", color: "#9c7ac7" },
      { id: 26, element: "Fe", color: "#e06633" },
      { id: 27, element: "Co", color: "#f090a0" },
      { id: 28, element: "Ni", color: "#50d050" },
      { id: 29, element: "Cu", color: "#c88033" },
      { id: 30, element: "Zn", color: "#7d80b0" },
      { id: 31, element: "Ga", color: "#c28f8f" },
      { id: 32, element: "Ge", color: "#668f8f" },
      { id: 33, element: "As", color: "#bd80e3" },
      { id: 34, element: "Se", color: "#ffa100" },
      { id: 35, element: "Br", color: "#a62929" },
      { id: 36, element: "Kr", color: "#5cb8d1" },
      { id: 37, element: "Rb", color: "#702eb0" },
      { id: 38, element: "Sr", color: "#00ff00" },
      { id: 39, element: "Y", color: "#94ffff" },
      { id: 40, element: "Zr", color: "#94e0e0" },
      { id: 41, element: "Nb", color: "#73c2c9" },
      { id: 42, element: "Mo", color: "#54b5b5" },
      { id: 43, element: "Tc", color: "#3b9e9e" },
      { id: 44, element: "Ru", color: "#248f8f" },
      { id: 45, element: "Rh", color: "#0a7d8c" },
      { id: 46, element: "Pd", color: "#006985" },
      { id: 47, element: "Ag", color: "#c0c0c0" },
      { id: 48, element: "Cd", color: "#ffd98f" },
      { id: 49, element: "In", color: "#a67573" },
      { id: 50, element: "Sn", color: "#668080" },
      { id: 51, element: "Sb", color: "#9e63b5" },
      { id: 52, element: "Te", color: "#d47a00" },
      { id: 53, element: "I", color: "#940094" },
      { id: 54, element: "Xe", color: "#429eb0" },
      { id: 55, element: "Cs", color: "#57178f" },
      { id: 56, element: "Ba", color: "#00c900" },
      { id: 57, element: "La", color: "#70d4ff" },
      { id: 58, element: "Ce", color: "#ffffc7" },
      { id: 59, element: "Pr", color: "#d9ffc7" },
      { id: 60, element: "Nd", color: "#c7ffc7" },
      { id: 61, element: "Pm", color: "#a3ffc7" },
      { id: 62, element: "Sm", color: "#8fffc7" },
      { id: 63, element: "Eu", color: "#61ffc7" },
      { id: 64, element: "Gd", color: "#45ffc7" },
      { id: 65, element: "Tb", color: "#30ffc7" },
      { id: 66, element: "Dy", color: "#1fffc7" },
      { id: 67, element: "Ho", color: "#00ff9c" },
      { id: 68, element: "Er", color: "#00e675" },
      { id: 69, element: "Tm", color: "#00d452" },
      { id: 70, element: "Yb", color: "#00bf38" },
      { id: 71, element: "Lu", color: "#00ab24" },
      { id: 72, element: "Hf", color: "#4dc2ff" },
      { id: 73, element: "Ta", color: "#4da6ff" },
      { id: 74, element: "W", color: "#2194d6" },
      { id: 75, element: "Re", color: "#267dab" },
      { id: 76, element: "Os", color: "#266696" },
      { id: 77, element: "Ir", color: "#175487" },
      { id: 78, element: "Pt", color: "#d0d0e0" },
      { id: 79, element: "Au", color: "#ffd123" },
      { id: 80, element: "Hg", color: "#b8b8d0" },
      { id: 81, element: "Tl", color: "#a6544d" },
      { id: 82, element: "Pb", color: "#575961" },
      { id: 83, element: "Bi", color: "#9e4fb5" },
      { id: 84, element: "Po", color: "#ab5c00" },
      { id: 85, element: "At", color: "#754f45" },
      { id: 86, element: "Rn", color: "#428296" },
      { id: 87, element: "Fr", color: "#420066" },
      { id: 88, element: "Ra", color: "#007d00" },
      { id: 89, element: "Ac", color: "#70abfa" },
      { id: 90, element: "Th", color: "#00baff" },
      { id: 91, element: "Pa", color: "#00a1ff" },
      { id: 92, element: "U", color: "#008fff" },
      { id: 93, element: "Np", color: "#0080ff" },
      { id: 94, element: "Pu", color: "#006bff" },
      { id: 95, element: "Am", color: "#545cf2" },
      { id: 96, element: "Cm", color: "#785ce3" },
      { id: 97, element: "Bk", color: "#8a4fe3" },
      { id: 98, element: "Cf", color: "#a136d4" },
      { id: 99, element: "Es", color: "#b31fd4" },
      { id: 100, element: "Fm", color: "#b31fba" },
      { id: 101, element: "Md", color: "#b30da6" },
      { id: 102, element: "No", color: "#bd0d87" },
      { id: 103, element: "Lr", color: "#c70066" },
      { id: 104, element: "Rf", color: "#cc0059" },
      { id: 105, element: "Db", color: "#d1004f" },
      { id: 106, element: "Sg", color: "#d90045" },
      { id: 107, element: "Bh", color: "#e00038" },
      { id: 108, element: "Hs", color: "#e6002e" },
      { id: 109, element: "Mt", color: "#eb0026" }
    ]
  };
});