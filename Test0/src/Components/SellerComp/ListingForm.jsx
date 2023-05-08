import React from "react";
import { useState } from "react";
// import api from 'api';


function ListingForm() {
  const [eventName, seteventName] = useState("");
  const [genre, setgenre] = useState("");
  const [venue, setvenue] = useState("");
  const [file, setfile] = useState(null);
  const [quantity, setquantity] = useState(0);
  const [price, setprice] = useState(0);

  const [dataIPFS, setdataIPFS] = useState("");

  const [ipfsURI, setipfsURI] = useState("");
  const [imageURI, setimageURI] = useState("");

  const createEvent = async () => {

    // Verbwire Config
    // const sdk = api('@verbwire/v1.0#bmqq91mlh2f0wis');
    // sdk.auth("sk_live_2193b1f6-41cf-4d27-a182-2c9b94ac495b");

    // Storing Metadata on IPFS.
    

    // await sdk.postNftStoreMetadatafromimage(
    //     {
    //       description: `SeatMint Ticket for ${eventName}`,
    //       name: eventName,
    //       filePath: file,
    //       data: `[
    //         {'trait_type': 'Venue', 'value': ${venue}},
    //         {'trait_type': 'Genre', 'value': ${genre}},
    //     ]`,
    //     },
    //     { accept: "application/json" }
    //   )
    //   .then(({ data }) => setdataIPFS(data))
    //   .catch((err) => console.error(err));
    //   console.log(dataIPFS);
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
                >
                  List Tickets
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
