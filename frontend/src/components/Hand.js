import React from 'react';
import Card from './Card';

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
            <td key={`${c.color}${c.value}`}>
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
