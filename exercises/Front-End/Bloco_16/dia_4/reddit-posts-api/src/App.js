import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchApi } from './redux/actions/redditHandle';
import RedditTitles from './components/RedditTitles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
    }

    this.selectHandle = this.selectHandle.bind(this);
  }

  selectHandle({ target }) {
    const {value} = target;
    const {fetchSubReddit} = this.props;
    this.setState({
      selectedValue: value,
    });

    fetchSubReddit(value);
  }

  render() {
    const {selectedValue} = this.state;
    const {fetchSubReddit, loading, data, error} = this.props;
    if(error) {
      return <h1>Algo deu errado: {error}</h1>;
    }
    return (
      <div>
        <h1>Selected: {selectedValue}</h1>
        <select onChange={this.selectHandle}>
          <option value="reactjs">React.Js</option>
          <option value="frontend">FrontEnd</option>
        </select>
        <h5>Última atualização: {Date()}</h5>
        <button onClick={() => fetchSubReddit(selectedValue)}>Refresh</button>
        {loading ? <h5>Loading...</h5> : <RedditTitles data={data}/> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.redditReducer.data,
  loading: state.redditReducer.loading,
  error: state.redditReducer.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchSubReddit: (value) => dispatch(fetchApi(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

