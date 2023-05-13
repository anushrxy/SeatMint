import React, { useEffect, useState } from 'react'
import SingleOwnerCard from './SingleOwnerCard'
import { useAsyncError } from 'react-router-dom';
import { getDatabase, onValue, ref } from 'firebase/database';
import { ethers } from 'ethers';

function ListedResellCards() {
    
    const [displayNft, setdisplayNft] = useState([]);
    const [userAddress, setuserAddress] = useState("");
    
    async function fetchListed() {
        const listedArr = [];
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const userAdd = await provider.send("eth_requestAccounts", []);
        setuserAddress(userAdd[0]);
        const db = getDatabase();
        const resellListedRef = ref(db, 'resell/')
        onValue(resellListedRef, (snapshot) => {
            const data = snapshot.val();
            for(let add in data){
                for(let tokenId in data[add]){
                    let tempObj = data[add];
                    let tempObj2 = tempObj[tokenId];
                    if(userAdd[0].toLowerCase() == tempObj2.owner.toLowerCase()){
                        listedArr.push(tempObj2);
                    }
                }
            }
            setdisplayNft(listedArr);
            console.log(listedArr);
        })
    }
    
    useEffect(() => {
      fetchListed();
    }, [])
    

  return (
    <>
        <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {console.log(displayNft)}
            {Object.keys(displayNft).map((key) => (
              // {console.log(key);}
              <li key={key}>
                <SingleOwnerCard
                  name={displayNft[key].name}
                  venue={displayNft[key].venue}
                  genre={displayNft[key].genre}
                  price={displayNft[key].price}
                  picture={displayNft[key].picture}
                  owner={userAddress}
                  
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default ListedResellCards