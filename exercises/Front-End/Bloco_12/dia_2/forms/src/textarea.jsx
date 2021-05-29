import React, { Component } from 'react'

export default class Textarea extends Component {
  render() {

    const { value, handler } = this.props;

    return (
      <fieldset>
        <label>
          <textarea name="description" value={value} onChange={handler}/>
        </label>
      </fieldset>
    )
  }
}
