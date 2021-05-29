import React, { Component } from 'react'

export default class Reset extends Component {
  render() {
    const { reset } = this.props
    return (
      <input type="reset" value="Limpar" onClick={reset}/>
    )
  }
}
