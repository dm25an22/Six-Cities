import React from "react";
import RoomNearHotelsItem from "../room-near-hotels-item/room-near-hotels-item";

const RoomNearHotelsList = () => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <RoomNearHotelsItem />
      </div>
    </section>
  );
};

export default RoomNearHotelsList;