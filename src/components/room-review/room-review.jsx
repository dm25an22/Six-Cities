import React, { useEffect, useContext } from "react";
import RoomReviewItem from "../room-review-item/room-review-item";
import { useSelector, useDispatch } from "react-redux";
import { getSortedReviews } from "../../reducer/offersReducer/selectors";
import {Operation as OffersOperation, ActionCreator} from "../../reducer/offersReducer/offersReducer";
import { ContextRoom } from "../../context";
import RoomAddReview from "../room-add-review";
import { getAuthStatus } from "../../reducer/userReducer/selector";

const getMurkupReviews = (isLoaded, reviews) => {
  if (isLoaded) {
    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
          {reviews && reviews.map((it) => <RoomReviewItem key={it.id} review={it} />)}
        </ul>
      </React.Fragment>
    );
  } else {
    return (
      <div style={{padding: `50px 20px`}}>
        <h2 style={{textAlign: `center`}}>Failed to load reviews</h2>
      </div>
    );
  }
};

const RoomReview = ({isLoad, onSuccess, onError}) => {
  const {hotel} = useContext(ContextRoom);
  const reviews = useSelector(getSortedReviews);
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OffersOperation.loadReviews(hotel.id, onSuccess, onError));

    return () => {
      dispatch(ActionCreator.cleanupReviews())
    }
  }, [dispatch, hotel.id, onError, onSuccess]);

  return (
    <section className="property__reviews reviews">
      
      {isLoad === null 
        ? 
      <div style={{padding: `50px 20px`}}>
        <h2 style={{textAlign: `center`}}>LOADING...</h2>
      </div> 
        :
        getMurkupReviews(isLoad, reviews)
      } 
      
      {authStatus && <RoomAddReview />}
      
    </section>
  );
}

export default RoomReview;