import React, { useContext} from 'react'
import './Item.css'
import { ShopContext } from '../../context/ShopContext'

export default function Item(props, {modalActive, setModalActive}) {
    console.log(modalActive)
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='item'>
            <img className='item-img' src={props.img} alt="Изображение товара" />
            <div className='wrap'>
                <p>{props.title}</p>
                <div className='item-prices'>
                    <div className='item-price'>{props.price}&#8381;</div>
                    <div className='item-price-old'>{props.oldPrice ? props.oldPrice + '₽' : ''}</div>
                </div>
            </div>
            <div className='wrap'>
                <div className='item-rate'>{props.rate}</div>
                <button className='item-btn' onClick={() => {addToCart(props.id)}}>Купить</button>
            </div>
            
        </div>
    )
}
