import React from "react";
import LocationItem from "../location-item/location-item";


const LacationList = ({activeLocation, locations, setActiveLocation}) => { 
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city) => {
            return (
              <LocationItem 
                setActiveLocation={setActiveLocation}
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