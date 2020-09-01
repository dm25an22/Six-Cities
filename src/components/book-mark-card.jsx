import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Operation } from "../reducer/favorites/favorites";

const BookMarkCard = ({id, status}) => {
  const dispatch = useDispatch();
  
  return (
    <button
      onClick={() => {
        dispatch(Operation.toggleIsFavorite(id, status));
      }}
      className={`place-card__bookmark-button ${
        !status && `place-card__bookmark-button--active`
      } button`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
};

BookMarkCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired
};

export default BookMarkCard;
