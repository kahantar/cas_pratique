import React, { Component } from 'react';
import {loadInfo} from '../action/index';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import DashBoard from './dashBoard';
import FormSearch from './formSearch';
import logo from './cybelangel.png';
import './App.css';

class App extends Component {
  componentWillMount() {
    const ret = {
      client: [],
      status: "new",
      category: ["dark web", "deep web", "connected devices"],
      orderBy: "date",
      search: ""
  }
    this.props.loadInfo(ret);    
  }
  render() {
    return (
      <div className="App">
      <div className="divimg">
          <img className="img" src={logo}/>
      </div>
          <FormSearch />
          <DashBoard />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        ...bindActionCreators({loadInfo}, dispatch)
    }  
}

export default connect(null, mapDispatchToProps)(App);
