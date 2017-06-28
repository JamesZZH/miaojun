// 主地址
const api = 'https://aj.jigongtone.com/index.php/Home/Index/';
// 登录
const v1 = 'login';
function login() {
  return api + v1;
};
// 获取Banner
const v2 = 'getBanner';
function getBanner() {
  return api + v2;
};
// 保存用户信息
const v3 = 'check_login';
function checkLogin() {
  return api + v3;
};
// 个人中心
const v4 = 'getProductDetail';
function getProductDetail() {
  return api + v4;
};
// 会员码验证
const v5 = 'checkCode';
function checkCode() {
  return api + v5;
};
// 获取人气推荐内容列表
const v6 = 'getFirstList';
function getFirstList() {
  return api + v6;
};
// 会员验证
const v7 = 'checkIsMember';
function checkIsMember() {
  return api + v7;
};
// 获取人气推荐内容列表详情
const v8 = 'getFirstDetail';
function getFirstDetail() {
  return api + v8;
};
// 获取个人发布列表
const v9 = 'getProductList';
function getProductList() {
  return api + v9;
};
// 删除个人已发布信息
const v10 = 'getStype';
function getStype() {
  return api + v10;
};
// 简骑版结束用车
const v11 = 'getStypeList';
function getStypeList() {
  return api + v11;
};
// 芝麻信用免押金
const v12 = 'getProductChildList';
function getProductChildList() {
  return api + v12;
};

const v13 = 'getFanKui';
function getFanKui() {
  return api + v13;
};
const v14 = 'getStypeListDetail';
function getStypeListDetail() {
  return api + v14;
};
const v15 = 'getProductListDetial';
function getProductListDetial() {
  return api + v15;
};

const app = getApp();

module.exports = {
  // state: state,
  getBanner: getBanner,
  checkLogin: checkLogin,
  getProductDetail: getProductDetail,
  checkCode: checkCode,
  getFirstList: getFirstList,
  checkIsMember: checkIsMember,
  getFirstDetail: getFirstDetail,
  getProductList: getProductList,
  getStype: getStype,
  getStypeList: getStypeList,
  getProductChildList: getProductChildList,
  getFanKui: getFanKui,
  getStypeListDetail: getStypeListDetail,
  getProductListDetial: getProductListDetial,
  login:login,
};