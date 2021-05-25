import React from 'react';
// import Image from './Image'

class UserProfile extends React.Component {
  render() {
    return (
        <span>User: {this.props.user.name} {this.props.user.email} </span>
        // <p>Nome: {this.props.user.name} </p>
        // <p>Email: {this.props.user.email} </p>
        // <Image src={this.props.user.image} alt='User profile image'/>

    )
  }
}

export default UserProfile;
