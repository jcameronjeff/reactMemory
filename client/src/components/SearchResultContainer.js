import React, { Component } from "react";
import SearchResults from "./SearchResults";
import API from "../utils/API";
import shuffleArr from "../utils/shuffleArr"
 
  
class SearchResultContainer extends Component {
  state = {
    score: 0,
    picked: [],
    trucks: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchPixabay("trucks");
  }

  searchPixabay = query => {
    API.search(query)
      .then(res => {this.setState({ trucks: res.data.hits }); console.log(this.state.trucks);})
      .catch(err => console.log(err));
  };


  handleClickPic = event => {
    console.log(this);
    this.handleShufflePic();
  }
  

  handleShufflePic = () => {
    let trucksArr = this.state.trucks;
    let shuffledArr = shuffleArr(trucksArr);
    this.setState({ trucks: shuffledArr });
  }

  render(){
      return(
        <div>
        <SearchResults trucks={this.state.trucks} handleClickPic={this.handleClickPic} />
        </div>
         )
  }
}


export default SearchResultContainer;
