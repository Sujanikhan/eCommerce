import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
const index = ({setSearch, cart}) => {
  return (
    <div className='navbar'>
    <div className='inner-container'>
      <Link to={"/"}>
        <h1 className='title'>sujani cart</h1>
        </Link>
        <input onChange={(e)=>setSearch(e.target.value)}/>
        <Link to="/cart">
        <p className='cart'>🛒{cart.length}</p>
        </Link>

    </div>
    </div>
  )
}

export default index