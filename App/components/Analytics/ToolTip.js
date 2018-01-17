import React, { Component } from 'react';

class ToolTip extends Component {
  constructor(){
      super();
  }
  render() {
    const { active, label, payload } = this.props;
    console.log('my props:', this.props)
    if (active) {
      return (
        <p>{`${payload[0].value} views on ${payload[0].payload.date}`}</p>
      );
    }
    return null;
  }
}

export default ToolTip