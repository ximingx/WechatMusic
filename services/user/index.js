const Request = require('../index');

//说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情
function getUserInfo(id) {
  return Request.get('/user/detail', {
    uid: id
  })
}

//说明 : 登录后调用此接口 ,可获取用户账号信息
function getUserAccountInfo() {
  return Request.get("/user/account")
}

//说明 : 登录后调用此接口 , 可以获取用户信息
function getUserMusicInfo() {
  return Request.get("/user/subcount")
}

//说明 : 登录后调用此接口 , 可以获取用户等级信息,包含当前登录天数,听歌次数,下一等级需要的登录天数和听歌次数,当前等级进度
function getUserLevelInfo() {
  return Request.get("/user/level")
}

//说明 : 登录后调用此接口 , 传入相关信息,可以更新用户信息
function updateUserInfo(data) {
  // gender=0&signature=测试签名&city=440300&nickname=binary&birthday=1525918298004&province=440000
  return Request.get("/user/update", data)
}

//说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
function getUserPlaylist(id, limit = 30, offset = 0) {
  // offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
  return Request.get("/user/playlist", {
    uid: id,
    limit: limit,
    offset: offset
  })
}

//说明 : 登录后调用此接口 , 传入用户 id, 可获取用户播放记录
function getUserRecord(id, type = 1) {
  // type=1 时只返回 weekData, type=0 时返回 allData
  return Request.get("/user/record", {
    uid: id,
    type: type
  })
}


// 说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐 id 列表(id 数组)
function getLikeList(uid) {
  return Request.get("/likelist", {
    uid: uid
  })
}

// 说明 : 调用此接口 , 可获得最近播放-歌曲
function getRecentPlaylist(limit) {
  return Request.get("/record/recent/song", {
    limit: limit
  })
}

module.exports = {
    getUserInfo,
    getUserAccountInfo,
    getUserMusicInfo,
    getUserLevelInfo,
    updateUserInfo,
    getUserPlaylist,
    getUserRecord,
    getLikeList,
    getRecentPlaylist
}
