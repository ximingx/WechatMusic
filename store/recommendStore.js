const {HYEventStore} = require('hy-event-store');
const {getPlaylist} = require('../services/index/index');

const recommendStore = new HYEventStore({
  state: {
    recommendList: [],
  },
  actions: {
    fetchRecommendSongs(ctx) {
      getPlaylist(3778678).then(res => {
        ctx.recommendList = res.playlist.tracks
      })
    }
  }
})

module.exports = recommendStore;
