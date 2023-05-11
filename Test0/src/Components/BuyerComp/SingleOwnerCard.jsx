import React from 'react'
import { Link } from 'react-router-dom'

function SingleOwnerCard(props) {
  return (
    <>
      <Link to="#" className="group relative block overflow-hidden">
        <img
          src={props.picture}
          alt={`Picture for ${props.name}`}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative  bg-gray-800 p-6">
          <h3 className="mt-4 text-xl font-medium text-gray-100">{props.name}</h3>
          <p className="mt-1.5 text-lg text-gray-200">{`Venue: ${props.venue}`}</p>
          <p className="mt-1.5 text-md text-gray-300">{`Genre: ${props.genre}`}</p>
          <p className="mt-1.5 text-md text-gray-300">{`Bought For: ${props.price} WEI`} </p>

          <div className="flex">

          </div>
          
        </div>
      </Link> 
    </>
  )
}

export default SingleOwnerCard;