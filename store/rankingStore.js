const {HYEventStore} = require('hy-event-store');
const getPlaylist = require('../services/index/index').getPlaylist;

const rankingMap = {
  newRankingList: 3779629,
  origionalRankingList: 2884035,
  upRankingList: 19723756
}

const rankingStore = new HYEventStore({
  state: {
    newRankingList: [],
    origionalRankingList: [],
    upRankingList: []
  },
  actions: {
    fetchRankingDataAction(ctx) {
      for (const key in rankingMap) {
        const id = rankingMap[key]
        getPlaylist(id).then(res => {
          ctx[key] = res.playlist
        })
      }
    }
  }
})

module.exports = rankingStore
