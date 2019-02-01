import React, { Component } from 'react';
import './App.css';
import sample from './services/sample.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      sample: sample
    }
  }


  render() {
    const {sample} = this.state;
    return (
      <div className="App">
        <h1>Manfred Awesomic CV</h1>
        <ul>
            {sample.map((item, index)=>{
              return(
                <li key={index}>
                <h2>{item.name}</h2>
                <h2>{item.position}</h2>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
