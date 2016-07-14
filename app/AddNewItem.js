'use strict'

var React = require('react');

var AddNewItem = React.createClass({
  getInitialState: function() {
    return {
      itemName:  ""
    };
  },
  handleChange(e) {
    this.setState({
      itemName: e.target.value
    });
  },
  handleClick(e) {
    this.props.addItem(this.state.itemName);
  },
  render() {
    return(
      <div>
        <input onChange={this.handleChange}/>
        <input type="button" onClick={this.handleClick} value={"Add item"}/>
      </div>
    );
  }
}) ;

module.exports = AddNewItem;
