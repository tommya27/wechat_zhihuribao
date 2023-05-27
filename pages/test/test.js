// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello 小程序",
    friends: ['hong', 'huang', 'hua', 'wang', 'xxx'],
    // 数组 访问某一项 用下标 xxx[index] 
    // index 从0开始
    person: {
      name: "nick",
      age: 17
    },
    // 对象 访问某一项 用 person.age

    banners: [{
        image: "https://picx.zhimg.com/v2-fd8aed795afd8eb1c4465cf613f0d8e6.jpg?source=8673f162",
        image_hue: "0xb39a7d",
        title: "地图投影怎么做到按条件（等角、等面积、等距）投影的？"
      },
      {
        image: "https://picx.zhimg.com/v2-82848853259bc54c1b8a49f21a64c3b4.jpg?source=8673f162",
        image_hue: "0x777f45",
        title: "小事 · 你在哪一刻突然感觉自己长大了？"
      },
      {
        image: "https://pica.zhimg.com/v2-10e516997a4d23d3fe1bcee11315ecbe.jpg?source=8673f162",
        image_hue: "0xb3817d",
        title: "小事 · 有哪些瞬间你觉得突然被治愈了？"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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