import { useContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppState from "./Context/appState";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import UspSection from "./Components/UspSection.jsx";
import NavBuyer from "./Components/BuyerComp/NavBuyer.jsx";
import Banner from "./Components/BuyerComp/Banner.jsx";
import Cards from "./Components/BuyerComp/DirectBuyCards.jsx";
import ListHeadings from "./Components/SellerComp/ListHeadings.jsx";
import NavSeller from "./Components/SellerComp/NavSeller.jsx";
import ListingForm from "./Components/SellerComp/ListingForm.jsx";
import ViewSales from "./Components/SellerComp/ViewSales.jsx";
import appContext from "./Context/appContext";
import OwnedCards from "./Components/BuyerComp/OwnedCards";
import UnlistedCards from "./Components/BuyerComp/UnlistedCards";
import ListedResellCards from "./Components/BuyerComp/ListedResellCards";
import Verify from "./Components/SellerComp/Verify";

function App() {
  const state = useContext(appContext);

  return (
    <>
      <div>
        <AppState>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero
                  // connected={conncected} setConnected={setConnected} updateSigner={updateSigner}
                  />
                  <UspSection />
                </>
              }
            />
            <Route
              path="/buyer"
              element={
                <>
                  <NavBuyer />
                  <Banner
                    h1="Book Now."
                    h2="Secure Your Seats."
                    description="Say goodbye to paper tickets and enjoy the peace of mind that comes with owning your tickets as NFTs."
                  />
                  <Cards />
                </>
              }
            />
            <Route
              path="/buyer/buy"
              element={
                <>
                  <NavBuyer />
                  <Banner
                    h1="Book Now."
                    h2="Secure Your Seats."
                    description="Say goodbye to paper tickets and enjoy the peace of mind that comes with owning your tickets as NFTs."
                  />
                  <Cards />
                </>
              }
            />
            <Route
              path="/buyer/resell"
              element={
                <>
                  <NavBuyer />
                  <Banner
                    h1="Plans Change."
                    h2="Re-sell with Ease."
                    description="With just a few taps, you can list your tickets for sale on our marketplace and connect with buyers who are eager to attend the event. 5% of the selling price will go to the Creator."
                  />
                  <ListHeadings text="Unlisted Holdings" />
                  <UnlistedCards />
                  <ListHeadings text="Listed for Resell" />
                  <ListedResellCards />
                </>
              }
            />
            <Route
              path="/buyer/view-owned"
              element={
                <>
                  <NavBuyer />
                  <Banner
                    h1="Event Arsenal"
                    h2="Unleash Your Tickets"
                    description="Easily access and view your owned tickets as NFTs, and never worry about losing or misplacing them again."
                  />
                  <OwnedCards />
                </>
              }
            />
            <Route
              path="/seller"
              element={
                <>
                  <NavSeller />
                  <Banner
                    h1="Cash In!"
                    h2="Sell Your Tickets."
                    description="Ready to cash in on your event tickets? Join the ticket-selling revolution today and start earning money with ease."
                  />
                  <ListingForm />
                </>
              }
            />
            <Route
              path="/seller/list"
              element={
                <>
                  <NavSeller />
                  <Banner
                    h1="Cash In!"
                    h2="Sell Your Tickets."
                    description="Ready to cash in on your event tickets? Join the ticket-selling revolution today and start earning money with ease."
                  />
                  <ListingForm />
                </>
              }
            />
            <Route
              path="/seller/view-sales"
              element={
                <>
                  <NavSeller />
                  <Banner h1="View Sales" h2="" description="" />
                  <ViewSales />
                </>
              }
            />
            <Route
              path="/seller/verify"
              element={
                <>
                  <NavSeller />
                  <Banner
                    h1="Verify Now"
                    h2="Verify User Tickets"
                    description="Easily validate your event tickets before the big day arrives. Our innovative platform lets you burn your NFT tickets after entry, ensuring that they can never be used again."
                  />
                  <Verify />
                </>
              }
            />
          </Routes>
        </AppState>
      </div>
    </>
  );
}

export default App;
