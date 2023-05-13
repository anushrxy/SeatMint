import React, { useEffect, useState } from "react";
import { apiKey } from "../../Exports";
import { ethers } from "ethers";
import { DataSnapshot, child, getDatabase, onValue, ref } from "firebase/database";
import SingleUnlistedOwnedCard from "./SingleUnlistedOwnedCard";

function UnlistedCards() {
    const [userAddress, setuserAddress] = useState("");
    // const [ownedNftObject, setownedNftObject] = useState({});
    const [displayNft, setdisplayNft] = useState({});

    async function removeListed(data, datatemp){
      const nftData = data.nfts;
      const newNftArray = [];

      const db = getDatabase();
        const ResellRef = ref(db, 'resell/');
        onValue(ResellRef, (snapshot) =>{
            const datatemp3 = snapshot.val();
            for(let key in datatemp3){
              for(let j =0 ; j< nftData.length; j++){
                let keyObject = datatemp3[key];
                let nftObject2 = nftData[j];
                console.log(`Logged...`);
                console.log(nftObject2);
                if(nftObject2){
                  let keyMatch = key.toLowerCase() != nftObject2.contractAddress.toLowerCase();
                  for(let tokenId in keyObject){
                    let tokenMatch = tokenId != nftObject2.tokenID;
                    if(keyMatch || tokenMatch){
                      newNftArray.push(nftObject2);
                    }
                  }
                }
              }
            }
            console.log(newNftArray);
            sortObject(newNftArray, datatemp);

        })
    }
    
    async function sortObject(data, datatemp){
        let displayObject = [];
        console.log("data");
        console.log(data);
        console.log("datatemp");
        console.log(datatemp);
        for(let i = 0; i<data.length; i++){
              for(let prop in datatemp){
              console.log(data[i].contractAddress , prop);
              // console.log(data[i].contractAddress === prop);
              let dataObjecti = data[i];
              console.log("here ", dataObjecti.contractAddress);
              if(dataObjecti.contractAddress.toLowerCase() == prop.toLowerCase()) {
                let object = datatemp[prop];
                let object2 = data[i];
                object.tokenId = object2.tokenID ;
                object.addContract = prop;
                displayObject.push(object);

              } 
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
            console.log("First DB Fetch.")
            console.log(datatemp);
            // sortObject(datatemp);
            getNFTs(datatemp);
        })

    }

    async function getNFTs(datatemp) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const userAdd = await provider.send("eth_requestAccounts", []);
        if (userAdd) {setuserAddress(userAdd);}

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
                // setownedNftObject(response);
                console.log("API Fetch")
                console.log(response);
                // sortObject(response, datatemp);
                removeListed(response,datatemp);
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
            {console.log(displayNft)}
            {Object.keys(displayNft).map((key) => (
              // {console.log(key);}
              <li key={key}>
                <SingleUnlistedOwnedCard
                  name={displayNft[key].name}
                  venue={displayNft[key].venue}
                  genre={displayNft[key].genre}
                  price={displayNft[key].Price}
                  picture={displayNft[key].picture}
                  owner={userAddress}
                  addContract={displayNft[key].addContract}
                  tokenId={displayNft[key].tokenId}
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
