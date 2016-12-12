var Firebase = require('firebase')
var AppActions = require('../actions/AppActions');

module.exports = {
  saveVideo(video) {
    console.log('API called...');
    this.firebaseRef = new Firebase("https://mygallery-3b400.firebaseio.com/videos");
    this.firebaseRef.push(video);
  },
}
