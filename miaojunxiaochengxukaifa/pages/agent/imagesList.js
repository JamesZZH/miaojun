// pages/agent/imagesList.js
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
    var that = this;
    request.getStypeList(
      {
        "session_id": app.globalData.session_id,
        "id": options.id
      },
      (res) => {
        that.setData({
          list: res.data
        })
        var arr = new Array()
        for (let i = 0; i < res.data.length; i++) {
          arr[i] = res.data[i].https + res.data[i].url;
          that.setData({
            picList: arr
          })
          console.log(that.data.picList);
        }
        console.log(res);
      },
      (res) => {
        console.log(res);
      }
    )
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
  pic: function (e) {
    var that = this;
    wx.previewImage({
      current: e.currentTarget.dataset.pic, // 当前显示图片的http链接
      urls: that.data.picList // 需要预览的图片http链接列表
    })
  }
})