const recommendStore = require('../../store/recommendStore')
const rankingStore = require('../../store/rankingStore')
const {getSwiper, getPlaylist, getTopPlayList} = require('../../services/index/index')


Page({
  data: {
    searchValue: '',
    banners: [],
    bannerHeight: 150,
    useCount: 0,
    recommendList: [],
    recommendMenuList: [],
    hotMenuList: [],
    topPlayList: [],
    rankingInfos: {}
  },
  // 生命周期函数
  onLoad: function (options) {
    this.getSwiper()
    this.getPlaylist()
    this.fetchHotSongs()
    recommendStore.onState('recommendList', (value) => {
      this.setData({
        recommendList: value.slice(0, 6)
      })
    })
    rankingStore.onState('newRankingList', (value) => {
      let newInfo = {...this.data.rankingInfos, newRankingList: value}
      this.setData({
        rankingInfos: newInfo
      })
    })
    rankingStore.onState('origionalRankingList', (value) => {
      let newInfo = {...this.data.rankingInfos, origionalRankingList: value}
      this.setData({
        rankingInfos: newInfo
      })
    })
    rankingStore.onState('upRankingList', (value) => {
      let newInfo = {...this.data.rankingInfos, upRankingList: value}
      this.setData({
        rankingInfos: newInfo
      })
    })
    recommendStore.dispatch('fetchRecommendSongs')
    rankingStore.dispatch("fetchRankingDataAction")
  },
  // 搜索框
  onSearchClick() {
    wx.navigateTo({
      url: '/pages/detail/search/search'
    })
  },
  // 轮播图
  async getSwiper() {
    let res = await getSwiper()
    this.setData({
      banners: res.banners
    })
  },
  onClickTopBanner(e) {
    let src = e.currentTarget.dataset.view
    if (!src) return
    wx.navigateTo({
      url: '/pages/web/web?src=' + encodeURIComponent(src),
    })
  },
  async onBannerLoad() {
    if (this.data.useCount++ === 0) {
      let res = await this.querySelect('.banner-image')
      this.setData({
        bannerHeight: res[0].height
      })
    }
  },
  querySelect(selector) {
    return new Promise((resolve) => {
      const query = wx.createSelectorQuery()
      query.select(selector).boundingClientRect()
      query.exec((res) => {
        resolve(res)
      })
    })
  },
  // 推荐热歌
  async getPlaylist() {
    let res = await getPlaylist(3778678)
    this.setData({
      recommendList: res.playlist.tracks.slice(0, 6)
    })
  },
  onRecommendMoreClick() {
    wx.navigateTo({
      url: '/pages/detail/recommend/recommend'
    })
  },
  // 热门歌单
  async fetchHotSongs() {
    let res = await getTopPlayList()
    this.setData({
      hotMenuList: res.playlists
    })
    let data = await getTopPlayList("华语")
    this.setData({
      recommendMenuList: data.playlists
    })
  }
})


