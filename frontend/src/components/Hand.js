import React from 'react';
import Card from './Card';
import './../App.css';

const Hand = ({ cards, validateCard }) => {
  const genID = () => {
    return Math.random * 1000000;
  };
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th colSpan={cards.length}>Cards in hand: {cards.length}</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr className='hand'>
    //       {cards.map((c) => (
    //         <Card key={cards.indexOf(c)} card={c} validateCard={validateCard} />
    //       ))}
    //     </tr>
    //   </tbody>
    // </table>
    <div>
      <h1>Cards in hand: {cards.length}</h1>
      <div className='hand'>
        {cards.map((card) => (
          <Card
            key={cards.indexOf(card)}
            card={card}
            validateCard={validateCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Hand;
