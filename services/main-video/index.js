import Request from '../index'

export function getTopVM(limit, offset) {
    return Request.get('/top/mv', {
        limit: limit,
        offset: offset
    })
}
