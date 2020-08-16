/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "../header/header";
import RoomGallery from "../room-gallery/room-gallery";
import RoomInfo from "../room-info/room-info";
import RoomReview from "../room-review/room-review";
import RoomNearHotelsList from "../room-near-hotels-list/room-near-hotels-list";

const Room = () => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
         <RoomGallery />
          <div className="property__container container">
            <div className="property__wrapper">
              <RoomInfo />
              <RoomReview />
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <RoomNearHotelsList />
        </div>
      </main>
    </div>

  );  
};

export default Room;