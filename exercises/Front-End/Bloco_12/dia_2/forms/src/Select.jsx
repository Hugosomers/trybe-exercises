import React, { Component } from 'react'

export default class Select extends Component {
  render() {

    const { handler } = this.props;

    return (
    <fieldset>
      <label>
        <select name='meuEstado' onChange={handler}>
          <option value="MG">MG</option>
          <option value="SP">SP</option>
        </select>
      </label>
    </fieldset>
    )
  }
}
