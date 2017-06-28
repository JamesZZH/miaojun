// pages/agent/agent.js
var request = require('../../utils/request.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dis: false
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
    request.checkIsMember(
      {
        "session_id": app.globalData.session_id,
      },
      (res) => {
        console.log(res);
        if (res.data.status == "success") {
          that.setData({
            dis: true
          })
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
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

  /**
   * 会员码验证
   */
  formSubmit: function (e) {
    console.log(e.detail.value.code);
    request.checkCode(
      {
        "session_id": app.globalData.session_id,
        "code": e.detail.value.code,
      },
      (res) => {
        console.log(res);
        if (res.data.status == "success") {
          wx.navigateTo({
            url: './agentList'
          })
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
      },
      (res) => {
        console.log(res);
      }
    )
  },
  // 反馈
  fankui: function () {
    wx.navigateTo({
      url: '../fankui/fankui'
    })
  },
})