import React from "react";
import PropTypes from "prop-types";

const RoomGalleryItem = ({ src }) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt="studio" />
    </div>
  );
};

RoomGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
};

export default RoomGalleryItem;
