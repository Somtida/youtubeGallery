var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Video = React.createClass({
  render(){
    console.log(this.props.video)
    return(
      <div>
        video
      </div>
    )
  }
})

module.exports = Video;
