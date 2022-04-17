<template>
  <div style="width: 100%">
    <el-form :inline="true" :model="formInline" size="large">
      <el-form-item label="Explore Materials">
        <el-autocomplete
          @input="beforetablehighlight"
          v-model="formInline.mater"
          placeholder="Please input"
          @keyup.13.native="getresult(format)"
          :fetch-suggestions="querySearch"
        >
          <i
            class="el-icon-close el-input__icon"
            slot="suffix"
            @click="getformat"
          >
          </i>
          <template slot-scope="{ item }">
            <div>
              <span class="address">{{ item.address }}</span>
              <span>{{ item.value }}</span>
            </div>
          </template></el-autocomplete
        >
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="getresult(format)"
          :disabled="!format[2] || !formInline.mater"
          >Search</el-button
        >
      </el-form-item>
    </el-form>
    <div class="element-top">
      <div class="column">
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.H }"
        >
          H
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Li }"
        >
          Li
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Na }"
        >
          Na
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Ka }"
        >
          Ka
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Rb }"
        >
          Rb
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Cs }"
        >
          Cs
        </div>
        <div
          class="base-element column-element color-1"
          @click="searchElement"
          :class="{ active: isActive.Fr }"
        >
          Fr
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Be }"
        >
          Be
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Mg }"
        >
          Mg
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Ca }"
        >
          Ca
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Sr }"
        >
          Sr
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Ba }"
        >
          Ba
        </div>
        <div
          class="base-element column-element color-2"
          @click="searchElement"
          :class="{ active: isActive.Ra }"
        >
          Ra
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Sc }"
        >
          Sc
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Y }"
        >
          Y
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.La }"
        >
          La
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ac }"
        >
          Ac
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ti }"
        >
          Ti
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Zr }"
        >
          Zr
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Hf }"
        >
          Hf
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Rf }"
        >
          Rf
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.V }"
        >
          V
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Nb }"
        >
          Nb
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ta }"
        >
          Ta
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Db }"
        >
          Db
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Cr }"
        >
          Cr
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Mo }"
        >
          Mo
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.W }"
        >
          W
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Sg }"
        >
          Sg
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Mn }"
        >
          Mn
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Tc }"
        >
          Tc
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Re }"
        >
          Re
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Bh }"
        >
          Bh
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Fe }"
        >
          Fe
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ru }"
        >
          Ru
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Os }"
        >
          Os
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Hs }"
        >
          Hs
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Co }"
        >
          Co
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Rh }"
        >
          Rh
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ir }"
        >
          Ir
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Mt }"
        >
          Mt
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ni }"
        >
          Ni
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Pd }"
        >
          Pd
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Pt }"
        >
          Pt
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ds }"
        >
          Ds
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Cu }"
        >
          Cu
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Ag }"
        >
          Ag
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Au }"
        >
          Au
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Rg }"
        >
          Rg
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Zn }"
        >
          Zn
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Cd }"
        >
          Cd
        </div>
        <div
          class="base-element column-element color-3"
          @click="searchElement"
          :class="{ active: isActive.Hg }"
        >
          Hg
        </div>
        <div
          class="base-element column-element color-3 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uub }"
        >
          Uub
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.B }"
        >
          B
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Al }"
        >
          Al
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Ga }"
        >
          Ga
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Ln }"
        >
          Ln
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Tl }"
        >
          Tl
        </div>
        <div
          class="base-element column-element color-4 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uut }"
        >
          Uut
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.C }"
        >
          C
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Si }"
        >
          Si
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Ge }"
        >
          Ge
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Sn }"
        >
          Sn
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Pb }"
        >
          Pb
        </div>
        <div
          class="base-element column-element color-4 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uuq }"
        >
          Uuq
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.N }"
        >
          N
        </div>
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.P }"
        >
          P
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.As }"
        >
          As
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Sb }"
        >
          Sb
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Bi }"
        >
          Bi
        </div>
        <div
          class="base-element column-element color-4 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uup }"
        >
          Uup
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.O }"
        >
          O
        </div>
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.S }"
        >
          S
        </div>
        <div
          class="base-element column-element base-color"
          @click="searchElement"
          :class="{ active: isActive.Se }"
        >
          Se
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Te }"
        >
          Te
        </div>
        <div
          class="base-element column-element color-4"
          @click="searchElement"
          :class="{ active: isActive.Po }"
        >
          Po
        </div>
        <div
          class="base-element column-element color-4 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uuh }"
        >
          Uuh
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.F }"
        >
          F
        </div>
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.Cl }"
        >
          Cl
        </div>
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.Br }"
        >
          Br
        </div>
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.I }"
        >
          I
        </div>
        <div
          class="base-element column-element color-5"
          @click="searchElement"
          :class="{ active: isActive.At }"
        >
          At
        </div>
        <div
          class="base-element column-element color-7 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uus }"
        >
          Uus
        </div>
      </div>
      <div class="column">
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.He }"
        >
          He
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Ne }"
        >
          Ne
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Ar }"
        >
          Ar
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Kr }"
        >
          Kr
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Xe }"
        >
          Xe
        </div>
        <div
          class="base-element column-element color-6"
          @click="searchElement"
          :class="{ active: isActive.Rn }"
        >
          Rn
        </div>
        <div
          class="base-element column-element color-6 font-sm"
          @click="searchElement"
          :class="{ active: isActive.Uuo }"
        >
          Uuo
        </div>
      </div>
    </div>
    <div class="element-bottom">
      <div class="line">
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.La }"
        >
          La
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Ce }"
        >
          Ce
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Pr }"
        >
          Pr
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Nd }"
        >
          Nd
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Pm }"
        >
          Pm
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Sm }"
        >
          Sm
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Eu }"
        >
          Eu
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Gd }"
        >
          Gd
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Tb }"
        >
          Tb
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Dy }"
        >
          Dy
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Ho }"
        >
          Ho
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Er }"
        >
          Er
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Tm }"
        >
          Tm
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Yb }"
        >
          Yb
        </div>
        <div
          class="base-element line-element color-8"
          @click="searchElement"
          :class="{ active: isActive.Lu }"
        >
          Lu
        </div>
      </div>
      <div class="line">
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Ac }"
        >
          Ac
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Th }"
        >
          Th
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Pa }"
        >
          Pa
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.U }"
        >
          U
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Np }"
        >
          Np
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Pu }"
        >
          Pu
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Am }"
        >
          Am
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Cm }"
        >
          Cm
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Bk }"
        >
          Bk
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Cf }"
        >
          Cf
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Es }"
        >
          Es
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Fm }"
        >
          Fm
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Md }"
        >
          Md
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.No }"
        >
          No
        </div>
        <div
          class="base-element line-element color-9"
          @click="searchElement"
          :class="{ active: isActive.Lr }"
        >
          Lr
        </div>
      </div>
    </div>
    <mysearchresult
      :visible="visible"
      :searchList="searchList"
    ></mysearchresult>
  </div>
</template>

<script>
import axios from "axios";
import "@/assets/table.css";
import mysearchresult from "@/components/search-result.vue";
export default {
  data() {
    return {
      format: [false, false, false],
      isActive: {
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
      mater_list: [],
      visible: false,
      constList: [],
      searchList: [],
      formInline: {
        mater: ""
      },
      timer: null,
      searchMethod: 999,
      example: [
        { address: "Include at least elements: ", value: "Cu,O" },
        {
          address: "Include only elements: ",
          value: "Ti-O"
        },
        {
          address: "Include only elements plus wildcard elements: ",
          value: "O-*"
        },
        { address: "Has exact formula: ", value: "CuO" },
        {
          address: "Has formula with wildcard atoms: ",
          value: "Al*"
        }
      ]
    };
  },
  created() {
    axios
      .get("/index/element")
      .then(function (response) {
        return response.data.data;
      })
      .then((data) => {
        this.constList = data.filter(
          (x) => (
            (x.id = parseInt(x.id)),
            (x.a = x.a + "Å"),
            (x.b = x.b + "Å"),
            (x.c = x.c + "Å"),
            (x["band gap"] = x["band gap"] + "eV")
          )
        );
      });
  },
  methods: {
    getresultlist(method) {
      switch (method) {
        case 0:
          this.searchList = this.constList.filter(
            (x) => x.formula == this.formInline.mater
          );
          break;
        case 1:
          this.getmethodone(this.formInline.mater);
          break;
        case 2:
          this.getmethodtwo(this.formInline.mater);
          break;
        case 3:
          this.getmethodthree(this.formInline.mater);
          break;
        case 4:
          this.getmethodfour(this.formInline.mater);
          break;
        case 5:
          console.log(5);
          break;
        default:
          break;
      }
    },
    getmethodone(elestr) {
      let elelist = elestr.split(",");
      elelist = elelist.filter((x) => {
        if (x) return x;
      });
      elelist = elelist.map((x) => {
        x = x.replaceAll(/[0-9]+/g, "");
        return this.$store.state.element_table[x];
      });
      this.searchList = this.constList.filter(
        (x) =>
          x.element.length >= elelist.length &&
          this.judgeele_methodone(elelist, x.element)
      );
    },
    judgeele_methodone(elelist, datalist) {
      for (let i = 0; i < elelist.length; i++) {
        if (!datalist.includes(elelist[i])) return false;
      }
      return true;
    },
    getmethodtwo(elestr) {
      let elelist = [];
      let index = "";
      let startindex = "";
      for (let i = 0; i < elestr.length; i++) {
        if (elestr[i].match(/[A-Z]|\*/)) {
          startindex = index;
          index = i;
          if (parseFloat(startindex).toString() !== "NaN")
            elelist.push(elestr.slice(startindex, index));
        }
      }
      elelist.push(elestr.slice(index, elestr.length));
      elelist = elelist.map((x) => {
        if (x === "*") x = "1";
        else x = x.replace(/\*/, "");
        return x;
      });
      let indexlist = [];
      elelist.forEach((x) => {
        if (x.match(/[A-Z]/)) {
          indexlist.push(x.replace(/[0-9]/g, ""));
        }
      });
      this.searchList = this.constList.filter(
        (x) =>
          x.element.length == elelist.length &&
          this.judgeele_methodtwo(elelist, x, indexlist)
      );
    },
    judgeele_methodtwo(elelist, dataobject, indexlist) {
      for (let i = 0; i < elelist.length; i++) {
        if (elelist[i].match(/[A-Z]/)) {
          if (!dataobject.formula.includes(elelist[i])) return false;
          else {
            if (!this.judgeele_methodtwo_num(elelist[i], dataobject))
              return false;
          }
        } else {
          let num = elelist[i];
          if (!this.judgeele_methodtwo_ele(num, dataobject, indexlist))
            return false;
        }
      }
      return true;
    },
    judgeele_methodtwo_num(ele, dataobject) {
      let elechar = ele.match(/[A-Za-z]+/g);
      let elenum = ele.match(/[0-9]+/g) ? ele.match(/[0-9]+/g) : ["1"];
      for (let i = 1; i < dataobject.element.length + 1; i++) {
        if (
          dataobject["element" + i + "num"] == elenum &&
          dataobject["element" + i] == elechar
        )
          return true;
      }
      return false;
    },
    judgeele_methodtwo_ele(num, dataobject, indexlist) {
      for (let i = 1; i < dataobject.element.length + 1; i++) {
        if (
          dataobject["element" + i + "num"] == num &&
          !indexlist.includes(dataobject["element" + i])
        ) {
          return true;
        }
      }
      return false;
    },
    getmethodthree(elestr) {
      let elelist = elestr.split("-");
      elelist = elelist.filter((x) => {
        if (x) return x;
      });
      elelist = elelist.map((x) => {
        x = x.replaceAll(/[0-9]+/g, "");
        return this.$store.state.element_table[x];
      });
      this.searchList = this.constList.filter(
        (x) =>
          x.element.length == elelist.length &&
          this.judgeele_methodone(elelist, x.element)
      );
    },
    getmethodfour(elestr) {
      let elelist = elestr.split("-");
      elelist = elelist.filter((x) => {
        if (x) return x;
      });
      let elelistlength = elelist.length;
      elelist = elelist.filter((x) => {
        if (!x.match(/\*/g)) return x;
      });
      elelist = elelist.map((x) => {
        x = x.replaceAll(/[0-9]+/g, "");
        return this.$store.state.element_table[x];
      });
      this.searchList = this.constList.filter(
        (x) =>
          x.element.length == elelistlength &&
          this.judgeele_methodone(elelist, x.element)
      );
    },
    searchElement(event) {
      const ele = event.currentTarget.innerHTML.trim();
      if (this.isActive[ele] === false) {
        this.mater_list.push(ele);
      } else {
        this.mater_list = this.mater_list.filter((x) => x !== ele);
      }
      this.isActive[ele] = !this.isActive[ele];
      this.formInline.mater = this.mater_list.join("-");
      this.beforetablehighlight();
    },
    getresult(format) {
      if (format[2]) {
        this.visible = true;
        this.searchMethod = this.judgemethod(this.formInline.mater);
        this.getresultlist(this.searchMethod);
        this.jumptoresult();
      }
    },
    judgemethod(elestr) {
      if (elestr.includes("mp")) {
        console.log("使用Material ID搜索");
        return 5;
      } else if (elestr.includes("-") && elestr.includes("*")) {
        console.log("使用半模糊查询");
        return 4;
      } else if (elestr.includes("-")) {
        console.log("使用-查询");
        return 3;
      } else if (elestr.includes("*")) {
        console.log("使用模糊查询");
        return 2;
      } else if (elestr.includes(",")) {
        console.log("使用,查询");
        return 1;
      } else {
        console.log("固定查询");
        return 0;
      }
    },
    jumptoresult() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let el = document.querySelector("#search-result");
        window.scrollTo(0, el.offsetTop - 100);
      }, 50);
    },
    beforetablehighlight() {
      let elestr = this.formInline.mater;
      let elechar = [];
      if (elestr.includes("-")) {
        elechar = elestr.split("-");
      } else if (elestr.includes(",")) {
        elechar = elestr.split(",");
      } else {
        let index = "";
        let startindex = "";
        for (let i = 0; i < elestr.length; i++) {
          if (elestr[i].match(/[A-Z]/)) {
            startindex = index;
            index = i;
            if (index != 0 && startindex === "") {
              elechar.push(elestr.slice(0, index));
            }
            if (parseFloat(startindex).toString() !== "NaN") {
              elechar.push(elestr.slice(startindex, index));
            }
          }
        }
        elechar.push(elestr.slice(index, elestr.length));
      }
      let verify1 = [];
      elechar.forEach((x) => {
        if (x.match(/[^A-Za-z0-9,*-]/)) {
          verify1.push(false);
        } else verify1.push(true);
      });
      if (verify1.every((x) => x == true)) this.format[0] = true;
      else this.format[0] = false;
      let eleChar = [];
      let verify2 = [];
      elechar.map((x) => {
        x = x.replaceAll(/[^A-Za-z]/g, "");
        if (!Object.keys(this.isActive).includes(x) && x !== "")
          verify2.push(false);
        else verify2.push(true);
        if (verify2.every((x) => x == true)) this.format[1] = true;
        else this.format[1] = false;
        eleChar.push(x);
      });
      this.format[2] = this.format[1] && this.format[0];
      eleChar.forEach((x) => this.tablehighlight(x));
      this.mater_list.forEach((x) => this.cancelhighlight(x, eleChar));
    },
    tablehighlight(ele) {
      if (Object.keys(this.isActive).includes(ele)) {
        if (this.isActive[ele] === false) {
          this.mater_list.push(ele);
          this.isActive[ele] = !this.isActive[ele];
        }
      }
    },
    cancelhighlight(ele, eleChar) {
      if (!eleChar.includes(ele)) {
        this.mater_list = this.mater_list.filter((x) => x !== ele);
        this.isActive[ele] = !this.isActive[ele];
      }
    },
    getformat() {
      this.formInline.mater = "";
      this.beforetablehighlight();
      this.format[2] = false;
    },
    querySearch(queryString, cb) {
      var results = this.example;
      cb(results);
    }
  },
  components: { mysearchresult }
};
</script>

<style lang="less" scoped>
.el-form {
  margin-top: 15px;
}
.el-autocomplete {
  width: 400px;
}
.address {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
