const { getAdaptedHotel, getAdaptedReview } = require("./adapter");

const endPoint = `https://4.react.pages.academy/six-cities`;

export const api = {
  async getHotels() {
    const response = await fetch(`${endPoint}/hotels`);
    const hotels = await response.json();
    return hotels.map((hotel) => getAdaptedHotel(hotel));
  },

  async getReviews(id) {
    const response = await fetch(`${endPoint}/comments/${id}`);
    const reviews = await response.json();
    return reviews.map((review) => getAdaptedReview(review));
  }
}
