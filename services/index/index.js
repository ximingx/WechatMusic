const Request = require('../index');

function getSwiper() {
  return Request.get('/banner')
}

// 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐
function getPlaylist(id) {
  return Request.get('/playlist/detail', {
    // 新歌id: 3779629
    // 原创id: 2884035
    // 热歌id: 3778678
    // 飙升id: 19723756
    // 榜单id: 377106
    id: id
  })
}

// 获取歌单类别
function getMusicTag() {
  return Request.get('/playlist/hot')
}

// 说明 : 调用此接口 , 可获取网友精选碟歌单
function getTopPlayList(cat = "全部", limit = 6, offset = 0) {
  return Request.get("/top/playlist", {
    order: "hot",
    cat: cat,
    limit: limit,
    offset: offset
  })
}

module.exports = {
    getSwiper,
    getPlaylist,
    getMusicTag,
    getTopPlayList
}
