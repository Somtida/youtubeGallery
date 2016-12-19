var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  saveVideo(video) {
    AppDispatcher.handleViewAction({
    	actionType: AppConstants.SAVE_VIDEO,
    	video
    });
  },
  receiveVideos(videos) {
    AppDispatcher.handleViewAction({
    	actionType: AppConstants.RECEIVE_VIDEOS,
    	videos
    });
  },
  removeVideo(videoId) {
  	AppDispatcher.handleViewAction({
  		actionType: AppConstants.REMOVE_VIDEO,
  		videoId
    });
  },


}

module.exports = AppActions;
