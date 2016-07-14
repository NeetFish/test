
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TestOne = require('./TestOne.js');
var TestTwo = require('./TestTwo.js');
var ToDoList = require('./ToDoList.js');
var PlaceHolder = require('./PlaceHolder.js');

import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Link } from "react-router";

var PracticeOne = React.createClass({
    getInitialState: function() {
        return {
          switch: true,
          name: "Default Name",
        };
    },
    protectCon(name) {
      this.setState({name});
    },
    _toggle() {
        this.setState({
            switch: !this.state.switch
        });
    },
    render() {
      if (this.state.switch) {
        return (
            <div>
                <Link to="todo">Todo</Link>
                {this.props.children}
                <TestOne show={true} protectCon={this.protectCon} name={this.state.name} />
                <TestTwo show={false}/>
                <div>
                    <input type="button" onClick={this._toggle} value="Press Me!" />
                </div>
                <ToDoList />
            </div>
        );
      }
      else {
        return (
          <div>
          <Link to="todo">Todo</Link>
          {this.props.children}
              <TestOne show={false} protectCon={this.protectCon} name={this.state.name} />
              <TestTwo show={true} />
              <div>
                   <input type="button" onClick={this._toggle} value="Press Me!" />
              </div>
              <ToDoList />
          </div>
        );
      }
    }
});


module.exports = PracticeOne;
