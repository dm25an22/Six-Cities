import React from "react";
import RoomGalleryItem from "../room-gallery-item/room-gallery-item";

const RoomGallery = () => {
  return (
    <div className="property__gallery-container container">
    <div className="property__gallery">
      <RoomGalleryItem />
    </div>
  </div>
  );
}

export default RoomGallery;