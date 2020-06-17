import React from 'react';
import Card from './Card';
import './../App.css'

const Hand = ({ cards, validateCard }) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={cards.length}>Cards in hand: {cards.length}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {cards.map((c) => (
            <td key={`${c.color}${c.value}`} className='playerCard'>
              <Card
                card={c}
                validateCard={validateCard}
              />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Hand;
