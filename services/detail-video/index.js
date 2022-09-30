import Request from '../index'

export function getMV (id) {
  return Request.get('/mv/url', {
    id
  })
}

export function getDetail(id) {
  return Request.get('/mv/detail', {
    mvid: id
  })
}

export function getAboutMV(id) {
  return Request.get('/simi/mv', {
    mvid: id
  })
}

export function getCommitMV(id) {
  return Request.get('/comment/mv', {
    id
  })
}

