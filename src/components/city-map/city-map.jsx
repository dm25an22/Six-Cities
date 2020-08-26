import React, { useEffect, useRef, useState } from "react";
import leaflet from "leaflet";
import { Redirect, useHistory } from "react-router-dom";
import { AppRoute } from "../../enums";

const CityMap = ({ hotels, activeMarker, setActiveMarker }) => {
  const [card, setCard] = useState(null);
  const history = useHistory();

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
  });

  const iconActive = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
  });

  const city = hotels[0].city.location;

  const cityCoordinates = [city.latitude, city.longitude];

  const initMap = () => {
    const map = leaflet.map(`map`, {
      center: cityCoordinates,
      zoom: city.zoom,
      zoomControl: false,
      marker: true,
    });

    map.setView(cityCoordinates, city.zoom);

    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      )
      .addTo(map);

    setCard(map);
  };

  useEffect(() => {
    initMap();
  }, []);

  useEffect(() => {
    if (card !== null) {
      hotels.forEach((hotel) => {
        const marker = activeMarker === hotel.id ? iconActive : icon;
        const location = hotel.location;
        leaflet
          .marker([location.latitude, location.longitude], { icon: marker })
          .on("click", () => history.push(`${AppRoute.ROOM}/${hotel.id}`))
          .addTo(card);
      });
    }
  });

  return (
    <section className="cities__map map">
      <div id="map" style={{ width: `100%`, height: `100%` }}></div>
    </section>
  );
};

export default CityMap;
