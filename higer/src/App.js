import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Usual from "./components/Usual";
import Login from './components/detachmentState/Login'
import Usual from "./components/iiHoc/Usual";
class App extends Component {
  render() {
    // let temp={a:1,b:2,c:3}
    // return (
    //   <div className="App">
    //     <Usual {...temp} />
    //   </div>
    // );

    return(
      <div> 
        <Login />
        <Usual />
        </div>
    )
  }
}

export default App;
