import React from 'react'

const Card = (cardStyle, title, text) => {
  return (
    <div class = {cardStyle}>
        <p>{title}</p>
        <p>{text}</p>
    </div>
  )
}

export default Card