import React from "react";
import PropTypes from "prop-types";

const RoomInsideItem = ({item}) => {
  return (
    <li className="property__inside-item">
       {item}
    </li>
  );
};

RoomInsideItem.propsType = {
  item: PropTypes.string.isRequired
};

export default RoomInsideItem;