import React from "react";
import PropTypes from "prop-types";
import LocationItem from "./location-item";

const LacationList = ({activeLocation, locations}) => { 
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city, index) => {
            return (
              <LocationItem 
                key={city} 
                city={city}
                isActive={activeLocation === city}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

LacationList.propTypes = {
  activeLocation: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LacationList;