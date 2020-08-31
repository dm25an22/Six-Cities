import React, { useEffect, useContext } from "react";
import RoomReviewItem from "./room-review-item";
import { useSelector, useDispatch } from "react-redux";
import { getSortedReviews } from "../reducer/reviews/selector";
import {Operation as reviewsOperation, ActionCreator} from "../reducer/reviews/reviews";
import { ContextRoom } from "../context";
import { useLoadStatus } from "../hooks";

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

const RoomReview = () => {
  const {hotel} = useContext(ContextRoom);
  const loadStatus = useLoadStatus();
  const reviews = useSelector(getSortedReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reviewsOperation.loadReviews(hotel.id, loadStatus.onSuccess, loadStatus.onError));

    return () => {
      dispatch(ActionCreator.cleanupReviews())
    }
  }, []);

  return (   
    <React.Fragment>   
      {loadStatus.isLoad === null 
        ? 
      <div style={{padding: `50px 20px`}}>
        <h2 style={{textAlign: `center`}}>LOADING...</h2>
      </div> 
        :
        getMurkupReviews(loadStatus.isLoad, reviews)
      } 
    </React.Fragment>      
  );
}

export default RoomReview;