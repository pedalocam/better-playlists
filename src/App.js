import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#fff'
}

class Aggregate extends Component {
  render() {
    return <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{...defaultStyle}}>Number Text</h2>
      </div>
  }
}

class Filter extends Component {
  render() {
    return <div>
        <img/>
        <input type="text"/><div style={{...defaultStyle, paddingLeft: '10px', display: 'inline-block'}}>Filter</div>
      </div>
  }
}

class PlayList extends Component {
  render() {
    return <div style={{...defaultStyle, width: '25%', display: 'inline-block'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>song 1</li><li>song 2</li><li>song 3</li></ul>
      </div>
  }
}

class App extends Component {
  render() {
  return (
      <div className="App">
      <h1 style={{...defaultStyle}}>Title</h1>
      <Aggregate style={{display: 'inline-block'}}></Aggregate>
      <Aggregate/>
      <Filter/>
      <PlayList/>
      <PlayList/>
      <PlayList/>
      </div>
    );
  }
}

export default App;
