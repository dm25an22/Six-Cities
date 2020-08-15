import {combineReducers} from "redux";
import {NameSpace} from "./name-space"
import {reducer as offersReducer} from "./offersReducer/offersReducer"

export const rootReducer = combineReducers({
  [NameSpace.OFFERS]: offersReducer
});
