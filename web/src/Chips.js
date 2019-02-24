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
  border: 1px solid midnightblue;
  border-radius: 18px;
  color: midnightblue;
  cursor: pointer;
  display: inline-block;
  margin: 8px 8px 8px 0;
  padding: 6px 16px 6px 16px;
  ${props => props.selected && css`
    background: midnightblue;
    color: white;
  `}
  &:hover {
    border: 2px solid midnightblue;
    padding: 5px 15px 5px 15px;
  }
`;

export default Chips;