// app.js
App({
  globalData: {
    config: {
      baseURL: 'http://ximingx.com:3000'
    },
    system: {},
    screen: {
      width: 0,
      height: 0,
      statusBarHeight: 0,
      contentHeight: 0
    }
  },
  onLaunch: function () {
    // 获取用户的屏幕适配
    wx.getSystemInfo({
      success: res => {
        this.globalData.screen.width = res.screenWidth
        this.globalData.screen.height = res.screenHeight
        this.globalData.screen.statusBarHeight = res.statusBarHeight
        this.globalData.screen.contentHeight = res.screenHeight - res.statusBarHeight - 44
      }
    })
  }
})
