import React from "react";
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
}

export default LacationList;