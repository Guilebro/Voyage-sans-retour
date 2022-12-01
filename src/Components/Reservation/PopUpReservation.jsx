import React from 'react'
import cancel from '../../assets/logos/cancel.png'
import { useState } from 'react'
import './PopUpReservation.css'

const PopUpReservation = () => {
  const [check, setCheck] = useState(true)
  const handleClick = () => {
    setCheck(!check)
  }
  return (
    check && (
      <div className="popUpReservation">
        <h1 className="popUpTitleReservation">
          Merci pour votre achat, nous vous souhaitons un dangereux voyage !
        </h1>
        <img
          onClick={handleClick}
          className="close-button"
          src={cancel}
          alt="close"
        />
      </div>
    )
  )
}

export default PopUpReservation
