import React from "react";

function Hero() {
  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-800">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-800"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  Revolutionizing Ticketing: Book, Own, and Experience with NFTs
                </h2>

                <p class="mt-4 text-gray-600">
                  Our app is changing the way people book and own tickets by
                  leveraging the power of NFTs. With our user-friendly
                  interface, you can easily book tickets to your favorite events
                  and receive them as unique and secure NFTs. But that's not
                  all, you can also list your tickets on our marketplace and
                  sell them to other enthusiasts in a transparent and secure
                  way. Join us today and experience the future of ticketing!
                </p>

                <a
                  href="#"
                  class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
