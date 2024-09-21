import React, { useContext } from 'react'
import './Header.css'
import icon_like from '../assets/like.svg'
import icon_cart from '../assets/cart.svg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

export default function Header() {

    const {getTotalCartItems} = useContext(ShopContext)

    return (
        <header>
            <div>
                <div className='logo'><Link style={{textDecoration: 'none', color: '#000'}} to='/'>QPICK</Link></div>
            </div>
            <div className='icons'>
                <img className='icon like' src={icon_like} alt="Понравившиеся товары" />
                <div className='count like-count'>0</div>
                <Link to='/cart'><img className='icon cart' src={icon_cart} alt="Корзина" /></Link>
                <div className='count cart-count'>{getTotalCartItems()}</div>
            </div>
        </header>
    )
}
