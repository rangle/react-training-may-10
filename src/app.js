import React, { Component } from 'react';
import { CardsContainer } from './cards-container';
import { getRobots } from './api';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      query: '',
    };
  }

  componentDidMount() {
    getRobots()
      .then((robots) => {
        this.setState({ robots: robots });
      });
  }

  onSearch = (query) => {
    this.setState({ query: query });
  }

  getFilteredRobots(robots, query) {
    return robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }

  render() {
    const { robots, query } = this.state;
    return (
      <CardsContainer
        robots={this.getFilteredRobots(robots, query)} query={query}
        onSearch={this.onSearch}
      />
    );
  }
}
