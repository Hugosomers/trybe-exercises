import React, { Component } from 'react'

export default class ClientsMap extends Component {
  render() {
    const {clients} = this.props;
    return (
      <div>
        <ul>
          {clients.map((client, index) => (
            <li key={index}>
              Nome: {client.nome}
              Idade: {client.idade}
              Email: {client.email}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
