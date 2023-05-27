// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    story: null,


    // nbFrontColor: '#000000',
    // nbBackgroundColor: '#ffffff',
    // //导航栏
  },


  // onLoad() {
  //   this.setData({
  //     nbTitle: '新标题',
  //     nbLoading: true,
  //     nbFrontColor: '#ffffff',
  //     nbBackgroundColor: '#000000',
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("当前id", options.id);
  //   var history = wx.setStorageSync('history')
  //   // console.log("旧的历史",history);
  //   // 追加本次新的id
  //   history.push(options.id)
  // // wx.setStorageSync('history', [options.id])

  //   wx.setStorageSync('history', [...new setInterval(history)])






    wx, wx.showLoading({
      title: '加载中',
    })



    wx.request({
      url: 'https://apis.netstart.cn/zhihudaily/story/' + options.id,
      success: (res) => {
        wx.hideLoading()



        console.log(res.data.story);
        this.setData({
          story: res.data.story
        })
      }

    })

  },

  navToSection(event) {
    console.log(456, event.currentTarget.dataset.id);
    //
    wx.navigateTo({

      url: '/pages/section/section?id=' + event.currentTarget.dataset.id
      // ？
      // events: events,
      // success: (result) => {},
      // fail: (res) => {},
      // complete: (res) => {},
    })
  },

  navToComment(event) {
    console.log(456, event.currentTarget.dataset.id);
    //
    wx.navigateTo({

      url: '/pages/comments/comments?id=' + event.currentTarget.dataset.id
      
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