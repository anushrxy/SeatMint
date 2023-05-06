import React from "react";

function ListingForm() {
  return (
    <>
      <section className="mx-auto">
        <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
          <div className="">
            <div className="rounded-lg bg-gray-800 p-8 shadow-lg  lg:p-12">
              <form action="" className="space-y-4">
                <div>
                  <label className="sr-only" for="event-name">
                    Event Name
                  </label>
                  <input
                    className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                    placeholder="Event Name"
                    type="event-name"
                    id="event-name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="venue">
                      Venue
                    </label>
                    <input
                      className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                      placeholder="Venue"
                      type="Venue"
                      id="Venue"
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="genre">
                      Genre
                    </label>
                    <input
                      className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                      placeholder="Genre"
                      type="genre"
                      id="genre"
                    />
                  </div>
                </div>
                <div>
                  <label for="file-input" class="sr-only">
                    Choose file
                  </label>
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    placeholder="Upload NFT Image."
                    class="block w-full shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                    file:bg-transparent file:border-0
                    file:bg-gray-200 file:mr-4
                    file:py-3 file:px-4
                    dark:file:bg-gray-600 dark:file:text-gray-200"
                  ></input>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="seats">
                      Seats Quantity
                    </label>
                    <input
                      className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                      placeholder="Seats Quantity"
                      type="seats"
                      id="seats"
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="price">
                      Price
                    </label>
                    <input
                      className="w-full rounded-lg border-teal-600 p-3 text-sm bg-slate-900"
                      placeholder="Price Per Ticket"
                      type="price"
                      id="price"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-teal-600 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    List Tickets
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListingForm;
