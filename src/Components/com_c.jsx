/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { data,data1 } from '../App'



const Com_c = () => {
    const myname= useContext(data)
    const mygender = useContext(data1)

    
  return (
    <div>
      <h1>My name is {myname} </h1>
      <h1>My gender is {mygender} </h1>
    </div>
  )
}

export default Com_c
