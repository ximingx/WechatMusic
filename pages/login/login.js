const {getSwiper} = require('../../services/index/index')
Page({
  data: {
    src: '',
    banner: [],
    phone: '',
    verifyCode: '',
  },
  onLoad: function (options) {
    this.getBG()
  },
  getBG() {
    getSwiper().then(res => {
      this.setData({
        banner: res.banners,
        src: res.banners[0].imageUrl
      })
      wx.setStorageSync('banner', res.banners)
    })
  }
});
