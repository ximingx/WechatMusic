// app.js
App({
  globalData: {
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
