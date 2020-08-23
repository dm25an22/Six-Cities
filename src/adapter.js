const getAdaptedHotel = (data) => {
  return {
    bedrooms: data.bedrooms,
    city: {
      location: {
        latitude: data.city.location.latitude,
        longitude: data.city.location.longitude,
        zoom: data.city.location.zoom
      },
      name: data.city.name
    },
    description: data.description,
    goods: data.goods,
    host: {
      avatarUrl: data.host.avatar_url,
      id: data.host.id,
      isPro: data.host.is_pro,
      name: data.host.name
    },
    id: data.id,
    images: data.images,
    isFavorite: data.is_favorite,
    isPremium: data.is_premium,
    location: {
      latitude: data.location.latitude,
      longitude: data.location.longitude,
      zoom: data.location.zoom
    },
    maxAdults: data.max_adults,
    previewImage: data.preview_image,
    price: data.price,
    rating: data.rating,
    title: data.title,
    type: data.type
  }
};

const getAdaptedHotels = (hotels) => {
  return hotels.map((hotel) => getAdaptedHotel(hotel))
}

const getAdaptedReview = (data) => {
  return {
    comment: data.comment,
    date: data.date,
    id: data.id,
    rating: data.rating,
    user: {
      avatarUrl: data.user.avatar_url,
      id: data.user.id,
      isPro: data.user.is_pro,
      name: data.user.name
    }
  }
};

const getAdaptedReviews = (reviews) => {
  return reviews.map((review) => getAdaptedReview(review))
}

const getAdaptedUserDate = (data) => {
  return {
    avatarUrl: data.avatar_url,
    email: data.email,
    id: data.id,
    isPro: data.is_pro,
    name: data.name
  }
}

export {
  getAdaptedHotel,
  getAdaptedReview,
  getAdaptedUserDate,
  getAdaptedHotels,
  getAdaptedReviews
}