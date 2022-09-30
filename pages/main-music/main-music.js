import {getSwiperItem} from '../../services/main-music/index'

Page({
  data: {
    searchValue: '',
    banners: [],
    bannerHeight: 150,
    useCount: 0
  },
  // 生命周期函数
  onLoad: function (options) {
    this.getSwiperItem()
  },
  // 搜索框功能
  onSearchClick() {
    wx.navigateTo({
      url: '/pages/detail-search/detail-search'
    })
  },
  // 获取轮播图数据
  async getSwiperItem() {
    let res = await getSwiperItem()
    this.setData({
      banners: res.banners
    })
  },
  // 轮播图点击跳转
  onClickTopBanner(e) {
    let src = e.currentTarget.dataset.view
    if (!src) return
    wx.navigateTo({
        url: '/pages/web-view/web-view?src=' + encodeURIComponent(src),
    })
  },
  // 获取 image 组件高度
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
  // 推荐歌曲
  onRecommendMoreClick() {
    wx.navigateTo({
      url: '/pages/detail-recommend/detail-recommend'
    })
  },
})

