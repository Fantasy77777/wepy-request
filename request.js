/* eslint-disable */ //关闭Eslint检查
import wepy from 'wepy'; // 导入wepy
const isBlank = obj => {
  if (obj === undefined || obj === null || obj === '' || obj.length === 0) {
    return true
  }
  return false
}
/**
 * 封装wepy.request请求
 */
const request = (url, data, method) => {
  if (isBlank(method)) {
    method = 'POST'
  }
  return new Promise((resolve, reject) => {
    wepy.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json'
      }, // 设置请求头
      success: function (res) {
        resolve(res);
      },
      fail: function (err) {
        reject(err)
      }
    });
  });
};

module.exports = {
  request
}