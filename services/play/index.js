const Request = require('../index')

function getSongDetail(ids) {
  return Request.get('/song/detail', {
    ids
  })
}

function getLyrics(id) {
  return Request.get('/lyric', {
    id
  })
}

module.exports = {
  getSongDetail,
  getLyrics
}