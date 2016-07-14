/* TestOne.js */

'use strict';

var React = require('react');
var NaFail = require('./NaFail.js');

var TestOne = React.createClass({
    getInitialState: function() {
      return {
        name: this.props.name,
        show: this.props.show
      };
    },
    changeNa(name) {
      this.props.protectCon({name});
      this.setState({name});
    },
    showOrNot() {
      if (this.props.show) {
          return "visible";
        }
      else {
          return "hidden";
      }
    },
    render() {
        return (
            <div style={{visibility:this.showOrNot()}}>
                <h1>{this.state.name}</h1>
                <NaFail changeNa={this.changeNa} name={this.state.name} />
            </div>
        );
    }
});

module.exports = TestOne;
