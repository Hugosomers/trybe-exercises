import React, { Component } from 'react'

export default class Inputs extends Component {
  render() {

    const { handler } = this.props;

    return (
      <fieldset>
        <label>
          <input type='checkbox' name="reactLike" onChange={handler} />
        </label>
        <label>
          <input type='radio' name="programa" onChange={handler} />
        </label>
        <label>
          <input type='file' name='fileDrop' onChange={handler} />
        </label>
      </fieldset>    
    )
  }
}
