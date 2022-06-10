import Vue from "vue";
import Vuex from "vuex";
import system from "./modules/system";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    system
  },
  state: {
    element_table: {
      H: 1,
      He: 2,
      Li: 3,
      Be: 4,
      B: 5,
      C: 6,
      N: 7,
      O: 8,
      F: 9,
      Ne: 10,
      Na: 11,
      Mg: 12,
      Al: 13,
      Si: 14,
      P: 15,
      S: 16,
      Cl: 17,
      Ar: 18,
      K: 19,
      Ca: 20,
      Sc: 21,
      Ti: 22,
      V: 23,
      Cr: 24,
      Mn: 25,
      Fe: 26,
      Co: 27,
      Ni: 28,
      Cu: 29,
      Zn: 30,
      Ga: 31,
      Ge: 32,
      As: 33,
      Se: 34,
      Br: 35,
      Kr: 36,
      Rb: 37,
      Sr: 38,
      Y: 39,
      Zr: 40,
      Nb: 41,
      Mo: 42,
      Tc: 43,
      Ru: 44,
      Rh: 45,
      Pd: 46,
      Ag: 47,
      Cd: 48,
      Ln: 49,
      Sn: 50,
      Sb: 51,
      Te: 52,
      I: 53,
      Xe: 54,
      Cs: 55,
      Ba: 56,
      La: 57,
      Ce: 58,
      Pr: 59,
      Nd: 60,
      Pm: 61,
      Sm: 62,
      Eu: 63,
      Gd: 64,
      Tb: 65,
      Dy: 66,
      Ho: 67,
      Er: 68,
      Tm: 69,
      Yb: 70,
      Lu: 71,
      Hf: 72,
      Ta: 73,
      W: 74,
      Re: 75,
      Os: 76,
      Ir: 77,
      Pt: 78,
      Au: 79,
      Hg: 80,
      Tl: 81,
      Pb: 82,
      Bi: 83,
      Po: 84,
      At: 85,
      Rn: 86,
      Fr: 87,
      Ra: 88,
      Ac: 89,
      Th: 90,
      Pa: 91,
      U: 92,
      Np: 93,
      Pu: 94,
      Am: 95,
      Cm: 96,
      Bk: 97,
      Cf: 98,
      Es: 99,
      Fm: 100,
      Md: 101,
      No: 102,
      Lr: 103,
      Rf: 104,
      Db: 105,
      Sg: 106,
      Bh: 107,
      Hs: 108,
      Mt: 109,
      Ds: 110,
      Rg: 111,
      Uub: 112,
      Uut: 113,
      Uuq: 114,
      Uup: 115,
      Uuh: 116,
      UUs: 117,
      Uuo: 118
    },
    isActive: {
      "*": false,
      H: false,
      He: false,
      Li: false,
      Be: false,
      B: false,
      C: false,
      N: false,
      O: false,
      F: false,
      Ne: false,
      Na: false,
      Mg: false,
      Al: false,
      Si: false,
      P: false,
      S: false,
      Cl: false,
      Ar: false,
      K: false,
      Ca: false,
      Sc: false,
      Ti: false,
      V: false,
      Cr: false,
      Mn: false,
      Fe: false,
      Co: false,
      Ni: false,
      Cu: false,
      Zn: false,
      Ga: false,
      Ge: false,
      As: false,
      Se: false,
      Br: false,
      Kr: false,
      Rb: false,
      Sr: false,
      Y: false,
      Zr: false,
      Nb: false,
      Mo: false,
      Tc: false,
      Ru: false,
      Rh: false,
      Pd: false,
      Ag: false,
      Cd: false,
      Ln: false,
      Sn: false,
      Sb: false,
      Te: false,
      I: false,
      Xe: false,
      Cs: false,
      Ba: false,
      La: false,
      Hf: false,
      Ta: false,
      W: false,
      Re: false,
      Os: false,
      Ir: false,
      Pt: false,
      Au: false,
      Hg: false,
      Tl: false,
      Pb: false,
      Bi: false,
      Po: false,
      At: false,
      Rn: false,
      Fr: false,
      Ra: false,
      Ac: false,
      Rf: false,
      Db: false,
      Sg: false,
      Bh: false,
      Hs: false,
      Mt: false,
      Ds: false,
      Rg: false,
      Uub: false,
      Uut: false,
      Uuq: false,
      Uup: false,
      Uuh: false,
      Uus: false,
      Uuo: false,
      Ce: false,
      Pr: false,
      Nd: false,
      Pm: false,
      Sm: false,
      Eu: false,
      Gd: false,
      Tb: false,
      Dy: false,
      Ho: false,
      Er: false,
      Tm: false,
      Yb: false,
      Lu: false,
      Th: false,
      Pa: false,
      U: false,
      Np: false,
      Pu: false,
      Am: false,
      Cm: false,
      Bk: false,
      Cf: false,
      Es: false,
      Fm: false,
      Md: false,
      No: false,
      Lr: false
    },
    spacegroup_options: [
      {
        value: "1",
        label: "P1"
      },
      {
        value: "2",
        label: "P<span style='text-decoration: overline'>1</span>"
      },
      {
        value: "3",
        label: "P121"
      },
      {
        value: "4",
        label: "P12_1<span style='text-decoration: overline'>1</span>"
      },
      {
        value: "5",
        label: "C121"
      },
      {
        value: "6",
        label: "P1m1"
      },
      {
        value: "7",
        label: "P1c1"
      },
      {
        value: "8",
        label: "C1m1"
      },
      {
        value: "9",
        label: "C1c1"
      },
      {
        value: "10",
        label: "P12/m1"
      },
      {
        value: "11",
        label: "P12<sub>1</sub>/m1"
      },
      {
        value: "12",
        label: "C12/m1"
      },
      {
        value: "13",
        label: "P12/c1"
      },
      {
        value: "14",
        label: "P12<sub>1</sub>/c1"
      },
      {
        value: "15",
        label: "C12/c1"
      },
      {
        value: "16",
        label: "P222"
      },
      {
        value: "17",
        label: "P222<sub>1</sub>"
      },
      {
        value: "18",
        label:
          "P2_1<span style='text-decoration: overline'>2</span>_1<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "19",
        label:
          "P2_1<span style='text-decoration: overline'>2</span>_12<span style='text-decoration: overline'>1</span>"
      },
      {
        value: "20",
        label: "C222<sub>1</sub>"
      },
      {
        value: "21",
        label: "C222"
      },
      {
        value: "22",
        label: "F222"
      },
      {
        value: "23",
        label: "I222"
      },
      {
        value: "24",
        label:
          "I2_1<span style='text-decoration: overline'>2</span>_12<span style='text-decoration: overline'>1</span>"
      },
      {
        value: "25",
        label: "Pmm2"
      },
      {
        value: "26",
        label: "Pmc2<sub>1</sub>"
      },
      {
        value: "27",
        label: "Pcc2"
      },
      {
        value: "28",
        label: "Pma2"
      },
      {
        value: "29",
        label: "Pca2<sub>1</sub>"
      },
      {
        value: "30",
        label: "Pnc2"
      },
      {
        value: "31",
        label: "Pmn2<sub>1</sub>"
      },
      {
        value: "32",
        label: "Pba2"
      },
      {
        value: "33",
        label: "Pna2<sub>1</sub>"
      },
      {
        value: "34",
        label: "Pnn2"
      },
      {
        value: "35",
        label: "Cmm2"
      },
      {
        value: "36",
        label: "Cmc2<sub>1</sub>"
      },
      {
        value: "37",
        label: "Ccc2"
      },
      {
        value: "38",
        label: "Amm2"
      },
      {
        value: "39",
        label: "Aem2"
      },
      {
        value: "40",
        label: "Ama2"
      },
      {
        value: "41",
        label: "Aea2"
      },
      {
        value: "42",
        label: "Fmm2"
      },
      {
        value: "43",
        label: "Fdd2"
      },
      {
        value: "44",
        label: "Imm2"
      },
      {
        value: "45",
        label: "Iba2"
      },
      {
        value: "46",
        label: "Ima2"
      },
      {
        value: "47",
        label: "Pmmm"
      },
      {
        value: "48",
        label: "Pnnn1"
      },
      {
        value: "49",
        label: "Pccm"
      },
      {
        value: "50",
        label: "Pban1"
      },
      {
        value: "51",
        label: "Pmma"
      },
      {
        value: "52",
        label: "Pnna"
      },
      {
        value: "53",
        label: "Pmna"
      },
      {
        value: "54",
        label: "Pcca"
      },
      {
        value: "55",
        label: "Pbam"
      },
      {
        value: "56",
        label: "Pccn"
      },
      {
        value: "57",
        label: "Pbcm"
      },
      {
        value: "58",
        label: "Pnnm"
      },
      {
        value: "59",
        label: "Pmmn1"
      },
      {
        value: "60",
        label: "Pbcn"
      },
      {
        value: "61",
        label: "Pbca"
      },
      {
        value: "62",
        label: "Pnma"
      },
      {
        value: "63",
        label: "Cmcm"
      },
      {
        value: "64",
        label: "Cmce"
      },
      {
        value: "65",
        label: "Cmmm"
      },
      {
        value: "66",
        label: "Cccm"
      },
      {
        value: "67",
        label: "Cmme"
      },
      {
        value: "68",
        label: "Ccce1"
      },
      {
        value: "69",
        label: "Fmmm"
      },
      {
        value: "70",
        label: "Fddd1"
      },
      {
        value: "71",
        label: "Immm"
      },
      {
        value: "72",
        label: "Ibam"
      },
      {
        value: "73",
        label: "Ibca"
      },
      {
        value: "74",
        label: "Imma"
      },
      {
        value: "75",
        label: "P4"
      },
      {
        value: "76",
        label: "P4<sub>1</sub>"
      },
      {
        value: "77",
        label: "P4<sub>2</sub>"
      },
      {
        value: "78",
        label: "P4<sub>3</sub>"
      },
      {
        value: "79",
        label: "I4"
      },
      {
        value: "80",
        label: "I4<sub>1</sub>"
      },
      {
        value: "81",
        label: "P<span style='text-decoration: overline'>4</span>"
      },
      {
        value: "82",
        label: "I<span style='text-decoration: overline'>4</span>"
      },
      {
        value: "83",
        label: "P4/m"
      },
      {
        value: "84",
        label: "P4<sub>2</sub>/m"
      },
      {
        value: "85",
        label: "P4/n1"
      },
      {
        value: "86",
        label: "P4<sub>2</sub>/n"
      },
      {
        value: "87",
        label: "I4/m"
      },
      {
        value: "88",
        label: "I4<sub>1</sub>/a"
      },
      {
        value: "89",
        label: "P422"
      },
      {
        value: "90",
        label: "P42_1<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "91",
        label: "P4_12<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "92",
        label:
          "P4_1<span style='text-decoration: overline'>2</span>_1<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "93",
        label: "P4_22<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "94",
        label:
          "P4_2<span style='text-decoration: overline'>2</span>_1<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "95",
        label: "P4_32<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "96",
        label:
          "P4_3<span style='text-decoration: overline'>2</span>_1<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "97",
        label: "I422"
      },
      {
        value: "98",
        label: "I4_12<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "99",
        label: "P4mm"
      },
      {
        value: "100",
        label: "P4bm"
      },
      {
        value: "101",
        label: "P4<sub>2</sub>cm"
      },
      {
        value: "102",
        label: "P4<sub>2</sub>nm"
      },
      {
        value: "103",
        label: "P4cc"
      },
      {
        value: "104",
        label: "P4nc"
      },
      {
        value: "105",
        label: "P4<sub>2</sub>mc"
      },
      {
        value: "106",
        label: "P4<sub>2</sub>bc"
      },
      {
        value: "107",
        label: "I4mm"
      },
      {
        value: "108",
        label: "I4cm"
      },
      {
        value: "109",
        label: "I4<sub>1</sub>md"
      },
      {
        value: "110",
        label: "I4<sub>1</sub>cd"
      },
      {
        value: "111",
        label: "P<span style='text-decoration: overline'>4</span>2m"
      },
      {
        value: "112",
        label: "P<span style='text-decoration: overline'>4</span>2c"
      },
      {
        value: "113",
        label: "P<span style='text-decoration: overline'>4</span>2<sub>1</sub>m"
      },
      {
        value: "114",
        label: "P<span style='text-decoration: overline'>4</span>2<sub>1</sub>c"
      },
      {
        value: "115",
        label: "P<span style='text-decoration: overline'>4</span>m2"
      },
      {
        value: "116",
        label: "P<span style='text-decoration: overline'>4</span>c2"
      },
      {
        value: "117",
        label: "P<span style='text-decoration: overline'>4</span>b2"
      },
      {
        value: "118",
        label: "P<span style='text-decoration: overline'>4</span>n2"
      },
      {
        value: "119",
        label: "I<span style='text-decoration: overline'>4</span>m2"
      },
      {
        value: "120",
        label: "I<span style='text-decoration: overline'>4</span>c2"
      },
      {
        value: "121",
        label: "I<span style='text-decoration: overline'>4</span>2m"
      },
      {
        value: "122",
        label: "I<span style='text-decoration: overline'>4</span>2d"
      },
      {
        value: "123",
        label: "P4/mmm"
      },
      {
        value: "124",
        label: "P4/mcc"
      },
      {
        value: "125",
        label: "P4/nbm1"
      },
      {
        value: "126",
        label: "P4/nnc1"
      },
      {
        value: "127",
        label: "P4/mbm"
      },
      {
        value: "128",
        label: "P4/mnc"
      },
      {
        value: "129",
        label: "P4/nmm1"
      },
      {
        value: "130",
        label: "P4/ncc1"
      },
      {
        value: "131",
        label: "P4<sub>2</sub>/mmc"
      },
      {
        value: "132",
        label: "P4<sub>2</sub>/mcm"
      },
      {
        value: "133",
        label: "P4<sub>2</sub>/nbc"
      },
      {
        value: "134",
        label: "P4<sub>2</sub>/nnm"
      },
      {
        value: "135",
        label: "P4<sub>2</sub>/mbc"
      },
      {
        value: "136",
        label: "P4<sub>2</sub>/mnm"
      },
      {
        value: "137",
        label: "P4<sub>2</sub>/nmc"
      },
      {
        value: "138",
        label: "P4<sub>2</sub>/ncm"
      },
      {
        value: "139",
        label: "I4/mmm"
      },
      {
        value: "140",
        label: "I4/mcm"
      },
      {
        value: "141",
        label: "I4<sub>1</sub>/amd"
      },
      {
        value: "142",
        label: "I4<sub>1</sub>/acd"
      },
      {
        value: "143",
        label: "P3"
      },
      {
        value: "144",
        label: "P3<sub>1</sub>"
      },
      {
        value: "145",
        label: "P3<sub>2</sub>"
      },
      {
        value: "146",
        label: "R3"
      },
      {
        value: "147",
        label: "P<span style='text-decoration: overline'>3</span>"
      },
      {
        value: "148",
        label: "R<span style='text-decoration: overline'>3</span>"
      },
      {
        value: "149",
        label: "P312"
      },
      {
        value: "150",
        label: "P321"
      },
      {
        value: "151",
        label: "P3_11<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "152",
        label: "P3_12<span style='text-decoration: overline'>1</span>"
      },
      {
        value: "153",
        label: "P3_21<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "154",
        label: "P3_22<span style='text-decoration: overline'>1</span>"
      },
      {
        value: "155",
        label: "R32"
      },
      {
        value: "156",
        label: "P3m1"
      },
      {
        value: "157",
        label: "P31m"
      },
      {
        value: "158",
        label: "P3c1"
      },
      {
        value: "159",
        label: "P31c"
      },
      {
        value: "160",
        label: "R3m"
      },
      {
        value: "161",
        label: "R3c"
      },
      {
        value: "162",
        label: "P<span style='text-decoration: overline'>3</span>1m"
      },
      {
        value: "163",
        label: "P<span style='text-decoration: overline'>3</span>1c"
      },
      {
        value: "164",
        label: "P<span style='text-decoration: overline'>3</span>m1"
      },
      {
        value: "165",
        label: "P<span style='text-decoration: overline'>3</span>c1"
      },
      {
        value: "166",
        label: "R<span style='text-decoration: overline'>3</span>m"
      },
      {
        value: "167",
        label: "R<span style='text-decoration: overline'>3</span>c"
      },
      {
        value: "168",
        label: "P6"
      },
      {
        value: "169",
        label: "P6<sub>1</sub>"
      },
      {
        value: "170",
        label: "P6<sub>5</sub>"
      },
      {
        value: "171",
        label: "P6<sub>2</sub>"
      },
      {
        value: "172",
        label: "P6<sub>4</sub>"
      },
      {
        value: "173",
        label: "P6<sub>3</sub>"
      },
      {
        value: "174",
        label: "P<span style='text-decoration: overline'>6</span>"
      },
      {
        value: "175",
        label: "P6/m"
      },
      {
        value: "176",
        label: "P6<sub>3</sub>/m"
      },
      {
        value: "177",
        label: "P622"
      },
      {
        value: "178",
        label: "P6_12<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "179",
        label: "P6_52<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "180",
        label: "P6_22<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "181",
        label: "P6_42<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "182",
        label: "P6_32<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "183",
        label: "P6mm"
      },
      {
        value: "184",
        label: "P6cc"
      },
      {
        value: "185",
        label: "P6<sub>3</sub>cm"
      },
      {
        value: "186",
        label: "P6<sub>3</sub>mc"
      },
      {
        value: "187",
        label: "P<span style='text-decoration: overline'>6</span>m2"
      },
      {
        value: "188",
        label: "P<span style='text-decoration: overline'>6</span>c2"
      },
      {
        value: "189",
        label: "P<span style='text-decoration: overline'>6</span>2m"
      },
      {
        value: "190",
        label: "P<span style='text-decoration: overline'>6</span>2c"
      },
      {
        value: "191",
        label: "P6/mmm"
      },
      {
        value: "192",
        label: "P6/mcc"
      },
      {
        value: "193",
        label: "P6<sub>3</sub>/mcm"
      },
      {
        value: "194",
        label: "P6<sub>3</sub>/mmc"
      },
      {
        value: "195",
        label: "P23"
      },
      {
        value: "196",
        label: "F23"
      },
      {
        value: "197",
        label: "I23"
      },
      {
        value: "198",
        label: "P2_1<span style='text-decoration: overline'>3</span>"
      },
      {
        value: "199",
        label: "I2_1<span style='text-decoration: overline'>3</span>"
      },
      {
        value: "200",
        label: "Pm<span style='text-decoration: overline'>3</span>"
      },
      {
        value: "201",
        label: "Pn<span style='text-decoration: overline'>3</span>1"
      },
      {
        value: "202",
        label: "Fm<span style='text-decoration: overline'>3</span>"
      },
      {
        value: "203",
        label: "Fd<span style='text-decoration: overline'>3</span>1"
      },
      {
        value: "204",
        label: "Im<span style='text-decoration: overline'>3</span>"
      },
      {
        value: "205",
        label: "Pa<span style='text-decoration: overline'>3</span>"
      },
      {
        value: "206",
        label: "Ia<span style='text-decoration: overline'>3</span>"
      },
      {
        value: "207",
        label: "P432"
      },
      {
        value: "208",
        label: "P4_23<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "209",
        label: "F432"
      },
      {
        value: "210",
        label: "F4_13<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "211",
        label: "I432"
      },
      {
        value: "212",
        label: "P4_33<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "213",
        label: "P4_13<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "214",
        label: "I4_13<span style='text-decoration: overline'>2</span>"
      },
      {
        value: "215",
        label: "P<span style='text-decoration: overline'>4</span>3m"
      },
      {
        value: "216",
        label: "F<span style='text-decoration: overline'>4</span>3m"
      },
      {
        value: "217",
        label: "I<span style='text-decoration: overline'>4</span>3m"
      },
      {
        value: "218",
        label: "P<span style='text-decoration: overline'>4</span>3n"
      },
      {
        value: "219",
        label: "F<span style='text-decoration: overline'>4</span>3c"
      },
      {
        value: "220",
        label: "I<span style='text-decoration: overline'>4</span>3d"
      },
      {
        value: "221",
        label: "Pm<span style='text-decoration: overline'>3</span>m"
      },
      {
        value: "222",
        label: "Pn<span style='text-decoration: overline'>3</span>n1"
      },
      {
        value: "223",
        label: "Pm<span style='text-decoration: overline'>3</span>n"
      },
      {
        value: "224",
        label: "Pn<span style='text-decoration: overline'>3</span>m1"
      },
      {
        value: "225",
        label: "Fm<span style='text-decoration: overline'>3</span>m"
      },
      {
        value: "226",
        label: "Fm<span style='text-decoration: overline'>3</span>c"
      },
      {
        value: "227",
        label: "Fd<span style='text-decoration: overline'>3</span>m1"
      },
      {
        value: "228",
        label: "Fd<span style='text-decoration: overline'>3</span>c1"
      },
      {
        value: "229",
        label: "Im<span style='text-decoration: overline'>3</span>m"
      },
      {
        value: "230",
        label: "Ia<span style='text-decoration: overline'>3</span>d"
      }
    ],
    crystal_options: [
      {
        value: "Cubic",
        label: "Cubic"
      },
      {
        value: "Hexagonal",
        label: "Hexagonal"
      },
      {
        value: "Trigonal",
        label: "Trigonal"
      },
      {
        value: "Tetragonal",
        label: "Tetragonal"
      },
      {
        value: "Orthorhombic",
        label: "Orthorhombic"
      },
      {
        value: "Monoclinic",
        label: "Monoclinic"
      },
      {
        value: "Triclinic",
        label: "Triclinic"
      }
    ]
  },
  getters: {
    allInfo: (state) => state.system.allInfo
  },
  mutations: {
    lightElement(state, ele) {
      state.isActive[ele] = true;
    },
    clearlight(state) {
      state.isActive = {
        "*": false,
        H: false,
        He: false,
        Li: false,
        Be: false,
        B: false,
        C: false,
        N: false,
        O: false,
        F: false,
        Ne: false,
        Na: false,
        Mg: false,
        Al: false,
        Si: false,
        P: false,
        S: false,
        Cl: false,
        Ar: false,
        K: false,
        Ca: false,
        Sc: false,
        Ti: false,
        V: false,
        Cr: false,
        Mn: false,
        Fe: false,
        Co: false,
        Ni: false,
        Cu: false,
        Zn: false,
        Ga: false,
        Ge: false,
        As: false,
        Se: false,
        Br: false,
        Kr: false,
        Rb: false,
        Sr: false,
        Y: false,
        Zr: false,
        Nb: false,
        Mo: false,
        Tc: false,
        Ru: false,
        Rh: false,
        Pd: false,
        Ag: false,
        Cd: false,
        Ln: false,
        Sn: false,
        Sb: false,
        Te: false,
        I: false,
        Xe: false,
        Cs: false,
        Ba: false,
        La: false,
        Hf: false,
        Ta: false,
        W: false,
        Re: false,
        Os: false,
        Ir: false,
        Pt: false,
        Au: false,
        Hg: false,
        Tl: false,
        Pb: false,
        Bi: false,
        Po: false,
        At: false,
        Rn: false,
        Fr: false,
        Ra: false,
        Ac: false,
        Rf: false,
        Db: false,
        Sg: false,
        Bh: false,
        Hs: false,
        Mt: false,
        Ds: false,
        Rg: false,
        Uub: false,
        Uut: false,
        Uuq: false,
        Uup: false,
        Uuh: false,
        Uus: false,
        Uuo: false,
        Ce: false,
        Pr: false,
        Nd: false,
        Pm: false,
        Sm: false,
        Eu: false,
        Gd: false,
        Tb: false,
        Dy: false,
        Ho: false,
        Er: false,
        Tm: false,
        Yb: false,
        Lu: false,
        Th: false,
        Pa: false,
        U: false,
        Np: false,
        Pu: false,
        Am: false,
        Cm: false,
        Bk: false,
        Cf: false,
        Es: false,
        Fm: false,
        Md: false,
        No: false,
        Lr: false
      };
    }
  }
});

export default store;
