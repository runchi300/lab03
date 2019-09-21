import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
//import CharacterCard from './CharacterCard';

const word="hello"
class App extends Component {
    render() {
        return (
            <div className="App">
                <WordCard value={word}/>
            </div>
        );
    }
}
export default App;
