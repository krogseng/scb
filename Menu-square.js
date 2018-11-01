import React from 'react';
import createReactClass from 'create-react-class';


const Square = createReactClass({
  render: function () {
    const squareStyle = {
      height: 150,
      backgroundColor: this.props.color
    }
    return (
      <div style={squareStyle}>

      </div>
    );
  }
});

export default Square;