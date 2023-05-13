import { ethers } from "ethers";
import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";

function ViewSales() {
  const [userAddress, setuserAddress] = useState("");
  const [displayObj, setdisplayObj] = useState([]);
  const [total, setTotal] = useState(0);
  


  async function fetchSales() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const userAdd = await provider.send("eth_requestAccounts", []);
    setuserAddress(userAdd[0]);
    const db = getDatabase();
    const SalesRef = ref(db, "events/");
    onValue(SalesRef, (snapshot) => {
      const objEvents = snapshot.val();
      processSalesObj(objEvents);
      console.log(objEvents);
  
    });
  }
  
  async function processSalesObj(objEvents) {
    let displayArr = [];
    for(let contAdd in objEvents) {
      console.log("For Running")
      let owner = objEvents[contAdd].owner;
      if (userAddress.toLowerCase() == owner.toLowerCase()) {
        displayArr.push(objEvents[contAdd]);
      }
    }
    setdisplayObj(displayArr);
    console.log(displayArr)
    calculate(displayArr);
  }

  function calculate(array){
    let tempTotal = 0;
    for(let obj in array){
      let total0 = (array[obj].tickets - array[obj].remaining) * array[obj].Price;
      console.log(total0);
      tempTotal += total0;
    }
    setTotal(tempTotal);

  }
  useEffect(() => {
    fetchSales();
    console.log("Running")
  },[]);

  return (
    <>
      <section>
        <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mt-8">
              {Object.keys(displayObj).map((key) => (
                <>
                  <ul 
                  className="space-y-4"
                  key={key}>
                    <li className="flex items-center gap-4">
                      <img
                        src= {displayObj[key].picture}
                        alt="Event Poster"
                        className="h-28 w-28 rounded object-cover"
                      />

                      <div className="items-start">
                        <h3 className="text-xl text-gray-100">
                          {displayObj[key].name}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-md text-gray-300">
                          <div>
                            <dt className="inline">Venue: </dt>
                            <dd className="inline">{displayObj[key].venue}</dd>
                          </div>

                          <div>
                            <dt className="inline">Genre: </dt>
                            <dd className="inline">{displayObj[key].genre}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        {`${displayObj[key].tickets - displayObj[key].remaining} x ${displayObj[key].Price} ETH = ${(displayObj[key].tickets - displayObj[key].remaining) * displayObj[key].Price} ETH`}
                      </div>
                    </li>
                  </ul>
                </>
              ))}

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">

                    <div className="flex justify-between text-white text-2xl font-medium">
                      <dt>Total</dt>
                      <dd>{`${total} ETH`}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <button
                      href="#"
                      className="block rounded bg-teal-600 px-5 py-3 text-sm text-gray-100 "
                    >
                      Redeem Available Balance
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewSales;
