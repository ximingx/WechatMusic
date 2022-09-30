import Request from '../index';

//说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
export function getUserPlaylist(id, limit = 30, offset = 0) {
  // offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
  return Request.get("/user/playlist", {
    uid: id,
    limit: limit,
    offset: offset
  })
}

//说明 : 登录后调用此接口 , 传入用户 id, 可获取用户播放记录
export function getUserRecord(id, type = 1) {
  // type=1 时只返回 weekData, type=0 时返回 allData
  return Request.get("/user/record", {
    uid: id,
    type: type
  })
}

// 说明 : 登录后调用此接口 , 可获取心动模式/智能播放列表
// 必选参数 : id : 歌曲 id
export function getSimiPlaylist(id) {
  return Request.get("/playmode/intelligence/list", {
    sid: id
  })
}

// 说明 : 调用此接口 , 可获得每日推荐歌单 ( 需要登录 )
export function getRecommendPlaylist() {
  return Request.get("/recommend/resource")
}

// 说明 : 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )
export function getRecommendSongs() {
  return Request.get("/recommend/songs")
}

// 私人 FM
export function getPersonalFM() {
  return Request.get("/personal_fm")
}

// 说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐 id 列表(id 数组)
export function getLikeList(uid) {
  return Request.get("/likelist", {
    uid: uid
  })
}

// 说明 : 调用此接口 , 可获得最近播放-歌曲
export function getRecentPlay(limit) {
  return Request.get("/record/recent/song", {
    limit: limit
  })
}

// 说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲
export function getArtist(id) {
  return Request.get("/artists", {
    id: id
  })
}

// 说明 : 调用此接口 , 可获取网友精选碟歌单
export function getTopPlaylist() {
  return Request.get("/top/playlist", {
    order: "hot",
    cat: "全部",
    limit: 50,
    offset: 0
  })
}

// 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
export function getSearchResult(keywords, limit = 30, offset = 0) {
  //type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
  return Request.get("/search", {
    keywords: keywords,
    limit: limit,
    offset: offset
  })
}
