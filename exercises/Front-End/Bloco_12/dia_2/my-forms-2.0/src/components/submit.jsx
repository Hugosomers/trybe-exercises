import React, { Component } from 'react'

export default class Submit extends Component {
  render() {
    const { onClick } = this.props
    return (
      <input type="button" value="Enviar" onClick={onClick}/>
    )
  }
}
