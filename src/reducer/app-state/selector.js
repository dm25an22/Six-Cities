const { NameSpace } = require("../name-space")

const getActiveLocation = (state) => {
  return state[NameSpace.APP_STATE].activeLocation
};

const getActiveSortType = (state) => {
  return state[NameSpace.APP_STATE].activeSortType
}

export {
  getActiveLocation,
  getActiveSortType
}