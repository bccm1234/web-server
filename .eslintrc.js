module.exports = {
  env: {
    // 原有
    browser: true,
    // 添加
    jquery: true
  },
  root: true,
  //当前配置为根配置，将不再从上级文件夹查找配置
  // eslint-disable-next-line no-dupe-keys
  env: {
    browser: true,
    //设置为所需检查的代码是在浏览器环境运行的
    node: true
    //设置所需检查代码为node语法书写
  },
  // 扩展使用vue检查规则和eslint、prettier推荐规则
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  // 语法解释器
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireCondigFile: false
    // eslint-disable-next-line no-dupe-keys
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
