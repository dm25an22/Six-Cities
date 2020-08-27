import React from "react";
import Header from "./header";
import Footer from "./footer";
import FavoritesList from "./favorites-list";
import FavoritesEmpty from "./favorites-empty";
import { useSelector } from "react-redux";
import { getFavorites } from "../reducer/favorites/selector";

const Favorite = () => {
  const favoriteHotels = useSelector(getFavorites);

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
