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
            url: `/pages/detail-video/detail-video?id=${this.properties.itemData.id}`
        })
    }
  }
});
