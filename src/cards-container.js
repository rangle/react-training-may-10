import React from 'react';
import PropTypes from 'proptypes';
import { CardList } from './card-list';
import { Card } from './card';
import { Searchbar } from './searchbar';

const renderRobots = (robots) => {
  return robots.map((robot) => (
    <Card
      key={robot.id}
      id={robot.id}
      name={robot.name}
      email={robot.email}
    />
  ));
};

export const CardsContainer = ({ robots, query, onSearch }) => (
  <div className="flex flex-column vh-100 sans-serif">
    <header className="pv4 bb tc">
      <h1 className="f2 b ttu tracked light-red">ROBODEX</h1>
      <Searchbar
        value={query}
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>

    <CardList>
      { renderRobots(robots) }
    </CardList>
  </div>
);

CardsContainer.PropTypes = {
  robots: PropTypes.array,
  query: PropTypes.string,
  onSearch: PropTypes.func,
};
