import React from "react";
import Square from "./Square.js";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSquare(i) {
    return (
      <Square
        nummer={i}
        wert={this.props.squares[i]}
        handleClick={this.props.handleClick}
      ></Square>
    );
  }

  render() {
    return (
      <div>
        <h2>BOARD</h2>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
