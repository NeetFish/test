/* TestTwo.js */

'use strict';

var React = require('react');


var TestTwo = React.createClass({
  showOrNot(show) {
    if (show) {
        return "visible";
      }
    else {
        return "hidden";
    }
  },
  render() {
        return (
          <div style={{visibility:this.showOrNot(this.props.show)}}>
              <h1>Hello I am TestTwo Component</h1>
          </div>
        );
    }
});


module.exports = TestTwo;
