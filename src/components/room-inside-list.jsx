import React from "react";
import PropTypes from "prop-types";
import RoomInsideItem from "./room-inside-item";

const RoomInsideList = ({ goods }) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What's inside</h2>
      <ul className="property__inside-list">
        {goods.map((it) => (
          <RoomInsideItem key={it} item={it} />
        ))}
      </ul>
    </div>
  );
};

RoomInsideList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoomInsideList;
