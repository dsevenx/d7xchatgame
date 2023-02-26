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
      stepNumber: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });

    const history = this.state.history.slice(0, step + 1);

    this.setState({
      history: history,
    });
  }

  handleClick(nummer) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);

    const current = history[this.state.stepNumber];
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
      this.setState({
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
      });
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = CalculateWinner(current.squares);

    let status = "";
    if (winner && winner !== " ") {
      status = "<h2>WINNER :" + winner + "<h2>";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";

      if (move >= 1 && move === this.state.history.length - 1) {
        return "";
      }
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
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
          <div>Spielschritt : {this.state.stepNumber}</div>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
