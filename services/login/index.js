const Request = require('../index');

//说明 : 直接调用此接口, 可获取游客cookie,如果遇到其他接口未登录状态报400状态码需要验证的错误,可使用此接口获取游客cookie避免报错
function getTourist() {
  return Request.get("/register/anonimous")
}

//说明 : 调用此接口 , 传入手机号码,密码可登录
function toUsePhonerLogin(phone, password) {
    return Request.get("/login/cellphone", {
        phone: phone,
        password: password
    })
}

// /login?email=xxx@163.com&password=yyy
function toUserEmailLogin(email, password) {
    return Request.get("/login", {
        email: email,
        password: password
    })
}

//说明 : 调用此接口 , 可获取登录状态
function getUserStatus() {
    return Request.get("/login/status")
}

//说明 : 调用此接口 , 可退出登录
function toUserLogout() {
  return Request.get("/logout")
}

module.exports = {
    getTourist,
    toUsePhonerLogin,
    toUserEmailLogin,
    getUserStatus,
    toUserLogout
}
