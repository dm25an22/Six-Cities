import {combineReducers} from "redux";
import {NameSpace} from "./name-space";
import {reducer as offersReducer} from "./offersReducer/offersReducer";
import {reducer as userReducer} from "./userReducer/userReducer";
import {reducer as favoritesReducer} from "./favoritesReducer/favoritesReducer";
import {reducer as reviewsReducer} from "./reviews/reviews"

export const rootReducer = combineReducers({
  [NameSpace.OFFERS]: offersReducer,
  [NameSpace.USER]: userReducer,
  [NameSpace.FAVORITES]: favoritesReducer,
  [NameSpace.REVIEWS]: reviewsReducer
});
