import React, { useEffect } from "react";
import { TypeSort } from "../enums";
import { useState } from "react";

const PlacesSorting = ({ activeSortType, setActiveSortType }) => {
  const [showOptionsList, setShowOptionsList] = useState(false);

  useEffect(() => {
    setActiveSortType(TypeSort.POPULAR);

    const closeOptionsList = () => {
      setShowOptionsList(false);
    }

    window.addEventListener(`click`, closeOptionsList)

    return () => {
      setActiveSortType(TypeSort.POPULAR);
      window.removeEventListener(`click`, closeOptionsList);
    };
  }, [setActiveSortType]);

  return (
    <div className="places__sorting">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onClick={(evt) => {
          evt.stopPropagation()
          setShowOptionsList((prevState) => !prevState);
        }}
        className="places__sorting-type"
        tabIndex="0"
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      {showOptionsList && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(TypeSort).map((it) => {
            return (
              <li
                key={it}
                data-value={it}
                className={`places__option ${activeSortType === it && `places__option--active`}`}
                tabIndex={0}
                onClick={(evt) => {
                  setActiveSortType(evt.target.dataset.value);
                }}
              >
                {it}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PlacesSorting;
