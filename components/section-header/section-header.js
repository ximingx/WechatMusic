Component({
  properties: {
    title: {
        type: String,
        value: '标题'
    },
    rightText: {
        type: String,
        value: '更多'
    },
    hasMore: {
        type: Boolean,
        value: false
    }
  },
  data: {},
  methods: {
    moreTap() {
        this.triggerEvent('moreTap')
    }
  }
});
