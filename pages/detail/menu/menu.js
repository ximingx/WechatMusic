import {getMusicTag, getTopPlayList} from "../../../services/index/index"

Page({
  data: {
    allTags: []
  },
  onLoad: function (options) {
    this.fetchAllMenuList()
  },
  async fetchAllMenuList() {
    let data = await getMusicTag()
    let tags = data.tags
    let allPromise = []
    for (const tag of tags) {
      const promise = getTopPlayList(tag.name)
      allPromise.push(promise)
    }
    Promise.all(allPromise).then(res => {
      this.setData({
        allTags: res
      })
    })

  }
});
