import React from 'react';

export const RobotDetails = ({ robots, match }) => (
  <div>
    <h1>Robot details for id: { match.params.id }</h1>
    <pre>{
      JSON.stringify(
        robots.find(robot => robot.id === Number(match.params.id)),
        null, 2
      )
    }</pre>
  </div>
);
