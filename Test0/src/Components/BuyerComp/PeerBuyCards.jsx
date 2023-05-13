import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { getDatabase, ref, onValue } from "firebase/database";
import { async } from "@firebase/util";

function PeerBuyCards() {
  const firebasedb = getDatabase();
  const [buyDirect, setbuyDirect] = useState({});
  
  
  
  async function getData(){
    const eventsListed = await ref(firebasedb, 'resell/');
    onValue(eventsListed, (snapshot) => {
    setbuyDirect(snapshot.val());
    console.log(snapshot.val());
    console.log(buyDirect);
  });
  }
  useEffect(() => {
    getData();
    // console.log(buyDirect);
  },[]);

  

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.keys(buyDirect).map((key) => (
            <>
                {Object.keys(buyDirect[key]).map((tokenId) =>(
                    <li key={key}>
                    <SingleCard
                    name={buyDirect[key][tokenId].name}
                    venue={buyDirect[key][tokenId].venue}
                    genre={buyDirect[key][tokenId].genre}
                    price={buyDirect[key][tokenId].price}
                    picture={buyDirect[key][tokenId].picture}
                    contract={key}
                    owner={buyDirect[key][tokenId].owner}
                    tokenId={tokenId}
                     
                    />
                    </li>

                ))}
                </>
                
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default PeerBuyCards;
