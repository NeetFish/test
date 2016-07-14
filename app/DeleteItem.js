'use strict'

var React = require('react');

var DeleteItem = React.createClass({
  getInitialState: function(){
    return {
      name: ""
    };
  },
  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  },
  handleClick(e) {
    this.props.delItem(this.state.name);
  },
  render() {
    return(
      <div>
        <input onChange={this.handleChange}/>
        <input type="button" onClick={this.handleClick} value={"Delete item"}/>
      </div>
    );
  }
}) ;

module.exports = DeleteItem;
