import React, { Component } from 'react'

export default class MapUser extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div>{user.map((user, index) => (
          <div key={index}>
            <span>{user.name.title} </span> 
            <span>{user.name.first} </span>
            <span>{user.name.last}</span>
            <div>{user.email}</div>
            <img src={user.picture.large} alt='profilePic'/>
            <div> Age: {user.dob.age}</div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}
