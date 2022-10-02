const Request = require('../index');

// 说明 : 登录后调用此接口 , 可获取心动模式/智能播放列表
// 必选参数 : id : 歌曲 id
function getsSimiePlaylist(id) {
  return Request.get("/playmode/intelligence/list", {
    sid: id
  })
}

// 说明 : 调用此接口 , 可获得每日推荐歌单 ( 需要登录 )
function getRecommendPlaylist() {
  return Request.get("/recommend/resource")
}

// 说明 : 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )
function getRecommendSongs() {
  return Request.get("/recommend/songs")
}

// 私人 FM
function getPersonalFM() {
  return Request.get("/personal_fm")
}

// 说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲
function getArtist(id) {
  return Request.get("/artists", {
    id: id
  })
}

function getMusicUrl(ids) {
  // level: 播放音质等级, 分为 standard => 标准,higher => 较高, exhigh=>极高, lossless=>无损, hires=>Hi-Res
  // eg: /song/url/v1?id=405998841,33894312&level=lossless
  return Request.get("/song/url/v1", {
    id: ids
  })
}

// 说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要登录 )
function getMusicComment(id, limit = 20, offset = 0) {
  return Request.get("/comment/music", {
    id: id,
    limit: limit,
    offset: offset
  })
}

// 说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
function getMusicLyric(id) {
  return Request.get("/lyric", {
    id: id
  })
}

// 说明 : 调用此接口 , 传入音乐 id, 可喜欢该音乐
function ifLikeMusic(id) {
  return Request.get("/like", {
    id: id,
    like: true
  })
}

// 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
function getSearchResult(keywords, limit = 30, offset = 0) {
  //type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
  return Request.get("/search", {
    keywords: keywords,
    limit: limit,
    offset: offset
  })
}

module.exports = {
    getsSimiePlaylist,
    getRecommendPlaylist,
    getRecommendSongs,
    getPersonalFM,
    getArtist,
    getMusicUrl,
    getMusicComment,
    getMusicLyric,
    ifLikeMusic,
    getSearchResult
}
