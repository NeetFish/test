'use strict';

var React = require('react');

var ToDoItems = React.createClass({
    render() {
      var display = this.props.todoItems.map(function(item){
        return(<li key={item.id}> {item.data} </li>);
      });
      return (
        <div>{display}</div>
      );
    }
});

module.exports = ToDoItems;
