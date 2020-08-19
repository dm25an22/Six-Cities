import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNearbyHotelsMax } from "../../reducer/offersReducer/selectors";
import { Operation, ActionCreator } from "../../reducer/offersReducer/offersReducer";
import { ContextRoom } from "../../context";
import PlaceCard from "../place-card/place-card";

const getMurkupNearHotels = (isLoad, nearbyHotels) => {
  if (isLoad)  {
    return nearbyHotels.map((it) => <PlaceCard key={it.id} hotel={it} />)
  } else {
    return (
      <div style={{padding: `50px 20px`}}>
        <h2 style={{textAlign: `center`}}>Failed to load nearby hotels</h2>
      </div>
    )
  }
}

const RoomNearHotelsList = ({isLoad, onSuccess, onError}) => {
  const {hotel} = useContext(ContextRoom);
  const nearbyHotels = useSelector(getNearbyHotelsMax);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operation.loadNearbyHotels(hotel.id, onSuccess, onError));

    return () => {
      dispatch(ActionCreator.claenupNearbyHotels())
    }
  }, [dispatch, hotel.id, onError, onSuccess])

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {isLoad === null
          ?
        <div style={{padding: `50px 20px`}}>
          <h2 style={{textAlign: `center`}}>LOADING...</h2>
        </div> 
          :
          getMurkupNearHotels(isLoad, nearbyHotels)
        }
        
      </div>
    </section>
  );
};

export default RoomNearHotelsList;