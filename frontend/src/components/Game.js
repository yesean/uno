import React from 'react'
import Player from './components/Player'
import Card from './components/Card'
import Deck from './components/Deck'
import Hand from './components/Hand'

let initDeck = [

]

const Game = ({ numPlayers }) => {
    const [currPlayer, setCurrPlayer] = useState(0)
    const [winner, setWinner] = useState(null)
    const []

    const nextPlayer = () => {
        setCurrPlayer((currPlayer + 1)%numPlayers)
    }
    
    if (!winner) {
        return (
            //players in circle
            //deck in middle/ uno button
            <Deck { deck}/>
            //player's deck with navigation buttons
        )
    } else {
        return (
            <h1>Game Over Boiz!</h1>
        )
    }
}

export default Game