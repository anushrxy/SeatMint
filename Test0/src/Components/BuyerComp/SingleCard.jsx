import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import { utils } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { getDatabase, ref, set } from "firebase/database";

function SingleCard(props) {
  const [purchased, setpurchased] = useState(false);

  useEffect(() => {
    if(purchased==true)
    setTimeout(() => {
      setpurchased(false);
    }, 3000);
  }, [purchased])


  async function updateDB() {
    const db = getDatabase();
    set(ref(db, "events/" + props.contract), {
      name: props.name,
      picture: props.picture,
      metadata: props.metadata,
      venue: props.venue,
      genre: props.genre,
      tickets: props.tickets,
      Price: props.price,
      owner: props.owner,
      remaining: props.remaining - 1
    }).then(setpurchased(true));
  }

  async function buyTickets() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const userAddress = await provider.send("eth_requestAccounts", []);
    console.log(userAddress[0]);
    await provider.send("wallet_switchEthereumChain", [{ chainId: "0x5" }]);
    const signer = provider.getSigner();
    const contractAdd = props.contract;
    const contractABI = [
      {
        inputs: [
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "string", name: "tokenURI", type: "string" },
          { internalType: "uint256", name: "quantity", type: "uint256" },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ];
    const metadataURI = props.metadata;
    const contract = new ethers.Contract(contractAdd, contractABI, signer);
    const priceInWei = `${props.price * 0.01}`;
    const mintTickets = await contract.mint(userAddress[0], metadataURI, "1", {
      gasLimit: BigNumber.from(210000),
      value: parseEther(priceInWei),
    });
    console.log(mintTickets);
    updateDB();
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
          <p className="mt-1.5 text-md text-gray-300">
            {`Price: ${props.price} ETH`}{" "}
          </p>

          <div className="flex">
            <button
              className="mt-4 mx-1 block w-full rounded-lg border-2 border-teal-600 bg-transparent p-4 text-sm font-medium text-white transition hover:scale-100 hover:bg-teal-600 hover:boder-teal-600"
              onClick={buyTickets}
            >
              {`Buy Ticket`}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SingleCard;
