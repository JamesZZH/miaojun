var api = require('./api.js');
var app = getApp();
/**
 * 网络请求方法
 * @param url {string} 请求url
 * @param data {object} 参数
 * @param successCallback {function} 成功回调函数
 * @param errorCallback {function} 失败回调函数
 * @param completeCallback {function} 完成回调函数
 * @returns {void}
 */

function requestData(url, data0, successCallback, errorCallback) {
    wx.request({
        url: url,
        method: 'POST',
        data: data0,
        success: function (res) {
            successCallback(res);
        },
        error: function (res) {
            errorCallback(res);
        },
    });
}
// 授权登录
function login(data0, successCallback, errorCallback) {
    requestData(api.login(), data0, successCallback, errorCallback);
}
// 获取Banner
function getBanner(data0, successCallback, errorCallback) {
    requestData(api.getBanner(), data0, successCallback, errorCallback);
}
// 存储用户信息
function checkLogin(data, successCallback, errorCallback) {
    requestData(api.checkLogin(), data, successCallback, errorCallback);
}
// 个人中心
function getProductDetail(data, successCallback, errorCallback) {
  requestData(api.getProductDetail(), data, successCallback, errorCallback);
}
// 分类列表信息
function checkCode(data, successCallback, errorCallback) {
  requestData(api.checkCode(), data, successCallback, errorCallback);
}
// 获取区域列表
function getFirstList(data, successCallback, errorCallback) {
  requestData(api.getFirstList(), data, successCallback, errorCallback);
}
// 发布新需求
function checkIsMember(data, successCallback, errorCallback) {
  requestData(api.checkIsMember(), data, successCallback, errorCallback);
}
// 获取便民信息列表
function getFirstDetail(data, successCallback, errorCallback) {
  requestData(api.getFirstDetail(), data, successCallback, errorCallback);
}
// 获取个人发布列表
function getProductList(data, successCallback, errorCallback) {
  requestData(api.getProductList(), data, successCallback, errorCallback);
}
// 删除个人已发布信息
function getStype(data, successCallback, errorCallback) {
  requestData(api.getStype(), data, successCallback, errorCallback);
}
// 简骑版结束用车
function getStypeList(data, successCallback, errorCallback) {
  requestData(api.getStypeList(), data, successCallback, errorCallback);
}
// 芝麻信用免押金
function getProductChildList(data, successCallback, errorCallback) {
  requestData(api.getProductChildList(), data, successCallback, errorCallback);
}

function getFanKui(data, successCallback, errorCallback) {
  requestData(api.getFanKui(), data, successCallback, errorCallback);
}

function getStypeListDetail(data, successCallback, errorCallback) {
  requestData(api.getStypeListDetail(), data, successCallback, errorCallback);
}
function getProductListDetial(data, successCallback, errorCallback) {
  requestData(api.getProductListDetial(), data, successCallback, errorCallback);
}
module.exports = {
    login: login,
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
};