import { getAdaptedHotels, getAdaptedReviews, getAdaptedHotel } from "./adapter"

const Methods = {
  GET: `GET`,
  POST: `POST`
}

const endPoint = `https://4.react.pages.academy/six-cities`;

export const api = {
  async getHotels() {
    const response = await request(`hotels`);
    const hotels = await response.json();

    return getAdaptedHotels(hotels);
  },

  async getReviews(id) {
    const response = await request(`comments/${id}`);
    const reviews = await response.json();

    return getAdaptedReviews(reviews);
  },

  async getNearbyHotels(id) {
    const response = await request(`hotels/${id}/nearby`);
    const nearbyHotels = await response.json();

    return getAdaptedHotels(nearbyHotels);
  },

  async getFavorites() {
    const response = await request(`favorite`);
    const favorites = await response.json();

    return getAdaptedHotels(favorites);
  },

  async toggleFavoriteStatus(id, status) {
    const response = await request(`favorite/${id}/${status}`, Methods.POST);
    const hotel = await response.json();

    return getAdaptedHotel(hotel);
  }
}

const request = (url, method = Methods.GET, body = null) => {
  return fetch(`${endPoint}/${url}`, {
    method,
    body,
    credentials: `include`
  })
}
