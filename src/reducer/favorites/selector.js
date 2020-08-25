const { NameSpace } = require("../name-space")

const getFavorites = (state) => {
  return state[NameSpace.FAVORITES].favorites
};

export {
  getFavorites
}