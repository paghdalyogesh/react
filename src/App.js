import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from './actions'
import ProjectList from './components/ProjectList'

class App extends Component {
  constructor(props) {
    super(props); 
 
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.onFetchData()
  }
  handleSubmit() {
    console.log("call")
    this.props.onFetchData()
  }

  render() {
    const { data } = this.props;
    if(data) { console.log(data.ht); }
    return (
      <div className="container">
      <h1>Static data</h1>
      <button onClick={this.handleSubmit}>load more data</button>
         <ProjectList data={data} />
          
      </div>
    );
  }
}


const mapStatetoProps = (state) => {
  return { num: state.num, data: state.data, error: state.error }
}

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) }
}
 

export default connect(mapStatetoProps, mapDispatchprops)(App);
