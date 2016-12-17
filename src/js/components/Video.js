var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Video = React.createClass({
  render(){
    return(
      <div>
      {this.props.video}
      </div>
    )
  }
})

module.exports = Video;
