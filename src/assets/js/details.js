//全局函数
exports.install = function (Vue) {
  Vue.prototype.assessData = function (e, u) {
    let result = "";
    if (u) {
      result = e ? e + u : "Not Found";
    } else {
      result = e ? e : "Not Found";
    }
    return result;
  };
  //分子式、空间群字符串转换
  Vue.prototype.tranStr = function (num, str) {
    // 0 means formula
    // 1 means space group symbol
    let a = "";
    let b = "";
    let newStr = "";
    if (num == 0) {
      for (let i of str) {
        if (i.match(/\d+/)) {
          newStr += "<sub>" + i + "</sub>";
        } else {
          newStr += i;
        }
      }
      return newStr;
    } else if (num == 1) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "-") {
          a = str[i] + str[i + 1];
          b =
            "<span span style='text-decoration: overline'>" +
            str[i + 1] +
            "</span>";
          i += b.length - 1;
          str = str.replace(new RegExp(a), b);
        } else if (str[i] === "_") {
          a = str[i] + str[i + 1];
          b = "<sub>" + str[i + 1] + "</sub>";
          i += b.length - 1;
          str = str.replace(new RegExp(a), b);
        }
      }
      return str;
    }
  };
  // Vue.prototype.setSession = function (key, value) {
  //   if (typeof value == "object") {
  //     //如果要存储对象，则先转为json串
  //     value = window.JSON.stringify(value);
  //   }
  //   sessionStorage.setItem(key, value);
  // };
  // Vue.prototype.getSession = function (key) {
  //   let value = sessionStorage.getItem(key); //字符串或json串
  //   let json = window.JSON.parse(value); //json串转为js对象

  //   if (typeof json == "object" && json) {
  //     //利用了一点，当符合json格式，串会成功转为js对象，否则为null
  //     return json;
  //   }
  //   return value;
  // };
  // Vue.prototype.clearSession = function () {
  //   sessionStorage.clear();
  // };
};
