import React from "react";
import { useState } from "react";
import { app } from "../../assets/Firebaseconfig";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useContext } from "react";
import appContext from "../../Context/appContext";
import { ethers } from "ethers";

function ListingForm() {
  const state = useContext(appContext);
  const chain = "goerli";

  const [eventName, seteventName] = useState("");
  const [genre, setgenre] = useState("");
  const [venue, setvenue] = useState("");
  const [file, setfile] = useState(null);
  const [quantity, setquantity] = useState(0);
  const [price, setprice] = useState(0);

  const [buttonState, setbuttonState] = useState(0);

  // const [ipfsURI, setipfsURI] = useState("");
  // const [imageURI, setimageURI] = useState("");
  // const [contractAdd, setcontractAdd] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);

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
        "X-API-Key": "sk_live_be813afb-60e2-4974-ab9e-0bb5f988e3f3",
      },
    };

    async function storeIPFS(){
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

      const response = await fetch(
        "https://api.verbwire.com/v1/nft/store/metadataFromImage",
        options
      );
      response.json()
      .then((data) =>{
        console.log([data.ipfs_storage.ipfs_url, data.ipfs_storage.metadata_url]);
        const arr = [data.ipfs_storage.ipfs_url, data.ipfs_storage.metadata_url]
        return arr;
      })
      setbuttonState(3);
    }

    async function updateContract(contractAddress) {
          const form2 = new FormData();
          form2.append("chain", chain);
          form2.append("contractAddress",contractAddress);
          form2.append("mintPriceInWei", price);
          options.body = form2;
          fetch(
            "https://api.verbwire.com/v1/nft/update/setMintPrice",
            options
          ).then((response) => {response.json()})
          .then(setbuttonState(5));
          return contractAddress;

    }

    async function eventContractCreate() {
      const symbol = randomString();
        console.log(symbol);
        const form = new FormData();
        form.append("chain", chain);
        form.append("contractType", "nft721");
        form.append("contractCategory", "advanced");
        form.append("isCollectionContract", "false");
        form.append("contractName", eventName);
        form.append("contractSymbol", symbol);
        form.append("recipientAddress", userAddress[0]);
        options.body = form;

        fetch(
          "https://api.verbwire.com/v1/nft/deploy/deployContract",
          options
        ).then((response) => {response.json()})
        .then((data) => {
          // Call Contract
          return updateContract(data.transaction_details.createdContractAddress); 
        });


          
        
    }

    async function updateFirebaseData(ipfsArray, addressContract) {
      console.log(`Updating...`)
      const db = getDatabase(app);
      await set(ref(db, `events/${addressContract}`), {
            name: eventName,
            picture: ipfsArray[0],
            metadata: ipfsArray[1],
            Venue: venue,
            Genre: genre,
            Tickets: quantity,
            Remaining: quantity,
            Price: price            
      });
          setbuttonState(6);
    }

    try {
      // IPFS Storage for NFT Metadata.
      const ipfsArray = await storeIPFS();

      // Creating Smart Contract
      const addressContract = await eventContractCreate();

      // Updating with Firebase
      await updateFirebaseData(ipfsArray, addressContract);
      

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
                  disabled={buttonState == 0 || 34 || 6 ? false : true}
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
