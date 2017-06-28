// pages/agent/agentList.js
var request = require('../../utils/request.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    request.getStype(
      {
        "session_id": app.globalData.session_id,
      },
      (res) => {
        console.log(res);
        that.setData({
          list: res.data
        })
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

  goDetail: function (e) {
    console.log(e.currentTarget.dataset.type);
    if (e.currentTarget.dataset.type == 1) {
      if (e.currentTarget.dataset.id == 4){
        wx.navigateTo({
          url: '../fankui/fankui'
        })
      } else {
        wx.navigateTo({
          url: './typeList?id=' + e.currentTarget.dataset.id
        })
      }
    } else {
      wx.navigateTo({
        url: './imagesList?id=' + e.currentTarget.dataset.id
      })
    }
  }
})