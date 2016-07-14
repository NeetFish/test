/* main.js */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TestOne = require('./TestOne.js');
var TestTwo = require('./TestTwo.js');
var ToDoList = require('./ToDoList.js');
var PracticeOne = require('./PracticeOne.js');
var PlaceHolder = require('./PlaceHolder.js');


import { Router, Route, IndexRoute, hashHistory } from "react-router";


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PracticeOne}>
      <IndexRoute component={PlaceHolder}></IndexRoute>
      <Route path="todo" component={ToDoList}></Route>
    </Route>

  </Router>,
  test2);
