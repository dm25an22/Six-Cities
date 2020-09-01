import React from "react";
import PropTypes from "prop-types";
import { hostType } from "../types";

const RoomHost = ({ host, description }) => {
  const { avatarUrl, name, isPro } = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div
          className={`property__avatar-wrapper ${
            isPro && `property__avatar-wrapper--pro`
          } user__avatar-wrapper`}
        >
          <img
            className="property__avatar user__avatar"
            src={`/${avatarUrl}`}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">{name}</span>
      </div>
      <div className="property__description">
        <p className="property__text">{description}</p>
      </div>
    </div>
  );
};

RoomHost.propTypes = {
  host: PropTypes.shape(hostType).isRequired,
  description: PropTypes.string.isRequired
};

export default RoomHost;
