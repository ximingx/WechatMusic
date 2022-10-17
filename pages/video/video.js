const {getTopMV} = require('../../services/video/index');

Page({
  data: {
    videoList: [],
    hasMore: true,
    offset: 0
  },
  onLoad: function () {
    this.fetchTopMV()
  },
  // 获取视频列表
  async fetchTopMV() {
    let res = await getTopMV(10, this.data.videoList.length)
    let has = res.hasMore
    res = [...this.data.videoList, ...res.data]
    var result = [];
    var obj = {};
    for (var i = 0; i < res.length; i++) {
      if (!obj[res[i].id]) {
        result.push(res[i]);
        obj[res[i].id] = true;
      }
    }
    this.setData({
      videoList: result,
      hasMore: has
    })
  },
  // 页面上拉触底事件的处理函数
  onReachBottom() {
    if (this.data.hasMore) {
      this.fetchTopMV()
    }
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.setData({
      videoList: []
    })
    this.fetchTopMV().then(() => {
      wx.stopPullDownRefresh()
    })
  }
})
