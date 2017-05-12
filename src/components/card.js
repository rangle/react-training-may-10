import React from 'react';
import PropTypes from 'proptypes';
import { Media } from './media';
import { Heading } from './heading';
import { SubHeading } from './sub-heading';

export const Card = ({ name, id, email }) => (
  <article className="w5 mr3 bg-light-green br3 pa3 pa4-ns mv3 ba b--black-50">
    <div className="tc">
      <Media
        src={`https://robohash.org/${id}`}
        title='photo of robot'
      />
      <Heading>{ name }</Heading>
      <SubHeading>{ email }</SubHeading>
    </div>
  </article>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
