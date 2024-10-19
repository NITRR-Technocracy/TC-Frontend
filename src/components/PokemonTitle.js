import React from 'react'
import "./PokemonTitle.css"
// import { Line } from './Line'

const PTitle = (props) => {
  return (
    <div className="title" >
        <h1 className="heading">
           <span>{props.color}</span> {props.noncolor}
        </h1>
        {/* <Line/> */}
      </div>
  )
}

export default PTitle