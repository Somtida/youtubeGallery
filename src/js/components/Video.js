var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Video = React.createClass({
  var link = <iframe width="560" height="315" src="https://www.youtube.com/watch?v=bFmThPwKRGU&sns=em" frameborder="0" allowfullscreen></iframe>
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
