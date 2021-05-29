import React, { Component } from 'react'

export default class DataDisplay extends Component {
  render() {
    const { state } = this.props;
    return (
      <div>
        <h1>Informações pessoais</h1>
        <p>Nome: {state.nome}</p>
        <p>E-mail: {state.email}</p>
        <p>CPF: {state.cpf}</p>
        <p>Endereço: {state.address}</p>
        <p>Cidade: {state.city}</p>
        <p>Estado: {state.estado}</p>
        <p>Casa: {state.home}</p>

        <h1>Informações do último emprego</h1>
        <p>Resumo do currículo: {state.cv}</p>
        <p>Cargo: {state.post}</p>
        <p>Descrição do cargo: {state.postDescription}</p>
      </div>
    )
  }
}
