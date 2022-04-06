import Mock from "mockjs";
Mock.mock("/childpage/spacegroup", "get", () => {
    return {
        status: 200,
        message: "get data successfully!",
        data: [
            "Pn<span style='text-decoration: overline'>3</span>m",
            "C2/c",
            "Fm<span style='text-decoration: overline'>3</span>m",
            "I4<sub>1</sub>/amd",
            "Fdd2",
            "Ia<span style='text-decoration: overline'>3</span>",
            "P<span style='text-decoration: overline'>3</span>m1",
            "P<span style='text-decoration: overline'>6</span>2m",
            "C2/m",
            "R<span style='text-decoration: overline'>3</span>c",
            "P<span style='text-decoration: overline'>3</span>1c",
            "Cmcm",
            "P<span style='text-decoration: overline'>1</span>",
            "Pna2<sub>1</sub>",
            "P6<sub>3</sub>mc"
        ]
    }
})