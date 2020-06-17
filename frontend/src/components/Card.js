import React from 'react'

const Card = (props) => {
  const [color, setColor] = setColor(props.color)
  const [value, setValue] = setValue(props.value)

  return (
    <div>
      <p>color</p>
      <p>value</p>
    </div>
  )
}

export default Card