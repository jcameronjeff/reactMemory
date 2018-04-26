import React, {Component} from "react";
import FixedHeader from "./FixedHeader";
import Header from "./Header";
import Footer from "./Footer";
import Dogs from "../dogs.json";
import shuffleArray from "../utils/shuffleArray"
import Card from "./Card";

class MemoryGame extends Component {

    state= {
        score: 0,
        topScore: 0,
        chosen: [],
        response: "",
        dogArr: []
    }

    componentDidMount(){
        this.setState({
            response: "Click an image to begin!",
            dogArr: Dogs
        })
    }

    handleShuffle = () => {
        let tempArr = this.state.dogArr.map(dog => {
            let tempObj = {...dog};
            return tempObj;
        });
        this.setState({
            dogArr: shuffleArray(tempArr)
        });
    }

    handleGuess = (event) => {
        let picture = event.target.src;
        if (this.state.chosen.indexOf(picture) === -1) {
            this.setState(prevState => ({
                score: this.state.score + 1,
                topScore: this.state.score === this.state.topScore ? this.state.topScore + 1 : this.state.topScore,
                chosen: [...prevState.chosen, picture],
                response: "Correct!"
            }));
        } else {
            this.setState(prevState => ({
                score: 0,
                chosen: [],
                response: "Incorrect!"
            }));
        };
    }

    render(){
        return (
            <div>
                <FixedHeader score={this.state.score} topScore={this.state.topScore} response={this.state.response}/>
                <Header/>
                <Card dogs={this.state.dogArr} handleGuess={this.handleGuess} handleShuffle={this.handleShuffle}/>
                <Footer/>
            </div>
        )
    }

}

export default MemoryGame;