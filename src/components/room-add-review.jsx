import React, { useState, useContext, useRef } from "react";
import { useDispatch } from "react-redux";
import { Operation as reviewsOperation } from "../reducer/reviews/reviews";
import { ContextRoom } from "../context";
import { RatingStarsCount } from "../enums";

const MIN_CHARACTERS = 50;
const MAX_CHARACTERS = 300;

const RoomAddReview = () => {
  const [textReview, setTexReview] = useState(``);
  const [rating, setRating] = useState(0);
  const [errorStatus, setErrorStatus] = useState(false);
  const { hotel } = useContext(ContextRoom);
  const dispath = useDispatch();
  const texAreaRef = useRef();
  const fieldsetRef = useRef();

  const onSuccess = () => {
    texAreaRef.current.value = "";
    setTexReview(``);
    setRating(0);
    fieldsetRef.current.disabled = false;
    setErrorStatus(false)
  };

  const onError = () => {
    fieldsetRef.current.disabled = false;
    setErrorStatus(true);
  };

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();

        fieldsetRef.current.disabled = true;

        const newReview = {
          comment: textReview,
          rating: rating,
        };

        dispath(
          reviewsOperation.addReview(hotel.id, newReview, onSuccess, onError)
        );
      }}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <fieldset
        style={{ border: `none`, margin: `0`, padding: `0` }}
        ref={fieldsetRef}
      >
        <div className="reviews__rating-form form__rating">
          {Object.values(RatingStarsCount).map((it, i, arr) => {
            const count = arr.length - i;

            return (
              <React.Fragment key={it}>
                <input
                  onChange={(evt) => {
                    setRating(Number(evt.target.value));
                  }}
                  className="form__rating-input visually-hidden"
                  name="rating"
                  defaultValue={count}
                  id={`${count}-stars`}
                  type="radio"
                  checked={count === rating}
                />
                <label
                  htmlFor={`${count}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={it}
                >
                  <svg className="form__star-image" width={37} height={33}>
                    <use xlinkHref="#icon-star" />
                  </svg>
                </label>
              </React.Fragment>
            );
          })}
        </div>

        <textarea
          ref={texAreaRef}
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
      </fieldset>
      {errorStatus && (
        <div style={{ color: `red`, textAlign: `center`, padding: `20px 0` }}>
          Server not available
        </div>
      )}
    </form>
  );
};

export default RoomAddReview;
