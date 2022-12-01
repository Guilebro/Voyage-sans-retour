import React from 'react'
import map from '../../assets/images/map.png'
import './Planisphere.css'
// import {map} from "src/assets/images/map.png";

const Planisphere = () => {
  return (
    <div className="planisphere">
      <img className="planisphere_img" src={map} alt="carte du Monde" />
      {/* <img className="planisphere_img" src="/src/assets/logos/map.png" alt="" />
            <div className="valises">{voyageDetails.map((country) => (
                <img onClick={handleClickMap} key={country.id} className={country.className_planisphere} src="src/assets/logos/valise-white.png" alt={country.name} />))}
            </div> */}
    </div>
  )
}

export default Planisphere
