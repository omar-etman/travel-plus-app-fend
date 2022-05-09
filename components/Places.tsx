import React from 'react'
import {places} from '../pages/api/placeData'
import PlaceCard from './PlaceCard';
function Places() {
  return (
    <ul className='grid grid-cols-3 gap-7 p-7'>
      {places.map((place) => (
        <li key={place.placeName} className='rounded-lg bg-white border'>
            <PlaceCard
                name={place.placeName}
                details={place.details}
                image={place.imgURL}
            />
        </li>
      ))}
    </ul>
  )
}

export default Places

