import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getDatabase, set, ref } from "firebase/database";
import { ethers } from "ethers";

function SingleUnlistedOwnedCard(props) {
  const [resellPrice, setresellPrice] = useState("");
//   const [isDone, setisDone] = useState("");

  async function resellListing() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  const userAdd = await provider.send("eth_requestAccounts", []);
    const db = getDatabase();
    console.log("Contract Add= " + props.addContract);
    set(ref(db, "resell/" + props.addContract + "/" + props.tokenId), {
        genre: props.genre,
        name: props.name,
        owner: userAdd[0],
        venue: props.venue,
        picture: props.picture,
        price: resellPrice,
        tokenId: props.tokenId
    }).then(console.log("Done"));
    
  }

  return (
    <>
      <Link to="#" className="group relative block overflow-hidden">
        <img
          src={props.picture}
          alt={`Picture for ${props.name}`}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative  bg-gray-800 p-6">
          <h3 className="mt-4 text-xl font-medium text-gray-100">
            {props.name}
          </h3>
          <p className="mt-1.5 text-lg text-gray-200">{`Venue: ${props.venue}`}</p>
          <p className="mt-1.5 text-md text-gray-300">{`Genre: ${props.genre}`}</p>
          <p className="mt-1.5 text-md text-gray-300">{`Bought For: ${props.price} ETH`}</p>

          <div className="flex">
            <input
              placeholder="Resell Price..."
              className="text-white rounded-lg w-4/6 my-4 p-2 bg-gray-900"
              onChange={(event) => {
                setresellPrice(event.target.value);
              }}
            ></input>
            <button
              className="w-20 p-2 my-4 mx-2 bg-teal-600 text-white hover:text-white"
              onClick={resellListing}
            >
              List
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SingleUnlistedOwnedCard;
