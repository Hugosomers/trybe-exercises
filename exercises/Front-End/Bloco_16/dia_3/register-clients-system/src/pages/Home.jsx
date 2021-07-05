import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Seja bem-vindo!</h1>
        <p>Este é um sistema de cadastro de clientes.</p>
        <p>Faça login para ver mais!</p>
        <Link to="/loginPage">Login</Link>
      </div>
    )
  }
}
