import React from 'react'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'

const Books = () => {
   const firstFiveImages=booksData.slice(0,5)
   return (
     <>
     <Link to='/books'>
     <div className="proTitle"><h2>Books</h2></div>
     
        <div className='proSection'>
         {firstFiveImages.map((item)=>{
             return(<div className='imgBox'>
                 <img className='proImage' src={item.image} alt='books'/>
             </div>)
         })}
     </div>
     </Link>
     </>
   )
}

export default Books