import { getAdaptedHotels, getAdaptedReviews, getAdaptedHotel, getAdaptedUserDate } from "./adapter";

const StatusCode = {
  Unauthorized: 401
};

const Methods = {
  GET: `GET`,
  POST: `POST`
};

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
  },

  async checkAuthStatus() {
    const response = await request(`login`);

    if (response.status === StatusCode.Unauthorized) {
      throw new Error();
    }

    const userDate = await response.json();
    return getAdaptedUserDate(userDate);
  },

  async login(userData) {
    const response = await request(
      `login`,
      Methods.POST,
      JSON.stringify(userData),
      new Headers({ "Content-Type": "application/json;charset=utf-8" })
    );

    if (!response.ok) {
      throw new Error()
    }

    const authInfo = await response.json();

    return getAdaptedUserDate(authInfo);
  },

  async addReview(id, newReview) {
    const response = await request(
      `comments/${id}`,
      Methods.POST,
      JSON.stringify(newReview),
      new Headers({ "Content-Type": "application/json;charset=utf-8" })
    );

    if (!response.ok) {
      console.log(response);

      throw new Error()
    }

    const reviews = await response.json();

    return getAdaptedReviews(reviews);
  }
};

const request = (url, method = Methods.GET, body = null, headers = new Headers()) => {
  return fetch(`${endPoint}/${url}`, {
    method,
    body,
    headers,
    credentials: `include`
  });
};
