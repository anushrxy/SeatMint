import React from "react";
import { useState, useEffect } from "react";
import { app } from "../../assets/Firebaseconfig";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useContext } from "react";
import appContext from "../../Context/appContext";
import { ethers } from "ethers";
import { apiKey } from "../../Exports";

function ListingForm() {

  const state = useContext(appContext);
  const chain = "goerli";

  const [eventName, seteventName] = useState("");
  const [genre, setgenre] = useState("");
  const [venue, setvenue] = useState("");
  const [file, setfile] = useState(null);
  const [quantity, setquantity] = useState("");
  const [price, setprice] = useState("");

  const [buttonState, setbuttonState] = useState(0);
  const [arr, setarr] = useState();
  const [addressContract, setaddressContract] = useState("");
  const [updated, setupdated] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    if(buttonState == 6){
      function resetPage(){
        seteventName("");
        setgenre("");
        setvenue("");
        setfile(null);
        setquantity("");
        setprice("");
      }
      setTimeout(resetPage, 5000);
    }

  }, [buttonState])
  

  function randomString() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const createEvent = async () => {
    const userAddress = await provider.send("eth_requestAccounts", []);
    console.log(userAddress[0]);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "X-API-Key": apiKey,
      },
    };

    function storeIPFS() {
      setbuttonState(1);

      const form = new FormData();
      form.append("description", `SeatMint Ticket for ${eventName}`);
      form.append("name", eventName);
      form.append("filePath", file);
      form.append(
        "data",
        `[{'trait_type': 'Venue', 'value': ${venue}}, {'trait_type': 'Genre', 'value': ${genre}},]`
      );
      options.body = form;

      fetch(
        "https://api.verbwire.com/v1/nft/store/metadataFromImage",
        options
      ).then((resp) => {
        resp.json().then((data) => {
          console.log(data);
          // console.log([data.ipfs_storage.ipfs_url, data.ipfs_storage.metadata_url]);
          // const resarr = [data.ipfs_storage.ipfs_url, data.ipfs_storage.metadata_url];
          setarr(data);
          // arr.push(data.ipfs_storage.ipfs_url)
          // arr.push(data.ipfs_storage.metadata_url)

          setbuttonState(3);
          eventContractCreate(data);

      
          
        });
      });
      return arr;
    }

    function updateContract(data1,contractAddress2) {
      console.log("Running Update...");
      const form2 = new FormData();

      form2.append("chain", chain);
      form2.append("contractAddress", contractAddress2);
      form2.append("mintPriceInWei", price);
      options.body = form2;

      const response = fetch(
        "https://api.verbwire.com/v1/nft/update/setMintPrice",
        options
      )
        .then((data) => {
          data.json().then((res) => {
            console.log(res);
            setupdated(true);
            setbuttonState(5);
          });
          // console.log(data)
          console.log("Update Database Start..");
          console.log(arr)
          const db = getDatabase(app);
          set(ref(db, `events/${contractAddress2}`), {
            name: eventName,
            picture: data1.ipfs_storage.ipfs_url,
            metadata: data1.ipfs_storage.metadata_url,
            venue: venue,
            genre: genre,
            tickets: quantity,
            remaining: quantity,
            Price: price,
            owner: userAddress[0],
          }).then(res=>{
            setbuttonState(6);
          })
        })
        .catch((err) => {
          console.log(err);
        });
      return updated;
    }

    function eventContractCreate(data1) {
      const symbol = randomString();
      console.log(symbol);
      var form = new FormData();
      form.append("chain", chain);
      form.append("contractType", "nft721");
      form.append("contractCategory", "advanced");
      form.append("isCollectionContract", "false");
      form.append("contractName", eventName);
      form.append("contractSymbol", symbol);
      form.append("recipientAddress", userAddress[0]);
      // console.log(Object.fromEntries(form))
      options.body = form;
      console.log(options);
      const response =
        form &&
        fetch(
          "https://api.verbwire.com/v1/nft/deploy/deployContract",
          options
        ).then((data) => {
          data.json().then((res) => {
            const addressContracttemp =
              res.transaction_details.createdContractAddress;
            setaddressContract(addressContracttemp);
            console.log(addressContracttemp);
            updateContract(data1,addressContracttemp);
          });
          // Call Contract
        });
      return addressContract;
    }

    async function updateFirebaseData() {
      // IPFS Storage for NFT Metadata.
      storeIPFS();
      // Creating Smart Contract
    }
    try {
      // Updating with Firebase
      updateFirebaseData();
    } catch (error) {
      setbuttonState(34);
      console.error(error);
    }
  };

  return (
    <>
      <section className="mx-auto">
        <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
          <div className="">
            <div className="rounded-lg bg-gray-800 p-8 shadow-lg  lg:p-12">
              <form action="" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="event-name">
                    Event Name
                  </label>
                  <input
                    className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                    placeholder="Event Name"
                    type="event-name"
                    id="event-name"
                    value={eventName}
                    onChange={(e) => seteventName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="venue">
                      Venue
                    </label>
                    <input
                      className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                      placeholder="Venue"
                      type="Venue"
                      id="Venue"
                      value={venue}
                      onChange={(e) => setvenue(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="genre">
                      Genre
                    </label>
                    <input
                      className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                      placeholder="Genre"
                      type="genre"
                      id="genre"
                      value= {genre}
                      onChange={(e) => setgenre(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="file-input" className="sr-only">
                    Choose file
                  </label>
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    placeholder="Upload NFT Image."
                    className="block w-full shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                    file:bg-transparent file:border-0
                    file:bg-gray-200 file:mr-4
                    file:py-3 file:px-4
                    dark:file:bg-gray-600 dark:file:text-gray-200"
                    onChange={(e) => setfile(e.target.files[0])}
                  ></input>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="seats">
                      Seats Quantity
                    </label>
                    <input
                      className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                      placeholder="Seats Quantity"
                      type="seats"
                      id="seats"
                      value= {quantity}
                      onChange={(e) => setquantity(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="price">
                      Price
                    </label>
                    <input
                      className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                      placeholder="Price Per Ticket"
                      type="price"
                      id="price"
                      value = {price}
                      onChange={(e) => setprice(e.target.value)}
                    />
                  </div>
                </div>
              </form>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-teal-600 px-5 py-3 font-medium text-white sm:w-auto"
                  onClick={createEvent}
                  // disabled={buttonState == 0 || 34 || 6 ? `false` : `true`}
                >
                  {buttonState == 0
                    ? `List Event`
                    : buttonState == 1
                    ? `Storing files...`
                    : buttonState == 3
                    ? `Creating Contract...`
                    : buttonState == 5
                    ? `Updating Database...`
                    : buttonState == 6
                    ? `Done...`
                    : buttonState == 34
                    ? `Error`
                    : `Invalid`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListingForm;
