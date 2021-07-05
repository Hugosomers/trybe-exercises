import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteClient } from '../redux/action/deleteClient';
import '../css/clients.css';

class ClientsMap extends Component {
  render() {
    const {clients, deleteClient} = this.props;
    return (
      <div>
        <ul>
          {clients.map((client, index) => (
            <div key={index} className="clientsLiContainer">
            <li className="clientsLi">
              <p>Nome: {client.nome}</p>             
              <p>Idade: {client.idade}</p>          
              <p>Email: {client.email}</p>
            </li>
            <button onClick={() => deleteClient(index)} className="deleteButton">X</button>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteClient: (index) => dispatch(deleteClient(index)),
})

export default connect(null, mapDispatchToProps)(ClientsMap)
