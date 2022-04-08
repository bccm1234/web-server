import Mock from "mockjs";
Mock.mock("/childpage/elementcolor", "get", () => {
  return {
    status: 200,
    message: "get data successfully!",
    data: [{ id: 1, element: "H", color: "#ffffff" }]
  };
});
