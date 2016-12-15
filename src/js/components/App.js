var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm');
var VideoList = require('./VideoList');

function getAppState() {
  return {
    videos: AppStore.getVideos(),
  }
}

var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getAppState());
  },

  render(){
    // console.log(this.state.videos);
    //let VideoList = this.state.videos.length ? <VideoList videos={this.state.videos} /> : null;
    return(
      <div>
        <AddForm />
        {/* {VideoList} */}
      </div>
    )
  }
})

module.exports = App;
