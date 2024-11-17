import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = ({insideHome}) => {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white font-bold'>
        <Link className='text-2xl' to={'/'}><i className='fa-solid fa-truck-fast me-1'></i>Daily Cart</Link>
        <ul className='flex-1 text-right'>
           { insideHome && <li className='list-none inline-block px-5'><input style={{width:"300px"}} className='rounded p-1' type="text" /></li>}
            <li className='list-none inline-block px-5'><Link to={'/wishlist'}><i className='fa-solid fa-heart text-red-600'></i>Wishlist<span className='bg-black text-white rounded p-1'>{userWishlist?.length}</span></Link></li>
            <li className='list-none inline-block px-5'><Link to={'/cart'}><i className='fa-solid fa-cart-plus text-green-600'></i>Cart<span className='bg-black text-white rounded p-1'>20</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header