var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Video = React.createClass({
  var link = "";
  render(){
    return(
      <div className="c4">
      <label>title</label>
      <h5>{this.props.video.title}</h5>
      </div>
    )
  }
})

module.exports = Video;
