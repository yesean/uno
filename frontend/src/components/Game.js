import React from 'react'
import Player from './components/Player'
import Card from './components/Card'
import Deck from './components/Deck'
import Hand from './components/Hand'


const Game = ({ numPlayers }) => {
    const [currPlayer, setCurrPlayer] = useState(1)

    const nextPlayer = () => {
        setCurrPlayer((currPlayer + 1)%numPlayers)
    }
    


    if (!gameOver) {
        return (
            <h1>Game Over Boiz!</h1>
        )
    } else {
        return (
            <h1>Game Over Boiz!</h1>
        )
    }
}

export default Game