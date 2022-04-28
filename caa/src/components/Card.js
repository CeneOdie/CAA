import React from 'react'

const Card = (cardStyle, title, text) => {
  return (
    // <div className = {`pageCard ${cardStyle}`}>
      <div>
          <p className = "cardTitle">{title}</p>
          <p className = "cardDesc">{text}</p>
      {/* </div> */}
    </div>  
  )
}

export default Card