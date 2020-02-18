import React, { Component } from "react";
import "./style.css";

export default class Cores extends Component {
  state = {
    resultado: ""
  };

  handleCor = e => {
    e.preventDefault();
    let cor = e.target.value;
    this.setState({ resultado: cor });
  };

  render() {
    return (
      <div className="container">
        <div className="escolhaDeCores">
          <button
            value="vermelho"
            className="vermelho"
            onClick={e => {
              this.handleCor(e);
            }}
          >
            botao1
          </button>
          <button
            value="amarelo"
            className="amarelo"
            onClick={evento => {
              this.handleCor(evento);
            }}
          >
            botao2
          </button>
          <button
            value="azul"
            className="azul"
            onClick={e => {
              this.handleCor(e);
            }}
          >
            botao3
          </button>
          <button
            value="verde"
            className="verde"
            onClick={e => {
              this.handleCor(e);
            }}
          >
            botao4
          </button>
          <button
            value="rosa"
            className="rosa"
            onClick={e => {
              this.handleCor(e);
            }}
          >
            botao5
          </button>
        </div>

        <div className="resultado">
          <p>resultado: {this.state.resultado}</p>
        </div>
      </div>
    );
  }
}
