import React from 'react'

const StoryInfo = (props) => {
  return (
    <div>
      <h3>{props.number}</h3>
      <p>{props.title}</p>
    </div>
  )
}

export default StoryInfo
