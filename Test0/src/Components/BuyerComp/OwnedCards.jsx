import React, { useEffect, useState } from "react";
import { apiKey } from "../../Exports";
import { ethers } from "ethers";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import SingleOwnerCard from "./SingleOwnerCard";

function OwnedCards() {
    const [userAddress, setuserAddress] = useState("");
    const [ownedNftObject, setownedNftObject] = useState({});
    const [displayNft, setdisplayNft] = useState({});

    async function sortObject(data, datatemp){
        let displayObject = [];
        data = data.nfts;
        console.log(data);
        for(let prop in datatemp){
            for(let i = 0; i<data.length; i++){
              console.log(data[i].contractAddress , prop);
              // console.log(data[i].contractAddress === prop);
              data[i].contractAddress.toLowerCase() !== prop.toLowerCase() ? console.log("Not Matched"): displayObject.push(datatemp[prop]) ;
            }
        }
        console.log(displayObject);
        setdisplayNft(displayObject);
    }


    async function getDatabase1(){
        const db = getDatabase();
        const OwnedRef = ref(db, 'events/');
        onValue(OwnedRef, (snapshot) =>{
            const datatemp = snapshot.val();
            console.log(datatemp);
            // sortObject(datatemp);
            getNFTs(datatemp);
        })

    }

    async function getNFTs(datatemp) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const userAdd = await provider.send("eth_requestAccounts", []);
        setuserAddress(userAdd);

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'X-API-Key': apiKey
            }
          };
          
          fetch(`https://api.verbwire.com/v1/nft/data/owned?walletAddress=${userAdd}&chain=goerli`, options)
            .then(response => response.json())
            .then(response => {
                setownedNftObject(response);
                console.log(response);
                sortObject(response, datatemp);
            })
            .catch(err => console.error(err));
        
    }

    useEffect(() => {
      getDatabase1();
    //   getNFTs();
    },[])
    

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.keys(displayNft).map((key) => (
              // {console.log(key);}
              <li key={key}>
                <SingleOwnerCard
                  name={displayNft[key].name}
                  venue={displayNft[key].venue}
                  genre={displayNft[key].genre}
                  price={displayNft[key].Price}
                  picture={displayNft[key].picture}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default OwnedCards;
