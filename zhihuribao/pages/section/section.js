// pages/section/section.js
Page({

  


  /**
   * 页面的初始数据
   */
  data: {
    section: null
  },

  navToDetail(event) {
    console.log(456, event.currentTarget.dataset.id);
    //
    wx.navigateTo({

      url: '/pages/detail/detail?id=' + event.currentTarget.dataset.id,
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("当前合集id", options.id)
    wx, wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'https://apis.netstart.cn/zhihudaily/section/' + options.id,
      success: (res1) => {
        wx.hideLoading()


        // console.log(res.data.section);
        wx.setNavigationBarTitle({
          title: res1.data.name +'· 合集',
        })

        this.setData({
          section: res1.data.stories
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
    console.log("1")
    wx.showLoading({
      title: '加载中',
    })

    // 先获取所有days的最后一项 的 日期 date
    var date = this.data.days[this.data.days.length - 1].date
    console.log('点击加载更多', date);

    // 根据最后一天的日期 获取前一天的内容
    wx.request({
      url: 'https://apis.netstart.cn/zhihudaily/stories/before/' + date,
      success: (result) => {
        console.log(date, '前一天内容', result);
        wx.hideLoading()
        var newDays = this.data.days
        newDays.push(result.data)
        this.setData({
          days: newDays
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})

