import React from "react";

const RoomGalleryItem = ({src}) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt="studio" />
    </div>
  );
};

export default RoomGalleryItem;