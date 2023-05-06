import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SingleCard() {
    const[quantity,setQuantity] = useState(1);

    function plus() {
        setQuantity(quantity+1);
    }

    function minus() {
        if(quantity!=1){
            setQuantity(quantity-1);
        }
    }
    
  return (
    <>
      <Link to="#" className="group relative block overflow-hidden">
        <img
          src="https://res.cloudinary.com/dlvmyc0x3/image/upload/v1683314919/fotor-ai-202305060578_cz5so4.png"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-gray-800 p-6">
          <h3 className="mt-4 text-lg font-medium text-gray-100">Open Mic Comedy</h3>
          <p className="mt-1.5 text-md text-gray-200">The Habitat:Mumbai</p>
          <p className="mt-1.5 text-sm text-gray-300">Comedy Show</p>
          <p className="mt-1.5 text-sm text-gray-300">2 MATIC</p>

          <div className="flex">

            <button
            className="mt-4 mx-1 block w-1/4 rounded-lg border-2 border-teal-600 bg-transparent pb-3 text-4xl font-light text-white transition hover:scale-100 hover:bg-teal-600 hover:boder-teal-600"
            onClick={minus}
            >
              -
            </button>
            <button className="mt-4 mx-1 block w-2/5 rounded-lg border-2 border-teal-600 bg-transparent p-4 text-sm font-medium text-white transition hover:scale-100 hover:bg-teal-600 hover:boder-teal-600">
              {`Buy ${quantity}`}
            </button>
            <button 
            className="mt-4 mx-1 block w-1/4 rounded-lg border-2 border-teal-600 bg-transparent pb-2 text-4xl font-light text-white transition hover:scale-100 hover:bg-teal-600 hover:boder-teal-600"
            onClick={plus}
            >
              +
            </button>
          </div>
          
        </div>
      </Link> 
    </>
  );
}

export default SingleCard;
