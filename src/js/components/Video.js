var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Video = React.createClass({
  var link = "https://www.youtube.com/embed/"+this.props.video.video_id;;
  render(){
    return(
      <div className="c4">
      <label>title</label>
      <h5>{this.props.video.title}</h5>
      <iframe width="560" height="315" src={link} frameborder="0" allowfullscreen></iframe>
  
      </div>
    )
  }
})

module.exports = Video;
