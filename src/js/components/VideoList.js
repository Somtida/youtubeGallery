var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Video = require('./Video');

var VideoList = React.createClass({
  render(){
    return(
      <div className="row">
        {
          this.props.videos.map((video, index) => {
            return(
              <Video video=video key=index />
            )
          })
        }
      </div>
    )
  }
})

module.exports = VideoList;
