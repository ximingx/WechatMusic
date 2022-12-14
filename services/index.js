let app = getApp()

class Request {
  constructor() {
    this.baseURL = app.globalData.config.baseURL
  }

  get(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        method: 'get',
        url: this.baseURL + url,
        data: data,
        success: (res) => {
          resolve(res.data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        method: 'post',
        data,
        success: (res) => {
          resolve(res.data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        method: 'put',
        data,
        success: (res) => {
          resolve(res.data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }

  delete(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        method: 'delete',
        data,
        success: (res) => {
          resolve(res.data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
}

module.exports = new Request()
