import React, { Component } from "react";
import NavBar from './components/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchResultContainer from './components/SearchResultContainer';

class App extends Component {
  render() {
    return (
      
      <MuiThemeProvider>
      <div> <NavBar />
      <SearchResultContainer />
      </div> 
       </MuiThemeProvider>
 
    );
  }
}

export default App;
