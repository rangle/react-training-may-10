function normalizeRobots(robots) {
  return robots.map(robot => ({
    id: robot.id,
    name: robot.name,
    email: robot.email,
  }));
}

export function getRobots() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => normalizeRobots(users));
}
