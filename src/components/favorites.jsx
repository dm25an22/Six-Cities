import React from "react";
import Header from "./header/header";
import Footer from "../footer";
import FavoritesList from "./favorites-list";
import FavoritesEmpty from "./favorites-empty";
import { useSelector } from "react-redux";
import { getHotels } from "../reducer/offersReducer/selectors";

const Favorite = () => {
  const favoriteHotels = useSelector(getHotels);

  return (
    <div className="page">
      <Header />
        {favoriteHotels.length
          ?
        <FavoritesList favoriteHotels={favoriteHotels} />
          : 
        <FavoritesEmpty />
        }
      <Footer />
    </div>
  );
};

export default Favorite;
