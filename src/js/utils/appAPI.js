var Firebase = require('firebase')
var AppActions = require('../actions/AppActions');

module.exports = {
  saveVideo(video) {
    console.log('saved to firebase');
    this.firebaseRef = new Firebase("https://mygallery-3b400.firebaseio.com/videos");
    this.firebaseRef.push(video);
  },
  getVideos() {
    this.firebaseRef = new Firebase("https://mygallery-3b400.firebaseio.com/videos");
    this.firebaseRef.once("value", (snapshot) => {
      var videos = [];
      snapshot.forEach(ele => {
        var video = {
          id: ele.key(),
          title: ele.val().title,
          video_id: ele.val().video_id,
          description: ele.val().description,
        }
        videos.push(video);
        AppActions.receiveVideos(videos);
      })
    });
  },
  removeVideo(videoId) {
    console.log("appAPI",videoId);
  	this.firebaseRef = new Firebase(`https://mygallery-3b400.firebaseio.com/videos/${videoId}`);
  	this.firebaseRef.remove();
  },
}
