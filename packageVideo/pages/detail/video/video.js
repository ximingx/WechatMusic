const {getDetailMV, getUrlMV, getAboutMV, getCommitMV} = require('../../../../services/video')
const getRandomColor = require('../../../../utils/random-color')

Page({
  data: {
    id: '',
    videoUrl: '',
    data: {},
    about: [],
    commit: []
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getMVUrl()
    this.getDetail()
    this.getAboutMV()
    this.getCommitMV()
  },
  // 获取视频地址
  async getMVUrl() {
    var res = await getUrlMV(this.data.id);
    this.setData({
      videoUrl: res.data.url
    })
  },
  // 获取视频详情
  async getDetail() {
    var res = await getDetailMV(this.data.id);
    this.setData({
      data: res.data
    })
  },
  // 获取相关视频
  async getAboutMV() {
    var res = await getAboutMV(this.data.id);
    this.setData({
      about: res.mvs
    })
  },
  // 获取视频评论
  async getCommitMV() {
    var res = await getCommitMV(this.data.id);
    var arr = []
    var time = 0
    for (let i = 0; i < res.hotComments.length; i++) {
      arr.push({
        text: res.hotComments[i].content,
        time: time++,
        color: getRandomColor()
      })
    }
    for (let i = 0; i < res.comments.length; i++) {
      arr.push({
        text: res.comments[i].content,
        time: time++,
        color: getRandomColor()
      })
    }
    this.setData({
      commit: arr
    })
  },
  // 跳转到视频详情
  toDetailMV(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/packageVideo/pages/detail/video/video?id=${id}`
    })
  }
});
