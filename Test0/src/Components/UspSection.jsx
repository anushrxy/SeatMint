import React from "react";

function UspSection() {
  return (
    <>
      <section class="bg-gray-900 text-white">
        <div class="px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 grid justify-items-center">
          <div class="max-w-xl">
            <h2 class="text-3xl font-bold sm:text-4xl">
              What makes us special
            </h2>

            <p class="mt-4 text-gray-300">
              Our app is revolutionizing the way people buy, sell, and trade
              event tickets. With the power of NFTs, users can own their tickets
              like never before, with added benefits like improved security,
              tradeability, and more. Experience the future of ticketing today!
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div class="flex items-start gap-4">
              <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 class="text-lg font-bold">Buy Tickets</h2>

                <p class="mt-1 text-sm text-gray-300">
                  Our app allows users to quickly and securely purchase event
                  tickets using a range of payment options. Users can easily
                  browse through upcoming events, select the tickets they want,
                  and receive them as NFTs that can be stored in their digital
                  wallet. This makes it easy to manage your tickets and never
                  worry about losing or misplacing them.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 class="text-lg font-bold">List Tickets</h2>

                <p class="mt-1 text-sm text-gray-300">
                  Users can also use our app to sell their tickets on our
                  marketplace. Our platform allows for transparent and secure
                  transactions between buyers and sellers, ensuring that both
                  parties are protected. When selling tickets, users can set
                  their own price and list their tickets for sale in just a few
                  clicks.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <span class="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 class="text-lg font-bold">Trade Tickets.</h2>

                <p class="mt-1 text-sm text-gray-300">
                  Our app also offers a unique feature that allows users to
                  trade their event tickets with others. This feature is perfect
                  for users who have a change of plans and can no longer attend
                  an event. Instead of selling their tickets, they can offer
                  them up for trade and find someone who is willing to swap
                  tickets for another event. This feature is great for those who
                  want to attend more events but are on a tight budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UspSection;
