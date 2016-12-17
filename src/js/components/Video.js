var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Video = React.createClass({
  render(){
    return(
      <div>
      <label>name</label>
      <h5>{this.props.video.name}</h5>
      </div>
    )
  }
})

module.exports = Video;
