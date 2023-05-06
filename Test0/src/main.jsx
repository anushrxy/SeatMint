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
import ListHeadings from "./Components/SellerComp/ListHeadings.jsx";
import NavSeller from "./Components/SellerComp/NavSeller.jsx";
import ListingForm from "./Components/SellerComp/ListingForm.jsx";
import ViewSales from "./Components/SellerComp/ViewSales.jsx";

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
        <ListHeadings text="Listed for Resell"/>
        <Cards />
        <ListHeadings text="Unlisted Holdings"/>
        <Cards />
      </>
    ),
  },
  {
    path: "/buyer/view-owned",
    element: (
      <>
        <NavBuyer />
        <Banner
          h1="Event Arsenal"
          h2="Unleash Your Tickets"
          description="Easily access and view your owned tickets as NFTs, and never worry about losing or misplacing them again."
        />
        <Cards />
      </>
    ),
  },
  {
    path: "/seller",
    element: (
      <>
        <NavSeller/>
        <Banner
        h1="Cash In!"
        h2="Sell Your Tickets."
        description="Ready to cash in on your event tickets? Join the ticket-selling revolution today and start earning money with ease."
        />
        <ListingForm/>
      </>
    ),
  },
  {
    path: "/seller/list",
    element: (
      <>
        <NavSeller/>
        <Banner
        h1="Cash In!"
        h2="Sell Your Tickets."
        description="Ready to cash in on your event tickets? Join the ticket-selling revolution today and start earning money with ease."
        />
        <ListingForm/>
      </>
    ),
  },
  {
    path: "/seller/view-sales",
    element: (
      <>
        <NavSeller/>
        <Banner
        h1="View Sales"
        h2=""
        description=""
        />
        <ViewSales />
      </>
    ),
  },
  {
    path: "/seller/others",
    element: (
      <>
        <NavSeller/>
        <Banner
        h1="Coming Soon."
        h2="With Exciting Features."
        description=""
        />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
