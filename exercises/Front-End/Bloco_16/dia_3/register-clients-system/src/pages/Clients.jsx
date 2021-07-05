import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import ClientsMap from '../components/ClientsMap';
import '../css/clients.css';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: 'all',
      // filteredClients: props.clients,
    }

    this.selectHandle = this.selectHandle.bind(this);
    // this.filterClients = this.filterClients.bind(this);
  }

  selectHandle({target}) {
    const {value} = target;
    this.setState({
      filterType: value,
    })
  }

  // filterClients() {
  //   const { clients } = this.props;
  //   const { filterType } = this.state;
    
  //   if(filterType === 'all') {
  //     this.setState({
  //       filteredClients: clients,
  //     });
  //   }

  //   if(filterType === 'alfab') {
  //     const sortedArray = [...clients.sort(function(a, b) {
  //       return a.nome.localeCompare(b.nome);
  //     })];
  //     this.setState({
  //       filteredClients: sortedArray,
  //     });
  //   }

  // }

  render() {
    const { userEmail, userSenha, clients } = this.props;
    // const { filteredClients } = this.state;

    if(!userEmail || !userSenha) {
      alert('Login não efetuado!');
      return <Redirect to="/"/>
    }
    return (
      <div className="clientsContainer">
        <h1>Clientes cadastrados</h1>
        <select onChange={this.selectHandle} >
          <option value="all">Todos</option>
          <option value="alfab">Alfabética</option>
        </select>
        <button type="button" onClick={this.filterClients}>Aplicar</button>
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
})

export default connect(mapStateToProps)(Clients)
