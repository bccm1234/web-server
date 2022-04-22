module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    // 开发模式，"off"-不执行，生产模式，"warn"给予警告
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "none"
      }
    ]
  }
};
