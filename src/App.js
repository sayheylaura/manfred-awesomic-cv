import React, { Component } from 'react';
import './App.css';
import sample from './services/sample.json';
import sample_2 from './services/sample_2.json';
import Preview from './components/Preview';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      sample: sample_2
    }
  }


  render() {
    const {sample} = this.state;
    const {profile} = sample.author;
    return (
      <div className="App">
        <h1>Manfred Awesomic CV</h1>
        <Preview />
        <ul>
            {profile.map((item, index)=>{
              return(
                <li key={index}>
                <h2>{item.name}</h2>
                <h2>{item.yearsOfExperience}</h2>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default App;
