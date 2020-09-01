import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import { useHistory } from "react-router-dom";
import { AppRoute } from "../enums";
import { getRatingByPercent } from "../utils";
import { hotelType } from "../types";

const CityMap = ({ hotels, activeMarker }) => {
  const [card, setCard] = useState(null);
  const history = useHistory();

  const icon = leaflet.icon({
    iconUrl: `../img/pin.svg`,
  });

  const iconActive = leaflet.icon({
    iconUrl: `../img/pin-active.svg`,
  });

  const customPopup = (title, price, rating) => {
    return `<div>${title}<br /><strong>&euro; ${price}</strong></div>
      <div class="place-card__stars rating__stars">
        <span style="width: ${getRatingByPercent(rating)}%"></span>
        <span class="visually-hidden">Rating</span>
      </div>`;
  };

  const initMap = useCallback(() => {
    const city = hotels[0].city.location;
    const cityCoordinates = [city.latitude, city.longitude];

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
  }, [hotels]);

  const updateCard = () => {
    hotels.forEach((hotel) => {
      const { id, location, title, price, rating } = hotel;

      const marker = activeMarker === id ? iconActive : icon;
      const popup = customPopup(title, price, rating);

      const currentMarker = leaflet
        .marker([location.latitude, location.longitude], { icon: marker })
        .on("click", () => history.push(`${AppRoute.ROOM}/${id}`))
        .addTo(card)
        .bindPopup(popup);

      currentMarker.on("mouseover", () => {
        currentMarker.openPopup();
      });
    });
  };

  useEffect(() => {
    if (card === null) {
      initMap();
    }
  }, [card, initMap]);

  useEffect(() => {
    if (card !== null) {
      updateCard();
    }
  });

  return (
    <div
      onMouseLeave={() => {
        card.closePopup();
      }}
      id="map"
      style={{ width: `100%`, height: `100%` }}
    ></div>
  );
};

CityMap.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape(hotelType)).isRequired,
  activeMarker: PropTypes.oneOfType([
    PropTypes.number,
  ])
};

export default CityMap;
