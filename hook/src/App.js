import React, { Component,useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      Example()
    )
  }

}
const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>点击</p>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  );
}
export default App;
