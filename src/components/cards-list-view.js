import React from 'react';
import PropTypes from 'proptypes';
import { CardList } from '../components/card-list';
import { Card } from '../components/card';
import { Searchbar } from '../components/searchbar';
import { Link } from 'react-router-dom';

const renderRobots = (robots) => {
  return robots.map((robot) => (
    <Link to={`/details/${robot.id}`} key={robot.id}>
      <Card
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    </Link>
  ));
};

export const CardsListView = ({ robots, query, onSearch, match }) => (
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

CardsListView.PropTypes = {
  robots: PropTypes.array,
  query: PropTypes.string,
  onSearch: PropTypes.func,
};
