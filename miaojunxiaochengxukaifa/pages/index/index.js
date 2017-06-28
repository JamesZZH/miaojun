var request = require('../../utils/request.js');
//获取应用实例
var app = getApp();
Page({
  data: {
    imgUrls: []
  },
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {

  },
  onShow: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.getBanner();
      that.getProductDetail();
      that.setData({
        userInfo: userInfo
      })
    })
  },
  // 获取banner页
  getBanner: function () {
    const that = this;
    request.getBanner(
      {
        "session_id": app.globalData.session_id
      },
      (res) => {
        console.log(res);
        that.setData({
          imgUrls: res.data
        })
      },
      (res) => {
        console.log(res);
      }
    )
  },
  // 获取商品详情
  getProductDetail: function () {
    const that = this;
    request.getProductDetail(
      {
        "session_id": app.globalData.session_id
      },
      (res) => {
        console.log(res);
        that.setData({
          detail: res.data
        })
      },
      (res) => {
        console.log(res);
      }
    )
  },
  pDeatil: function () {
    wx.navigateTo({
      url: '../productDetail/productDetail'
    })
  },
  list: function (e) {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../list/list?id=' + e.currentTarget.dataset.id
    })
  },
  agent: function () {
    request.checkCode(
      {
        "session_id": app.globalData.session_id,
      },
      (res) => {
        console.log(res);
        if (res.data.status == "success") {
          wx.navigateTo({
            url: '../agent/imagesList?id=3'
          })
        } else {
          wx.switchTab({
            url: '../agent/agent'
          })
        }
      },
      (res) => {
        console.log(res);
      }
    )
  },

/**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {
    return {
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
})
