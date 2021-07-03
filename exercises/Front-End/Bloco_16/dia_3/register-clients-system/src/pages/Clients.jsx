import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import ClientsMap from '../components/ClientsMap';


class Clients extends Component {
  render() {
    const { userEmail, userSenha, clients } = this.props;
    if(!userEmail || !userSenha) {
      alert('Login não efetuado!');
      return <Redirect to="/"/>
    }
    return (
      <div>
        <Link to="/">Sair</Link>
        <h1>Clientes cadastrados</h1>
        {clients.length === 0 ? <h3>Nenhum cliente cadastrado!</h3> : <ClientsMap clients={clients}/>}
        <Link to="/registerClients">Cadastrar clientes</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.loginReducer.email,
  userSenha: state.loginReducer.senha,
  clients: state.registerReducer.clients,
})

export default connect(mapStateToProps)(Clients)
