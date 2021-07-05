import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import ClientsMap from '../components/ClientsMap';
import '../css/clients.css';
import { filterClients } from '../redux/action/filterClients';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: 'all',
    }

    this.selectHandle = this.selectHandle.bind(this);
  }

  selectHandle({target}) {
    const {value} = target;
    this.setState({
      filterType: value,
    })
  }

  render() {
    const { userEmail, userSenha, clients, filterClients } = this.props;

    if(!userEmail || !userSenha) {
      alert('Login não efetuado!');
      return <Redirect to="/"/>
    }
    return (
      <div className="clientsContainer">
        <h1>Clientes cadastrados</h1>
        <select onChange={filterClients}>
          <option value="all">Todos</option>
          <option value="alfabetica">Alfabética</option>
        </select>
        {/* <button type="button" onClick={this.filterClients}>Aplicar</button> */}
        {clients.length === 0 ? <h3>Nenhum cliente cadastrado!</h3> : <ClientsMap clients={clients}/>}
        <Link className="Links" to="/registerClients">Cadastrar clientes</Link>
        <Link className="Links" to="/">Sair</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.loginReducer.email,
  userSenha: state.loginReducer.senha,
  clients: state.registerReducer.clients,
});

const mapDispatchToProps = (dispatch) => ({
  filterClients: (e) => dispatch(filterClients(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
