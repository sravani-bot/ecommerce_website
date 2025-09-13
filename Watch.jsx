import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'

const Watch = () => {
    const firstFiveImages=watchData.slice(0,5)
    return (
      <>
      <Link to='/watches'>
      <div className="proTitle"><h2>Watches</h2></div>
      
        <div className='proSection'>
          {firstFiveImages.map((item)=>{
              return(<div className='imgBox'>
                  <img className='proImage' src={item.image} alt='watch'/>
              </div>)
          })}
      </div>
      </Link>
      </>
    )
}

export default Watch