import React, {Component} from "react";
import SearchResults from "./SearchResults";
import API from "../utils/API";
import shuffleArr from "../utils/shuffleArr"

class SearchResultContainer extends Component {
  state = {
    score: 0,
    picked: [],
    trucks: [],
    status: "Don't Click it Twice!"
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchPixabay("trucks");
  }

  searchPixabay = query => {
    API
      .search(query)
      .then(res => {
        this.setState({trucks: res.data.hits});
        console.log(this.state.trucks);
      })
      .catch(err => console.log(err));
  };

  handleClickPic = event => {
    let pic = event.target.alt;
    console.log(pic)
    this.handleShufflePic();
    this.handleScore(pic);
  }

  handleScore = event => {

    if (this.state.picked.includes(event)) {
      this.setState({status: "You Loose!"})
    } else {
      this.setState({
        picked: this
          .state
          .picked
          .concat(event)
      })

      this.setState({score: this.state.picked.length})
    }
  }

  handleShufflePic = () => {
    let trucksArr = this.state.trucks;
    let shuffledArr = shuffleArr(trucksArr);
    this.setState({trucks: shuffledArr});
  }

  render() {
    return (
      <div>
        <h1>Score: {this.state.score}</h1>
        <h2>{this.state.status}</h2>
        <SearchResults trucks={this.state.trucks} handleClickPic={this.handleClickPic}/>
      </div>
    )
  }
}

export default SearchResultContainer;
