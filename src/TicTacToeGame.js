import React from "react";
import CalculateWinner from "./CalculateWinner.js";
import Board from "./Board.js";

export default class TicTacToeGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(" "),
        },
      ],
      xIsNext: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(nummer) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (CalculateWinner(squares)) {
      return;
    }

    if (squares[nummer] === " ") {
      if (this.state.xIsNext) {
        squares[nummer] = "X";
      } else {
        squares[nummer] = "O";
      }

      this.setState({
        history: history.concat([
          {
            squares: squares,
          },
        ]),
      });
      this.setState({ xIsNext: !this.state.xIsNext });
    }
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];

    const winner = CalculateWinner(current.squares);

    let status = "";
    if (winner && winner !== " ") {
      status = "WINNER :" + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    /*<ol>TODO</ol>

    */
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            handleClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}
