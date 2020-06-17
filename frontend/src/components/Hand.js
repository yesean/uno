import React from 'react';
import Card from './Card';

const Hand = ({ cards, validateCard }) => {
  return (
    <table>
      <tr>
        {cards.map((c) => (
          <td>
            <Card
              key={`${c.color}${c.value}`}
              card={c}
              validateCard={validateCard}
            />
          </td>
        ))}
      </tr>
    </table>
  );
};

export default Hand;
