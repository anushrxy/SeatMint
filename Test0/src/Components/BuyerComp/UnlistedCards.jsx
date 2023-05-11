import React, { useEffect, useState } from "react";
import { apiKey } from "../../Exports";
import { ethers } from "ethers";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import SingleOwnerCard from "./SingleOwnerCard";

function UnlistedCards() {
    const [userAddress, setuserAddress] = useState("");
    const [ownedNftObject, setownedNftObject] = useState({});
    const [displayNft, setdisplayNft] = useState({});

    async function removeListed(displayObject) {
      const db = getDatabase();
      const OwnedRef = ref(db, 'resell/');
      onValue(OwnedRef, (snapshot) =>{
        const datatemp2 = snapshot.val();
        console.log("display Object");
        console.log(displayObject);
        console.log("datatemp");
        console.log(datatemp2);
        for(let prop in displayObject){
          for(let prop2 in datatemp2){
            // console.log(displayObject[prop]);
            if(prop.toLowerCase() == prop2.toLowerCase() && displayObject[prop].tokenId == datatemp2[prop2].tokenId){
              delete (displayObject[prop]);
              // May have issues because of loop.
            }
          }
        }
      })
            
        
        setdisplayNft(displayObject)//Inputs Here. 
    }
    
    async function sortObject(data, datatemp){
        let displayObject = [];
        data = data.nfts;
        console.log(data);
        for(let prop in datatemp){
            for(let i = 0; i<data.length; i++){
              console.log(data[i].contractAddress , prop);
              // console.log(data[i].contractAddress === prop);
              if(data[i].contractAddress.toLowerCase() == prop.toLowerCase()) {
                let object = datatemp[prop];
                let object2 = data[i];
                object.tokenId = object2[tokenID];
                displayObject.push(object);
              } 
            }
        }
        console.log(displayObject);
        removeListed(displayObject);
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

export default UnlistedCards;
