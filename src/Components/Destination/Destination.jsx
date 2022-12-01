import React, { useState } from 'react'
import MiniCard from '../miniCard/MiniCard'
import { voyageData } from '../../utils/voyageData'
import { voyageDetails } from '../../utils/voyageDetails'
import PropTypes from "prop-types";
import './Destination.css'

const Destination = ({setActivityName}) => {

  const [selectCountry, setSelectCountry] = useState("");
  

  const handleChange = (e) => {
    setSelectCountry(e.target.value)
  }

  const handleClick = (el) => {
      setActivityName(el.target.innerText)
  }

  return (
    <div className="cardList">
      <h1>💥 Destinations 💥</h1>
      <form className="country_select">
        <label htmlFor="country_select">
          <select id="country_select" onChange={handleChange}>
            <option value="">Faites votre choix</option>
            {voyageDetails.map((element) => (
              <option key={element.id} value={element.name}>
                {element.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="country_data">
        {voyageData
          .filter(
            (element) =>
              selectCountry === '' || selectCountry === element.country,
          )

          .map((element) => (
            <li key={element.id_activity} className="country_details">
              <button className='button_benjamin' type="button" onClick={handleClick}>
                <MiniCard activity={element.name_activity} picto={element.picto} />
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
Destination.propTypes = {
  activityName: PropTypes.func.isRequired,
  setActivityName: PropTypes.func.isRequired,
};

export default Destination
