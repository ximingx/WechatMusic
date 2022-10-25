// pages/play/play.js
const {getSongDetail, getLyrics} = require('../../services/play/index')
const {parseLyric} = require('../../utils/parseLyric')
const app = getApp()
const audioContext = wx.createInnerAudioContext()
Page({
  data: {
    statusHeight: 0,
    contentHeight: 0,
    id: 0,
    currentSong: {},
    currentPage: 0,
    lyrics: "",
    currentLyric: '',
    currentLyricIndex: 0,
    currentTime: 0,
    durationTime: 0,
    sliderValue: 0,
    isSliderChange: false,
    isPlay: false,
  },
  onLoad(options) {
    let id = options.id
    this.setData({id})
    this.getSong(id)
    this.setData({
      statusHeight: app.globalData.screen.statusBarHeight,
      contentHeight: app.globalData.screen.contentHeight
    })
    // 歌曲加载播放
    audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    audioContext.autoplay = true
    audioContext.onTimeUpdate(() => {
      if (!this.data.isPlay) {
        this.setData({
          isPlay: true
        })
      }
      // 更新进度
      if (!this.data.isSliderChange) {
        const sliderValue = this.data.currentTime / this.data.durationTime * 100
        this.setData({
          currentTime: audioContext.currentTime * 1000,
          sliderValue
        })
      }
      // 匹配歌词
      if (!this.data.lyrics.length) return
      let index = this.data.lyrics.length - 1
      for (let i = 0; i < this.data.lyrics.length; i++) {
        const info = this.data.lyrics[i]
        if (info.time > audioContext.currentTime * 1000) {
          index = i - 1
          break
        }
      }
      if (index === this.data.currentLyricIndex) return
      const currentLyricText = this.data.lyrics[index].text
      this.setData({
        currentLyric: currentLyricText,
        currentLyricIndex: index
      })
    })
    // 解决点击滑块时， 微信内部封装的缺点
    audioContext.onWaiting(() => {
      audioContext.pause()
    })
    audioContext.onCanplay(() => {
      audioContext.play()
    })
  },
  getSong(id) {
    getSongDetail(id).then(res => {
      this.setData({
        currentSong: res.songs[0],
        durationTime: res.songs[0].dt
      })
    })
    getLyrics(id).then(res => {
      const lrc = res.lrc.lyric
      const lyricInfos = parseLyric(lrc)
      this.setData({lyrics: lyricInfos})
    })
  },
  navBack() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  // 点击改变页面
  changePage(e) {
    this.setData({currentPage: e.currentTarget.dataset.index})
  },
  // 左右滑动
  onSwiperChange(e) {
    this.setData({currentPage: e.detail.current})
  },
  // process
  onSliderChange(e) {
    const currentTime = e.detail.value / 100 * this.data.durationTime
    audioContext.seek(currentTime / 1000)
    this.setData({currentTime, isSliderChange: false, sliderValue: e.detail.value})
  },
  onSliderChanging(e) {
    const currentTime = e.detail.value / 100 * this.data.durationTime
    this.setData({currentTime})
    this.data.isSliderChange = true
  },
  // controls
  onPlayPause() {
    if (this.data.isPlay) {
      audioContext.pause()
    } else {
      audioContext.play()
    }
    this.setData({isPlay: !this.data.isPlay})
  }
})
