const extend = (a, b) => {
  return Object.assign({}, a, b);
}

const getRatingByPercent = (rating) => {
  const maxRating = 5
  const ratingRound = Math.round(rating)
  return (ratingRound * 100) / maxRating
}

console.log(getRatingByPercent(2.5));

export {
  extend,
  getRatingByPercent
}