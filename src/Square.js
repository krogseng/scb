import React from 'react';
import createReactClass from 'create-react-class';


const Square = createReactClass({
  render: function () {
    const squareStyle = {
      height: 150,
      width: 150,
     // backgroundColor: this.props.color,
     backgroundColor: "#f12",
      color: "#133",
      margin: 20
    }
    return (
      <div style={squareStyle}>
          Menu Option A
      </div>
    );
  }
});

export default Square;