import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'
import remove from '../assets/delete.svg'

export default function CartItems() {
    const { headphones, cartItems, removeFromCart, addToCart, deleteFromCart, getTotalCartAmount } = useContext(ShopContext)
    return (
        <div className='cartItems'>
            <h2 className='cart-title'>Корзина</h2>
            <div className="cartItems-flex">
                <div className="cartItems-left">
                    {headphones.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return <div>
                                <div className='cartItems-format'>
                                    <div className='cartItems-wrap'>
                                        <img className='cartItems-img' src={e.img} alt="Изображение товара" />
                                        <div className='cartItems-btns'>
                                            <button onClick={() => { removeFromCart(e.id) }} className='cartItems-btn'><img src={minus} alt="Вычесть товар" /></button>
                                            <div className='cartItems-quantity'>{cartItems[e.id]}</div>
                                            <button onClick={() => { addToCart(e.id) }} className='cartItems-btn'><img src={plus} alt="Добавить товар" /></button>
                                        </div>

                                    </div>
                                    <div className='cartItems-wrap2'>
                                        <p className='cartItems-title'>{e.title}</p>
                                        <p className='cartItems-price'>{e.price}&#8381;</p>
                                    </div>
                                    <div className='cartItems-wrap3'>
                                        <img className='cartItems-remove' onClick={() => { deleteFromCart(e.id) }} src={remove} alt="Удалить товар" />
                                        <p className='cartItems-totalPrice'>{e.price * cartItems[e.id]}&#8381;</p>
                                    </div>

                                </div>
                            </div>
                        }
                        return null
                    })}
                </div>

                <div className="cartItems-right">
                    <div className='cartItems-total'>
                        <p className='cartItems-total-text'>ИТОГО</p>
                        <p className='cartItems-total-text'>{getTotalCartAmount()}&#8381;</p>
                    </div>
                    <button className='cartItems-total-btn'>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    )
}
