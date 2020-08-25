import {NameSpace} from "../name-space";

const getActiveLocation = (state) => {
  return state[NameSpace.APP_STATE].activeLocation;
};

export {
  getActiveLocation
};