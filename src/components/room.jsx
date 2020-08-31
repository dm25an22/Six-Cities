/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "./header";
import RoomGallery from "./room-gallery";
import RoomInfo from "./room-info";
import RoomReview from "./room-review";
import RoomNearHotels from "./room-near-hotels";
import { useRouteMatch } from "react-router-dom";
import { getHotelById } from "../utils";
import { useSelector } from "react-redux";
import { getHotels } from "../reducer/offers/selectors";
import { ContextRoom } from "../context";
import RoomAddReview from "./room-add-review";
import { getAuthStatus } from "../reducer/user/selector";

const Room = () => {
  window.scrollTo(0, 0);
  const hotels = useSelector(getHotels);
  const match = useRouteMatch();
  const hotel = getHotelById(hotels, match.params.id);
  const authStatus = useSelector(getAuthStatus);

  return (
    <ContextRoom.Provider value={{ hotel }}>
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <RoomGallery />
            <div className="property__container container">
              <div className="property__wrapper">
                <RoomInfo />
                <section className="property__reviews reviews">
                  <RoomReview />
                  {authStatus && <RoomAddReview />}
                </section>
              </div>
            </div>
          </section>
          <div className="container">
            <RoomNearHotels id={match.params.id} />
          </div>
        </main>
      </div>
    </ContextRoom.Provider>
  );
};

export default Room;
