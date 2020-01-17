import React, { Component } from "react";
import "./App.css";


class Itens extends Component {
  render() {
    return (
      <div className={this.props.cl}>
        <img src={this.props.icon} className="itemimg"></img>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
export default Itens;
