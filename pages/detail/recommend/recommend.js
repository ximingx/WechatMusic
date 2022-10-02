import recommendStore from '../../../store/recommendStore'
Page({
  data: {
    recommendList: []
  },
  onLoad: function () {
    recommendStore.onState("recommendList", (recommendList) => {
      this.setData({
        recommendList
      })
    })
  },
  onUnload: function () {
    recommendStore.offState("recommendList", () => {

    })
  }
});
