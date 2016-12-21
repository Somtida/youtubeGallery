var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _videos = [];

var AppStore = assign({}, EventEmitter.prototype, {
  saveVideo(video) {
  	_videos.push(video);
  },
  getVideos() {
  	return _videos;
  },
  setVideos(videos) {
  	_videos = videos;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.SAVE_VIDEO:
	    console.log("Saving video…", action.video);

    	// Store Save
    	AppStore.saveVideo(action.video);

    	//API Save
    	AppAPI.saveVideo(action.video);

    	//Emit Change
    	AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.RECEIVE_VIDEOS:
	    console.log("Receiving videos…");

    	// Set Videos
    	AppStore.setVideos(action.videos);

    	//Emit Change
    	AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.REMOVE_VIDEO:
    	console.log("Removing Video…");

      // Store Remove
    	AppStore.removeVideo(action.videoId);

    	// API Remove
    	AppAPI.removeVideo(action.videoId);

    	//Emit Change
    	AppStore.emit(CHANGE_EVENT);

  }

  return true;
});

module.exports = AppStore;
