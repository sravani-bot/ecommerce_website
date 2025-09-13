import React from 'react'
import { fridgeData } from '../data/Fridge'
import { Link } from 'react-router-dom'

const Fridge = () => {
    const firstFiveImages=fridgeData.slice(0,5)
    return (
      <>
      <Link to='/fridges'>
      <div className="proTitle"><h2>Fridges</h2></div>
      
        <div className='proSection'>
          {firstFiveImages.map((item)=>{
              return(<div className='imgBox'>
                  <img className='proImage' src={item.image} alt='Fridge'/>
              </div>)
          })}
      </div>
      </Link>
      </>
    )
}

export default Fridge