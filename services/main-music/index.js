import Request from '../index';

export function getSwiperItem() {
  return Request.get('/banner')
}

export function getRecommendList(id) {
  return Request.get('/playlist/detail', {
    // 新歌id: 3779629
    // 原创id: 2884035
    // 热歌id: 3778678
    // 飙升id: 19723756
    // 榜单id: 377106
    id: id
  })
}
