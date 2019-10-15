import React from 'react';
import createReactClass from 'create-react-class';


const Square = createReactClass({
  render: function () {
    const squareStyle = {
      height: 150,
      backgroundColor: this.props.color,
      color: "#133",
      margin: 20
    }
    return (
      <div style={squareStyle}>
      </div>
    );
  }
});

export default Square;