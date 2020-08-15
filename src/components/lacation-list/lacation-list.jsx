import React from "react";
import LocationItem from "../location-item/location-item";

const LacationList = ({locations, activeLocation, setActiveLocation}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city) => {
            return (
              <LocationItem 
                key={city} 
                city={city}
                isActive={activeLocation === city}
                setActiveLocation={setActiveLocation}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default LacationList;