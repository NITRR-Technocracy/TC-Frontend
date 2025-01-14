import React from 'react'
import "./Title.css"
import { Line } from './Line'

const Title = (props) => {
  return (
    <div className="title">
        <h1 className="heading">
           <span>{props.color}  {props.noncolor}</span> 
        </h1>
        <Line/>
      </div>
  )
}

export default Title