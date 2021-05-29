import React from 'react';
import Textarea from './textarea';
import Select from './Select';
import Inputs from './Inputs';

class Forms extends React.Component {

  constructor() {
    super()
    this.state = {
      description: '',
      meuEstado: '',
      reactLike: '',
      programa: '',
      formularioComErros: false,
    }

    this.formEventHandler = this.formEventHandler.bind(this);
  }

  formEventHandler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <form>
          <Select handler={this.formEventHandler} />   
          <Inputs handler={this.formEventHandler} />
          <Textarea value={this.state.description} handler={this.formEventHandler} />
        </form>
      </div>
    );
  }
}

export default Forms;