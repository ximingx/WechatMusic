import Request from './index'

// 说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url
// 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url
// 未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
export function getMusicUrl(ids) {
  // level: 播放音质等级, 分为 standard => 标准,higher => 较高, exhigh=>极高, lossless=>无损, hires=>Hi-Res
  // eg: /song/url/v1?id=405998841,33894312&level=lossless
  return Request.get("/song/url/v1", {
    id: ids
  })
}

// 说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要登录 )
export function getComment(id, limit = 20, offset = 0) {
  return Request.get("/comment/music", {
    id: id,
    limit: limit,
    offset: offset
  })
}

// 说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
export function getLyric(id) {
  return Request.get("/lyric", {
    id: id
  })
}

// 说明 : 调用此接口 , 传入音乐 id, 可喜欢该音乐
export function likeMusic(id) {
  return Request.get("/like", {
    id: id,
    like: true
  })
}
