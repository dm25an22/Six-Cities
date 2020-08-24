import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { Operation as reviewsOperation } from "../reducer/reviews/reviews";
import { ContextRoom } from "../context";

const MIN_CHARACTERS = 50;
const MAX_CHARACTERS = 300;

const RoomAddReview = () => {
  const [textReview, setTexReview] = useState(``);
  const [rating, setRating] = useState(0);
  const {hotel} = useContext(ContextRoom)
  const dispath = useDispatch();

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();

        const newReview = {
          comment: textReview,
          rating: rating
        }

        dispath(reviewsOperation.addReview(hotel.id, newReview))
      }}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          onChange={(evt) => {
            setRating(Number(evt.target.value));
          }}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        onChange={(evt) => {
          setTexReview(evt.target.value);
        }}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={""}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{" "}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            textReview.length >= MIN_CHARACTERS &&
            textReview.length < MAX_CHARACTERS &&
            rating
              ? false
              : true
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RoomAddReview;
