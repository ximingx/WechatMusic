Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },
  data: {},
  methods: {
    onVideoItemTap() {
        wx.navigateTo({
            url: `/pages/detail/video/video?id=${this.properties.itemData.id}`
        })
    }
  }
});
