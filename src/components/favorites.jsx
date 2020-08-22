import React from "react";
import Header from "./header/header";
import Footer from "../footer";
import FavoritesList from "./favorites-list";
import FavoritesEmpty from "./favorites-empty";

const Favorite = () => {
  const favoriteHotels = []

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
