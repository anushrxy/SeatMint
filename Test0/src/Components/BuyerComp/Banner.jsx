import React from "react";

function Banner(props) {
  return (
    <>
      <section class="bg-gray-900 text-white">
        <div class="mx-auto px-4 py-2 lg:block lg:items-center">
          <div class="mx-auto  text-center">
            <h1 class="bg-gradient-to-r from-teal-600 from-30%  to-white to-70% bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              {props.h1}
              <span class="sm:block"> {props.h2} </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            {props.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
