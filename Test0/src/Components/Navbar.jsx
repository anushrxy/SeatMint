import React, { useContext } from "react";
import { Link } from "react-router-dom";
import appContext from "../Context/appContext";


function Navbar() {

  const state = useContext(appContext);
  return (
    <header
      aria-label="Site Header"
      className="backdrop-blur-xl sticky top-0 z-50"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600 dark:text-teal-300" to="/">
              <span className="sr-only">Home</span>
              <div className="flex text-xl">
                <img 
                src="https://res.cloudinary.com/dlvmyc0x3/image/upload/v1683284085/SeatMint_Logo-transformed-transformed_rdmdsm.png"
                width="200rem"
                ></img>
              </div>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/"
                  >
                    History
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/"
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    to="/"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav> */}

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-700 dark:hover:text-white"
                  to= { state.connected ? "/buyer" : console.log("Connect Metamask First.") }
                >
                  Login as Buyer
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-transparent px-5 py-2.5 text-sm font-medium text-teal-700 dark:bg-gray-800 border-2 border-teal-600 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-white "
                    to="/seller"
                  >
                    Login as Seller
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
