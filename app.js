// app.js
App({
  globalData: {
    config: {
      baseURL: 'http://localhost:3000'
    },
    screen: {
      width: 0,
      height: 0
    },
    userInfo: null
  },
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        this.globalData.screen.width = res.screenWidth
        this.globalData.screen.height = res.screenHeight
      }
    })
  }
})
