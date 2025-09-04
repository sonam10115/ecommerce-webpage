import React from 'react'

const Title = ({title,text,link}) => {
  return (
    <div>
        <div>
            <h2>{title}</h2>
            <p>{text}</p>

        </div>
        <button className="" >{link}</button>
      
    </div>
  )
}

export default Title
