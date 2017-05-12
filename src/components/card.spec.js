import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from './card';

test('Card renders correctly', () => {
  const tree = renderer.create(
    <Card name="Ervin Howell" id={0} email="Shanna@melissa.tv" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
