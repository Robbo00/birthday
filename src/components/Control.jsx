import React from 'react'
import Slider from './Slider'

const Control = ({ladder}) => {

  const test = (pl) => {
    ladder(pl)
  }  

  return (
    <div className='control'>
      <h2 className='controlHeader'>Upcoming list</h2>

      <Slider filter={test}/>
      
    
    </div>
  )
}

export default Control
