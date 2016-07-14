'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var ToDoItems = require('./ToDoItems.js');
var AddNewItem = require('./AddNewItem.js');
var DeleteItem = require('./DeleteItem.js');

var ToDoList = React.createClass({
  getInitialState: function() {
      return {
        todoItems:
        []
      };
  },
  addItem(itemName) {
    var items = this.state.todoItems;
    items.push({
      id: items.length + 1,
      data: itemName
    });
    this.setState({
      todoItems: items
    });
  },
  deleteItem(itemName) {
    var items = this.state.todoItems;
    var position = items.findIndex(function(item) {
      return item.data == itemName;
    });

    if (position != -1) {
      items.splice(position, 1);

      for (var i = position; i < items.length; i++) {
        items[i].id--;
      }
      console.log(items);
      this.setState({
        todoItems: items
      });
    }
  },
    render() {
      return (
        <div>
          <ToDoItems todoItems={this.state.todoItems} />
          <AddNewItem addItem={this.addItem} />
          <DeleteItem delItem={this.deleteItem} />
        </div>
      );
    }
});



module.exports = ToDoList;
