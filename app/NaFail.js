/* NaFail.js */

'use strict';

var React = require('react');

var NaFail = React.createClass({
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
    handleChange(e) {
      const name = e.target.value;
      this.props.changeNa(name);
      this.setState({
        name: name
      })
    },
    render() {
        return (
            <input value={this.state.name} onChange={this.handleChange} />
        );
    }
});

module.exports = NaFail;
