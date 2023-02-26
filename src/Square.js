import React from "react";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.handleClick(this.props.nummer)}
      >
        {this.props.wert}
      </button>
    );
  }
}
/*
  function Square(props) {
      return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );
    }
    */
