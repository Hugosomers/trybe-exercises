import React, { Component } from 'react'

export default class RedditTitles extends Component {
  render() {
    const {data} = this.props;
    console.log(data)
    return (
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.data.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
