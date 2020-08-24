/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "../header/header";
import RoomGallery from "../room-gallery/room-gallery";
import RoomInfo from "../room-info/room-info";
import RoomReview from "../room-review/room-review";
import RoomNearHotelsList from "../room-near-hotels-list/room-near-hotels-list";
import {useRouteMatch} from "react-router-dom";
import {getHotelById} from "../../utils";
import {useSelector} from "react-redux";
import {getHotels} from "../../reducer/offersReducer/selectors";
import {ContextRoom} from "../../context";
import withLoadStatus from "../../hocs/with-load-status/with-load-status";
import RoomAddReview from "../room-add-review";
import { getAuthStatus } from "../../reducer/userReducer/selector";

const RoomReviewWrapped = withLoadStatus(RoomReview);
const RoomNearHotelsListWrapped = withLoadStatus(RoomNearHotelsList);

const Room = () => {
  window.scrollTo(0, 0)
  const hotels = useSelector(getHotels);
  const match = useRouteMatch();
  const hotel = getHotelById(hotels, match.params.id);
  const authStatus = useSelector(getAuthStatus);

  
  return (
    <ContextRoom.Provider value={{hotel}}>
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
          <RoomGallery />
            <div className="property__container container">
              <div className="property__wrapper">
                <RoomInfo />
                <section className="property__reviews reviews">

                <RoomReviewWrapped />
                {authStatus && <RoomAddReview />}

                </section>

              </div>
            </div>
            <section className="property__map map" />
          </section>
          <div className="container">
            <RoomNearHotelsListWrapped />
          </div>
        </main>
      </div>
    </ContextRoom.Provider>
  );  
};

export default Room;