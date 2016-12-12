var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  saveVideo(video) {
    AppDispatcher.handleViewAction({
    	actionType: AppConstants.SAVE_VIDEO,
    	video
    })
  },
  receiveVideos(videos) {
    AppDispatcher.handleViewAction({
    	actionType: AppConstants.RECEIVE_VIDEOS,
    	videos
    })
  },


}

module.exports = AppActions;
