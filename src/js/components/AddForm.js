var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var video = {
    	title: this.refs.title.value.trim(),
    	video_id: this.refs.video_id.value.trim(),
    	description: this.refs.description.value.trim()
    }
    this.refs.title.value = "";
    this.refs.video_id.value = "";
    this.refs.description.value = "";
    AppActions.saveVideo(video);
  },
  render(){
    return(
      <div className="add-form">
        <panel className="c12">
          <h3>Add Video</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Video Title</label><br />
              <input type="text" className="form-control" ref="title"/>
            </div>
            <div className="form-group">
              <label>Video ID</label><br />
              <input type="text" className="form-control" ref="video_id"/>
            </div>
            <div className="form-group">
              <label>Video Description</label><br />
              <textarea className="form-control" ref="description"></textarea>
            </div>
            <button type="submit" className="btn-green">Add</button>
          </form>
        </panel>
      </div>
    )
  }
})

module.exports = AddForm;
