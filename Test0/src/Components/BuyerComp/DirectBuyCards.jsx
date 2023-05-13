import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { getDatabase, ref, onValue } from "firebase/database";
import { async } from "@firebase/util";

function Cards() {
  const firebasedb = getDatabase();
  const [buyDirect, setbuyDirect] = useState({});
  
  
  
  async function getData(){
    const eventsListed = await ref(firebasedb, 'events/');
    onValue(eventsListed, (snapshot) => {
    setbuyDirect(snapshot.val());
    console.log(snapshot.val());
  });
  }
  useEffect(() => {
    getData();
    console.log(buyDirect);
  },[]);

  

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.keys(buyDirect).map((key) => (
            // {console.log(key);}
              <li key={key}>
                <SingleCard
                  name={buyDirect[key].name}
                  venue={buyDirect[key].venue}
                  genre={buyDirect[key].genre}
                  price={buyDirect[key].Price}
                  picture={buyDirect[key].picture}
                  contract={key}
                  metadata={buyDirect[key].metadata}
                  remaining={buyDirect[key].remaining} 
                  owner={buyDirect[key].owner}
                  tickets={buyDirect[key].tickets}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Cards;
