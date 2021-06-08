import React, { Component } from 'react'
import MapUser from './MapUser';

export default class RandomUser extends Component {
  constructor() {
    super();

    this.state = {
      loading:  true,
      usersObj: [],
    }
  }

  fetchApi() {
    this.setState({ loading: true }, () => {
      fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          usersObj: data.results,
        })
      })
    })
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(_nextProps, { usersObj }) {
    const ageLimit = 50;
    const arr = usersObj[0];
    console.log(arr)
    if(arr) {
     if(arr.dob.age > ageLimit) {
       return false
     }
    }
    return true
  }

  render() {
    const loadingLine = <div>Loading...</div>
    const { loading, usersObj } = this.state;
    return (
      <div>
        <h1>Usuário</h1>
        <div>{ loading ? loadingLine : <MapUser user={usersObj}/>}</div>
      </div>
    )
  }
}
