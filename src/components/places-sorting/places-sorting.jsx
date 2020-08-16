import React, {useEffect, useContext} from "react";
import {TypeSort} from "../../enums";
import {ContextMain} from "../../context";

const PlacesSorting = () => {
  const {setActiveSortType, activeSortType} = useContext(ContextMain);

  useEffect(() => {
    setActiveSortType(TypeSort.POPULAR)
  }, [setActiveSortType]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {/* <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li>
      </ul> */}
      <select 
        onChange={(evt) => {
          setActiveSortType(evt.target.value);
        }}
        className="places__sorting-type" 
        id="places-sorting" 
        defaultValue={`popular`}
        >
        <option className="places__option" value="popular">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select>
  </form>
  );
}

export default PlacesSorting;