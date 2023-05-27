// pages/shuju/shuju.js
Page({




  /**
   * 页面的初始数据
   */
  data: {
    days: [],
    showMore: false,
    history: []
  },


  //点击跳转
  navToDetail(event) {
    console.log(456, event.currentTarget.dataset.id);
    //
    wx.navigateTo({

      url: '/pages/detail/detail?id=' + event.currentTarget.dataset.id,
      // ？
      // events: events,
      // success: (result) => {},
      // fail: (res) => {},
      // complete: (res) => {},
    })
  },


  // 点击 加载更多
  tapHandler() {
    // 先获取所有days的最后一项 的 日期 date
    var date = this.data.days[this.data.days.length - 1].date
    console.log('点击加载更多', date);

    wx.showLoading({
      title: '加载中',
    })

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
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("1")

    wx.showLoading({
      title: '加载中',
    })

    // 发起网络请求
    wx.request({
      url: 'https://apis.netstart.cn/zhihudaily/stories/latest',
      success: (result) => {
        // 成功之后做什么 控制台输出
        console.log('结果', result)
        wx.hideLoading()
        // 往days的末尾添加今天的内容
        var newDays = this.data.days
        newDays.push(result.data)

        // var str = this.data.days.item.data;
        // year.write(str.substr(0,4));
        // month.write(str.substr(4,2));
        // day.write(str.substr(6,2));



        // 修改 data 的某一个 状态
        this.setData({
          days: newDays,
          // year: year,
          // month: month,
          // day: day
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
    // console.log('shuju显示')
    // var history = wx.getStorageSync('history')
    
    // this.


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
    // 
    if (this.data.days.length >= 3) {
      this.setData({
        showMore: true
      })
    } else {

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
    }




  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})