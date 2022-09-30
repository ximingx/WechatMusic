import Request from '../index';

//说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情
export function getUserInfo(id) {
  return Request.get('/user/detail', {
    uid: id
  })
}

//说明 : 登录后调用此接口 ,可获取用户账号信息
export function getUserAccountInfo() {
  return Request.get("/user/account")
}

//说明 : 登录后调用此接口 , 可以获取用户信息
export function getUserMusicInfo() {
  return Request.get("/user/subcount")
}

//说明 : 登录后调用此接口 , 可以获取用户等级信息,包含当前登录天数,听歌次数,下一等级需要的登录天数和听歌次数,当前等级进度
export function getUserLevelInfo() {
  return Request.get("/user/level")
}

//说明 : 登录后调用此接口 , 传入相关信息,可以更新用户信息
export function updateUserInfo(data) {
  // gender=0&signature=测试签名&city=440300&nickname=binary&birthday=1525918298004&province=440000
  return Request.post("/user/update", data)
}
