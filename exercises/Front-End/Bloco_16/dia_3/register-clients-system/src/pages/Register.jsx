import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addClient } from '../redux/action/registerClient'
import { Link } from 'react-router-dom';
import '../css/registerClient.css';


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
      <div className="registerContainer">
        <h1>Registro de clientes</h1>
        <form className="registerForm">
          <label className="registerFormLabel">
            Nome:
            <input
              className="registerFormInput"
              type="text" 
              name="nome"
              onChange={this.inputHandle}
              value={nome}
              required
            />
          </label>

          <label className="registerFormLabel">
            Idade:
            <input
              className="registerFormInput"
              type="text" 
              name="idade"
              onChange={this.inputHandle}
              value={idade}
              required
            />
          </label>

          <label className="registerFormLabel">
            Email:
            <input
              className="registerFormInput"
              type="text" 
              name="email"
              onChange={this.inputHandle}
              value={email}
              required
            />
          </label>

          <button className="registerFormButton" onClick={this.submitHandle}>Cadastrar</button>
        </form>
        <Link to="/clients" className="Links">Clientes cadastrados</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addClient: (state) => dispatch(addClient(state)),
})

export default connect(null, mapDispatchToProps)(Register)
