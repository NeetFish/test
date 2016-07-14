
'use strict';


var React = require('react');
var ReactDOM = require('react-dom');
var TestOne = require('./TestOne.js');
var TestTwo = require('./TestTwo.js');
var ToDoList = require('./ToDoList.js');
var PracticeOne = require('./PracticeOne.js');
var PlaceHolder = require('./PlaceHolder.js');
var Nav = require('./Nav.js');
var Main = require('./main.js');

import { Router, Route, IndexRoute, hashHistory } from "react-router";


ReactDOM.render(
  <Nav>
   <Main />
  </Nav>,
  test);
