import { TypeSort } from "./enums";
import { MONTHS } from "./constans";

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getRatingByPercent = (rating) => {
  const maxRating = 5;
  const ratingRound = Math.round(rating);
  return (ratingRound * 100) / maxRating;
};

const getSortedHotels = (hotels, sortType) => {
  const hotelsCopy = [...hotels];

  switch (sortType) {
    case TypeSort.POPULAR:
      return hotelsCopy;

    case TypeSort.TO_LOW:
      return hotelsCopy.sort((a, b) => b.price - a.price);

    case TypeSort.TO_HIGH:
      return hotelsCopy.sort((a, b) => a.price - b.price);

    case TypeSort.TOP_RATED:
      return hotelsCopy.sort((a, b) => b.rating - a.rating);

    default:
      return hotelsCopy;
  }
};

const getHotelById = (hotels, id) => {
  return hotels.find((hotel) => hotel.id === Number(id));
};

const getImgForRoomGallery = (images) => {
  return images.slice(0, 6);
};

const getformatDateForReview = (date) => {
  const newDate = new Date(date);

  const month = MONTHS[newDate.getMonth() + 1];
  const year = newDate.getFullYear();

  return `${month} ${year}`;
};

export {
  extend,
  getRatingByPercent,
  getSortedHotels,
  getHotelById,
  getImgForRoomGallery,
  getformatDateForReview,
};
