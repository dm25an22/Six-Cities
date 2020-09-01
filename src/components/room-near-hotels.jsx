import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getNearbyHotelsMax } from "../reducer/offers/selectors";
import { Operation, ActionCreator } from "../reducer/offers/offers";
import { ContextRoom } from "../context";
import PlaceCard from "./place-card";
import CityMap from "./city-map";
import { useLoadStatus } from "../hooks";
import ErrorLoading from "./error-loading ";

const getMurkup = (isLoad, nearbyHotels, activeMarker, setActiveMarker, id) => {
  if (isLoad) {
    return (
      <React.Fragment>
        <section className="property__map map">
          <CityMap key={id} hotels={nearbyHotels} activeMarker={activeMarker} />
        </section>
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {nearbyHotels.map((it) => (
              <PlaceCard
                key={it.id}
                hotel={it}
                setActiveMarker={setActiveMarker}
              />
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  } else {
    return (
      <ErrorLoading messsage={`Failed to load nearby hotels`}/>
    );
  }
};

const RoomNearHotelsList = ({ id }) => {
  const { hotel } = useContext(ContextRoom);
  const loadStatus = useLoadStatus();
  const [activeMarker, setActiveMarker] = useState(null);
  const nearbyHotels = useSelector(getNearbyHotelsMax);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      Operation.loadNearbyHotels(
        hotel.id,
        loadStatus.onSuccess,
        loadStatus.onError
      )
    );

    return () => {
      dispatch(ActionCreator.claenupNearbyHotels());
    };
  }, []);

  return (
    <React.Fragment>
      {loadStatus.isLoad === null ? (
        <div style={{ padding: `50px 20px` }}>
          <h2 style={{ textAlign: `center` }}>LOADING...</h2>
        </div>
      ) : (
        getMurkup(
          loadStatus.isLoad,
          nearbyHotels,
          activeMarker,
          setActiveMarker,
          id
        )
      )}
    </React.Fragment>
  );
};

RoomNearHotelsList.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RoomNearHotelsList;
