import React from 'react';
import PropTypes from 'prop-types';
import statesJson from './states.json';
import styled, { css } from 'styled-components';
import set from './utils';

export default class StaticMap extends React.Component {
  state = {
    isActive: statesJson.states.map(_ => false),
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 959, 593">
        {statesJson.states.map((state, idx) => (
          <Path
            active={this.props.highlighted.has(state.name) ? true : false}
            d={state.d}
            name={state.name}
            key={idx}
            onClick={() => this.props.onClick(state.name)}
          />
        ))}
      </svg>
    );
  }
}

const Path = styled.path`
  stroke: #FFF;
  stroke-width: 1;
  fill: #BBB;
  ${props => props.active && css`
    fill: #00A1FF;
  `}
`;

StaticMap.propTypes = {
  colors: PropTypes.shape({
    stateName: PropTypes.string,
    color: PropTypes.string,
  }),
  disabled: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};