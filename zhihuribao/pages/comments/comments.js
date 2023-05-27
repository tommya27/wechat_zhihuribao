// pages/comments/comments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shortcomments: null,
    longcomments: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("当前id", options.id)
    wx, wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://apis.netstart.cn/zhihudaily/story/' + options.id + "/short-comments",
      success: (res1) => {
        wx.hideLoading()
        console.log(res1.data.comments);
        this.setData({
          shortcomments: res1.data.comments,

        })
      }

    })

    wx.request({
      url: 'https://apis.netstart.cn/zhihudaily/story/' + options.id + "/long-comments",
      success: (res2) => {
        wx.hideLoading()
        console.log(res2.data.comments);

        this.setData({
          longcomments: res2.data.comments,

        })
      }

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})