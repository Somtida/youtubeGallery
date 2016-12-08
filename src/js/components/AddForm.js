var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    console.log(this.refs.title.value);
  },
  render(){
    return(
      <div>
        <div className="add-form">
          <panel className="c12">
            <h3>Add Video</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Video Title</label>
                <input type="text" className="form-control" ref="title"/>
              </div>
              <div className="form-group">
                <label>Video ID</label>
                <input type="text" className="form-control" ref="id"/>
              </div>
              <div className="form-group">
                <label>Video Description</label>
                <textarea className="form-control" ref="description"></textarea>
              </div>
              <button type="submit" className="button">Add</button>
            </form>
          </panel>
        </div>
      </div>
    )
  }
})

module.exports = AddForm;
