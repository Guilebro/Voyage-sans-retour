import React from 'react'
import './DestinationDetails.css'
import PropTypes from "prop-types";
import { voyageData } from '../../utils/voyageData'
import DestinationCardDetails from './DestinationCardDetails'

const DestinationDetails = ({ activityName }) => {
  return (
    <div className='destination__container'>
      {voyageData.filter((el)=> el.name_activity == activityName)
      .map((element) => (
        <div key={element.id_activity}>
          <DestinationCardDetails
            activity={element.name_activity}
            description={element.description}
            age={element.age_recommended}
            guide={element.name_guide}
            image={element.image}
            country={element.country}
            city={element.city}
            price={element.price}
            dangerosity={element.dangerosity}
          />
        </div>
      ))}
    </div>
  )
}

DestinationDetails.propTypes = {
  activityName: PropTypes.func.isRequired,
};
export default DestinationDetails
