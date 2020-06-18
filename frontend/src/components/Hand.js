import React from 'react';
import Card from './Card';
import './../App.css';

const Hand = ({ cards, validateCard }) => {
  const genID = () => {
    return Math.random * 1000000;
  };
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={cards.length}>Cards in hand: {cards.length}</th>
        </tr>
      </thead>
      <tbody>
        <tr className='hand'>
          {cards.map((c) => (
            <Card key={cards.indexOf(c)} card={c} validateCard={validateCard} />
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Hand;
