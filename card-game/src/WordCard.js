import React, { Component } from 'react'
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        round: 1,
        completed: false        
        }
   }
   
export default class WordCard extends Component {

    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
        }
    activationHandler = (c) => {
        console.log(`${c} has been activated.`) 
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})                
            }
            else{
                this.setState({guess: [], attempt: this.state.attempt + 1, round: this.state.round+1})
                console.log('Please try again!!!');                
                }
            }
       }

       restart = () => {
        this.setState({guess: [], attempt: this.state.attempt+1 , round: 1})    
        this.state.completed = false
    }


       render(){
           return(
               <div>
                   <h1>Card-Game</h1>
                   <p>ROUND : {this.state.round}</p>
                   {
                       Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i}
                       activationHandler={this.activationHandler}
                       attempt = {this.state.attempt} />) 
                   }                   
                   <h2>{this.state.completed? "You Win!":"Please arrange the card."}</h2>
                   <div class="tooltip">HINT
                        <span class="tooltiptext">name of red fruit</span>
                   </div>
                   <div><button className="button" onClick={this.restart}>RESTART</button></div>
               </div>
               
           )
       }
}
