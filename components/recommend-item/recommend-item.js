Component({
  properties: {
    item: {
        type: Object,
        value: {}
    },
    index: {
        type: Number,
        value: 0
    }
  },
  data: {},
  methods: {
    onSongItemClick() {
      const id = this.properties.item.id;
      wx.navigateTo({
        url: `/packagePlay/pages/play/play?id=${id}`,
      })
    }
  }
});
