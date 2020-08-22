import React from "react";

const FavoritesEmpty = () => {
  return (
    <main class="page__main page__main--favorites page__main--favorites-empty">
      <div class="page__favorites-container container">
        <section class="favorites favorites--empty">
          <h1 class="visually-hidden">Favorites (empty)</h1>
          <div class="favorites__status-wrapper">
            <b class="favorites__status">Nothing yet saved.</b>
            <p class="favorites__status-description">
              Save properties to narrow down search or plan yor future trips.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FavoritesEmpty;
