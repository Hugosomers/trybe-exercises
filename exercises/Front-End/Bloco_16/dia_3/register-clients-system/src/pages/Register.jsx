import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addClient } from '../redux/action/registerClient'
import { Link } from 'react-router-dom';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      email: '',
    }

    this.inputHandle = this.inputHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }

  inputHandle({target}) {
    const {name, value} = target;

    this.setState({
      [name]: value
    })
  }

  submitHandle(event) {
    event.preventDefault();
    const {addClient} = this.props
    addClient(this.state);
    this.setState({
      nome: '',
      idade: '',
      email: '',
    })
  }

  render() {
    const {nome, idade, email} = this.state;
    return (
      <div>
        <h1>Registro de clientes</h1>
        <form>
          <label>
            Nome:
            <input 
              type="text" 
              name="nome"
              onChange={this.inputHandle}
              value={nome}
            />
          </label>

          <label>
            Idade:
            <input 
              type="text" 
              name="idade"
              onChange={this.inputHandle}
              value={idade}
            />
          </label>

          <label>
            Email:
            <input 
              type="text" 
              name="email"
              onChange={this.inputHandle}
              value={email}
            />
          </label>

          <button onClick={this.submitHandle}>Cadastrar</button>
        </form>
        <Link to="/clients" >Clientes cadastrados</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addClient: (state) => dispatch(addClient(state)),
})

export default connect(null, mapDispatchToProps)(Register)
