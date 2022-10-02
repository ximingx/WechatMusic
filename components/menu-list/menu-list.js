Component({
  properties: {
    menuList: {
      type: Array,
      value: []
    },
    title: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    moreTap:function(){
      wx.navigateTo({
        url: "/pages/detail/menu/menu"
      })
    }
  }
});
