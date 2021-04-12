// pages/centrality/centrality.js
import { toTabPage } from "../../utils/common.js"
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

  },
  // tab切换
  toTabPage: function (e) {
    toTabPage(e)
  },


  //我的设置
  toMyWords: function () {
    let that = this;
    wx.navigateTo({
      url: `/pages/word/chooselist/chooselist`,
    })
  },


  toMyListening: function () {
    let that = this;
    wx.navigateTo({
      url: `/pages/word/audio/chooseListAudio`,
    })
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

  }
})