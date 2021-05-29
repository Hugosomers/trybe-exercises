import React, { Component } from 'react';
import PersonalField from './PersonalField';
import JobField from './JobField';
import Submit from './submit';
import DataDisplay from './DataDisplay';
import Reset from './reset';

const toReset = {
  nome: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  estado: '',
  home: '',
  cv: '',
  post: '',
  mouseEnter: false,
  postDescription: '',
  submit: false,
}

export default class Forms extends Component {
  constructor() {
    super();

    this.formHandler = this.formHandler.bind(this);
    this.toUpperCaseInput = this.toUpperCaseInput.bind(this);
    this.specialCharsRemove = this.specialCharsRemove.bind(this);
    this.verifyFirstChar = this.verifyFirstChar.bind(this);
    this.mouseOnTop = this.mouseOnTop.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      estado: '',
      home: '',
      cv: '',
      post: '',
      mouseEnter: false,
      postDescription: '',
      submit: false,
    }
  }

  formHandler({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  toUpperCaseInput({ target }) {
    this.setState({
      nome: target.value.toUpperCase(),
    })
  }

  specialCharsRemove({ target }) {
    this.setState({
      address: target.value.replace(/[`~!@#$%^&*+=><']/g, "")
    })
  }

  verifyFirstChar({ target }) {
    if (target.value.match(/^\d/)) {
      target.value = '';
    }
  }

  mouseOnTop() {
    if(!this.state.mouseEnter) {
      alert('Preencha com cuidado esta informação.');
      this.setState({
        mouseEnter: true,
      });
    }
  }

  submitForm() {
    this.setState({
      submit: true,
    })
  }

  resetForm() {
    this.setState(toReset)
  }

  render() {

    const { submit } = this.state;

    return (
      <form>
        <PersonalField 
          value={this.state} 
          handler={this.formHandler} 
          upperCaseFunc={this.toUpperCaseInput}
          specialCharsRem={this.specialCharsRemove}
          verirfyFirstChar={this.verifyFirstChar}
        />

        <JobField 
          value={this.state} 
          handler={this.formHandler}
          mouseOnTop={this.mouseOnTop}   
        />

        <Submit onClick={this.submitForm} />
        <Reset reset={this.resetForm} />

        { submit && <DataDisplay state={this.state}/>}
      </form>
    )
  }
}
