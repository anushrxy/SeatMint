import React from "react";

function Navbar() {
  return (
    <header
      aria-label="Site Header"
      className="backdrop-blur-xl sticky top-0 z-50 "
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="/">
              <span className="sr-only">Home</span>
              <div className="flex text-xl">
                <img 
                src="https://res.cloudinary.com/dlvmyc0x3/image/upload/v1683284085/SeatMint_Logo-transformed-transformed_rdmdsm.png"
                width="200rem"
                ></img>
              </div>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav> */}

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-700 dark:hover:text-white"
                  href="/"
                >
                  Login as Buyer
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-transparent px-5 py-2.5 text-sm font-medium text-teal-700 dark:bg-gray-800 border-2 border-teal-600 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-white "
                    href="/"
                  >
                    Login as Seller
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
