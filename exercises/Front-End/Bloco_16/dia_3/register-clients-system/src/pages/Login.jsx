import React, { Component } from 'react'
import loginHandle from '../redux/action/loginHandle';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.toDisableButton = this.toDisableButton.bind(this);
  }

  toDisableButton() {
    const {userLoginInfo} = this.props;
    const email = userLoginInfo.email
    const senha = userLoginInfo.senha

    return email.length >= 7 && senha.length >= 5
  }

  render() {
    const { loginHandleAction } = this.props;
    return (
      <div>
        <Link to="/">Voltar</Link>

        <h1>Logar</h1>
        <form>
          <label>
            Email:
            <input 
              type="text"
              name="email"
              required
              onChange={ loginHandleAction }
            />
          </label>

          <label>
            Senha:
            <input 
              type="password"
              name="senha"
              required
              onChange={ loginHandleAction }
            />
          </label>
          <Link to="/clients">
            <button disabled={!this.toDisableButton()}>Entrar</button>
          </Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLoginInfo: state.loginReducer
})

const mapDispatchToProps = (dispatch) => ({
  loginHandleAction: (event) => dispatch(loginHandle(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
