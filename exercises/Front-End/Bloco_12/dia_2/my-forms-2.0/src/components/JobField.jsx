import React, { Component } from 'react'

export default class JobField extends Component {
  render() {
    const { value, handler, mouseOnTop } = this.props
    return (
      <fieldset>
        <legend>Informações do último emprego</legend>
        <p>Resumo do currículo:</p>
        <label>
          <textarea maxLength="1000" required name="cv" value={value.cv} onChange={handler} />
        </label>

        <p>Cargo:</p>
        <label>
          <textarea maxLength="40" required name="post" value={value.post} onChange={handler} onMouseEnter={mouseOnTop} />
        </label>

        <p>Descrição do cargo:</p>
        <label>
          <textarea maxLength="500" required name="postDescription" value={value.postDescription} onChange={handler} />
        </label>
      </fieldset>
    )
  }
}
