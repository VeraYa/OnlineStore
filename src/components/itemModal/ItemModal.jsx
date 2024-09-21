import React from 'react'
import './ItemModal.css'

export default function ItemModal({active, setActive}) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>

        </div>
    </div>
  )
}
