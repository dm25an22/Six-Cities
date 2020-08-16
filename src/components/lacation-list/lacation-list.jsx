import React, { useContext } from "react";
import LocationItem from "../location-item/location-item";
import {ContextMain} from "../../context";

const LacationList = () => {
  const {locations, activeLocation, setActiveLocation} = useContext(ContextMain);

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