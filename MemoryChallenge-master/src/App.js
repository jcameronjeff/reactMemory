import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import MemoryGame from "./components/MemoryGame";
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
          <MemoryGame/>
      </Wrapper>
    );
  }
}

export default App;
