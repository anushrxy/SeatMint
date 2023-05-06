import React from "react";
import SingleCard from "./SingleCard";

function Cards() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
                <SingleCard/>
            </li>
            <li>
                <SingleCard/>
            </li>
            <li>
                <SingleCard/>
            </li>
            <li>
                <SingleCard/>
            </li>
            <li>
                <SingleCard/>
            </li>
            <li>
                <SingleCard/>
            </li>
            <li>
                <SingleCard/>
            </li>

            
          </ul>
        </div>
      </section>
    </>
  );
}

export default Cards;
