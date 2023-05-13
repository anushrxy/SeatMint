import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../../Exports";
import { MediaRenderer } from "@thirdweb-dev/react";

function SinglePeerBuyCard(props) {

    const [completed, setCompleted] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setCompleted(false);
      }, 3000);
    }, [completed])



  async function buyTickets() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const txn = {
      to: props.owner,
      value: ethers.utils.parseEther(props.price * 0.01),
    };
    const sentHash = await signer.sendTransaction(txn);
    transferOwner(sentHash);
  }

  async function transferOwner(sentHash) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const userAddress = await provider.send("eth_requestAccounts", []);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "X-API-Key": apiKey,
      },
    };
    const form = new FormData();
    form.append("chain", "goerli");
    form.append("contractAddress", props.contract);
    form.append("fromAddress", props.owner);
    form.append("toAddress", userAddress[0]);
    form.append("tokenId", props.tokenId);



    options.body = form;

    fetch("https://api.verbwire.com/v1/nft/update/transferToken", options)
      .then((response) => response.json())
      .then((response) => {
        if(response.transaction_details.status == "Sent"){
            setCompleted(true);
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <Link to="#" className="group relative block overflow-hidden">
        <MediaRenderer
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
              {completed ? `Done...` : `Buy Ticket`}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SinglePeerBuyCard;