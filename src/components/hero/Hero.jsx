import React, { useState } from 'react'
import './Hero.css'
import headphones from '../assets/data'
import Item from '../item/Item'
import ItemModal from '../itemModal/ItemModal'

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false)
  
  return (
    <div className='hero'>
      <h2 className='h2'>Наушники</h2>
      <div className='content'>
        {headphones.map((item, i) => {
          if (item.type === 'wired') {
            return <Item modalActive={modalActive} key={i} id={item.id} img={item.img} title={item.title} oldPrice={item.oldPrice} price={item.price} rate={item.rate}/>
          }
          return null
        })}
      </div>
      <h2 className='h2'>Беспроводные наушники</h2>
      <div className='content'>
        {headphones.map((item, i) => {
          if (item.type === 'wireless') {
            return <Item key={i} id={item.id} img={item.img} title={item.title} price={item.price} rate={item.rate} />
          }
          return null
        })}
      </div>
      <ItemModal active={modalActive} setActive={setModalActive}/>
    </div>
  )
}
