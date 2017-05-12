import React from 'react';

export const CardList = ({ children }) => (
  <div className="flex-auto flex flex-wrap overflow-scroll pa3 justify-center">
    { children }
  </div>
);
