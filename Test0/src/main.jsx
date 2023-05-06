import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import UspSection from "./Components/UspSection.jsx";
import NavBuyer from "./Components/BuyerComp/NavBuyer.jsx";
import Banner from "./Components/BuyerComp/Banner.jsx";
import Cards from "./Components/BuyerComp/Cards.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Hero />
        <UspSection />
      </>
    ),
  },
  {
    path: "/buyer",
    element: (
      <>
        <NavBuyer />
        <Hero />
      </>
    ),
  },
  {
    path: "/seller",
    element: (
      <>
        <Navbar />
        <UspSection />
      </>
    ),
  },
  {
    path: "/buyer/buy",
    element: (
      <>
        <NavBuyer />
        <Banner
          h1="Book Now."
          h2="Secure Your Seats."
          description="Say goodbye to paper tickets and enjoy the peace of mind that comes with owning your tickets as NFTs."
        />
        <Cards />
      </>
    ),
  },
  {
    path: "/buyer/resell",
    element: (
      <>
        <NavBuyer />
        <Banner
          h1="Plans Change."
          h2="Re-sell with Ease."
          description="With just a few taps, you can list your tickets for sale on our marketplace and connect with buyers who are eager to attend the event. 5% of the selling price will go to the Creator."
        />
        <Cards />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
