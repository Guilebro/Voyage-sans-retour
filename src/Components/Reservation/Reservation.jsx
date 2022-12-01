import React from 'react'
import Navbar from '../Navbar/Navbar'
import PopUpReservation from './PopUpReservation'
import { useState } from 'react'
import checkViolet from '../../assets/logos/check-violet.png'
import purpleCloud from '../../assets/images/purple.cloud.png'
import './Reservation.css'

const Reservation = () => {
  const [newPopop, setNewPopop] = useState(false)

  const handleClick = () => {
    setNewPopop(!newPopop)
  }
  return (
    <div>
      <Navbar />
      <div className="titleBlock">
        <img className="check_panier-reservation" src={checkViolet} />
        <h1 className="reservation__title">
          Prêt(e) pour l`aventure de votre vie?{' '}
        </h1>{' '}
        <h1 className="reservation__title"> Réservez-la ici !</h1>
      </div>
      <div className="intro__reservation">
        <img className="purple_cloud" src={purpleCloud} alt="purple round" />
      </div>
      <div className="general__contact">
        <div className="contact__section1">
          <h3>Adresse</h3>
          <h4>Triangle des Bermudes</h4>
          <h3>Téléphone</h3>
          <h4>06-666-666-66</h4>
          <h3>Ecrivez-nous</h3>
          <h4>Remplissez le formulaire ci-contre</h4>
        </div>
        <div className="page">
          <div className="field field_v1">
            <label htmlFor="first-name" className="ha-screen-reader">
              Votre prénom
            </label>
            <input
              id="first-name"
              className="field__input"
              placeholder="David"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Prénom</span>
            </span>
          </div>
          <div className="field field_v2">
            <label htmlFor="last-name" className="ha-screen-reader">
              Votre nom
            </label>
            <input
              id="last-name"
              className="field__input"
              placeholder="Faure"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Nom</span>
            </span>
          </div>
          <div className="field field_v3">
            <label htmlFor="email" className="ha-screen-reader">
              E-mail
            </label>
            <input
              id="email"
              className="field__input"
              placeholder="jss_love@hotmail.com"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">E-mail</span>
            </span>
          </div>
          <div className="field field_v2">
            <label htmlFor="message" className="ha-screen-reader">
              Votre message
            </label>
            <input
              id="last-name"
              className="field__input"
              placeholder="Votre message"
            />
            <span className="field__label-wrap" aria-hidden="true">
              <span className="field__label">Message</span>
            </span>
          </div>

          <div className="card">
            <div className="content-wrapper"></div>
            <form action="">
              <label className="form-control">
                <input type="checkbox" name="checkbox" />
                Je confirme avoir bien lu et compris les modalités et conditions
                de la présente transaction.
              </label>
            </form>
          </div>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn--primary btn--inside uppercase"
          >
            Réservez
          </button>
          {newPopop && <PopUpReservation />}
        </div>
      </div>
    </div>
  )
}

export default Reservation
