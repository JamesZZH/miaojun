// pages/productDetail/productDetail.js
var WxParse = require('../../wxParse/wxParse.js');
var request = require('../../utils/request.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    request.getProductDetail(
      {
        "session_id": app.globalData.session_id
      },
      (res) => {
        that.setData({
          list: res.data,
        })
        WxParse.wxParse('detail_des', 'html', res.data.detail_des, that, 5);
        WxParse.wxParse('product_des', 'html', res.data.product_des, that, 5);
        console.log(res);
      },
      (res) => {
        console.log(res);
      }
    )
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

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
  tab: function (e) {
    if (e.currentTarget.dataset.id == 2) {
      var that = this;
      request.getProductList(
        {
          "session_id": app.globalData.session_id
        },
        (res) => {
          that.setData({
            tabList: res.data,
          })
          console.log(res);
        },
        (res) => {
          console.log(res);
        }
      )

    }
    this.setData({
      tab: e.currentTarget.dataset.id
    })

  },
  goList: function(e){
    wx.navigateTo({
      url: './productList?id=' + e.currentTarget.dataset.id
    })
  }
})