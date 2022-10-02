const Request = require('../index');

function getTopMV(limit, offset) {
  return Request.get('/top/mv', {
    limit: limit,
    offset: offset
  })
}

function getUrlMV (id) {
  return Request.get('/mv/url', {
    id
  })
}

function getDetailMV(id) {
  return Request.get('/mv/detail', {
    mvid: id
  })
}

function getAboutMV(id) {
  return Request.get('/simi/mv', {
    mvid: id
  })
}

function getCommitMV(id) {
  return Request.get('/comment/mv', {
    id
  })
}

module.exports = {
    getTopMV,
    getUrlMV,
    getDetailMV,
    getAboutMV,
    getCommitMV
}

