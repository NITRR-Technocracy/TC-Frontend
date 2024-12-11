import React from 'react'
import "./PokemonTitle.module.css"
// import { Line } from './Line'

const PTitle = (props) => {
  return (
    <div className="ptitle" >
        <h1 className="pheading">
           <span>{props.color}</span> {props.noncolor}
        </h1>
        {/* <Line/> */}
      </div>
  )
}

export default PTitle