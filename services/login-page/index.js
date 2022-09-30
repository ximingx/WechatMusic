import Request from "../index.js"

//说明 : 直接调用此接口, 可获取游客cookie,如果遇到其他接口未登录状态报400状态码需要验证的错误,可使用此接口获取游客cookie避免报错
export function getTourist() {
  return Request.get("/register/anonimous")
}

//说明 : 调用此接口 ,传入手机号码, 可发送验证码
export function getUserPhone(phone) {
  return Request.get("/captcha/sent", {
    phone: phone
  })
}

//说明 : 调用此接口 ,传入手机号码和验证码, 可校验验证码是否正确
export function checkUserPhone(phone, captcha) {
  return Request.post("/captcha/verify", {
    phone: phone,
    captcha: captcha
  })
}

//说明 : 调用此接口 , 可获取登录状态
export function getUserStatus() {
    return Request.get("/login/status")
}

//说明 : 调用此接口 , 可退出登录
export function toUserLogout() {
  return Request.get("/logout")
}

