import PropTypes from "prop-types";

export const hostType = {
  avatarUrl: PropTypes.string,
  id: PropTypes.number,
  isPro: PropTypes.bool,
  name: PropTypes.string
};

export const hotelType = {
  id: PropTypes.number,
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
    name: PropTypes.string
  }),
  description: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape(hostType),
  images: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number
  }),
  maxAdults: PropTypes.number,
  previewImage: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string
};

export const reviewType = {
  comment: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  })
};

