// eslint-disable-next-line
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Chips = props => (
  <Ul>
    {props.items.map((item, idx) =>
      // Turn into a styled.li component later
      <Li
        key={idx}
        onClick={_ => props.onClick(idx)}
        selected={props.selectedItemId === idx}
      >
        {item}
      </Li>
    )}
  </Ul>
);

Chips.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedItemId: PropTypes.number,
};

const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
`;

const Li = styled.li`
  background: white;
  border: 1px solid #0084FF;
  border-radius: 18px;
  color: #0084FF;
  cursor: pointer;
  display: inline-block;
  margin: 8px 8px 8px 0;
  padding: 6px 16px 6px 16px;
  ${props => props.selected && css`
    background: #0084FF;
    color: white;
  `}
  &:hover {
    border: 2px solid #0084FF;
    padding: 5px 15px 5px 15px;
  }
`;

export default Chips;