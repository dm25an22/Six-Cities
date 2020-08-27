import React, {useContext} from "react";
import RoomGalleryItem from "./room-gallery-item";
import {ContextRoom} from "../context";
import {getImgForRoomGallery} from "../utils";

const RoomGallery = () => {
  const {hotel} = useContext(ContextRoom);
  const images = getImgForRoomGallery(hotel.images);

  return (
    <div className="property__gallery-container container">
    <div className="property__gallery">
      {images.map((img) => <RoomGalleryItem key={img} src={img} />)}
    </div>
  </div>
  );
}

export default RoomGallery;