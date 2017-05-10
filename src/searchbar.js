import React from 'react';

export const Searchbar = ({ ...props }) => (
  <input
    type="search"
    className="input-reset ba pa3"
    { ...props }
  />
);
