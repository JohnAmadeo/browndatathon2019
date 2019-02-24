import React from 'react';
import PropTypes from 'prop-types';
import statesJson from './states.json';
import styled, { css } from 'styled-components';
import set from './utils';

export default class Map extends React.Component {
  state = {
    isActive: statesJson.states.map(_ => false),
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 959, 593">
        {statesJson.states.map((state, idx) => (
          <Path
            active={this.state.isActive[idx]}
            color={this.props.colors[state.name] || '#0084FF'}
            d={state.d}
            name={state.name}
            key={idx}
            onMouseOver={() => {
              this.setState({ 
                isActive: set(this.state.isActive, idx, true) 
              });
              this.props.onMouseOverState(state.name);
            }}
            onMouseOut={() => {
              this.setState({ 
                isActive: set(this.state.isActive, idx, false) 
              });
              this.props.onMouseOutState(state.name);
            }}
          />
        ))}
      </svg>
    );
  }
}

const Path = styled.path`
  stroke: #FFF;
  stroke-width: 1;
  fill: ${props => props.color};
  ${props => props.active && css`
    fill: #BBB;
  `}
`;

Map.propTypes = {
  colors: PropTypes.shape({
    stateName: PropTypes.string,
    color: PropTypes.string,
  }),
  onMouseOverState: PropTypes.func.isRequired,
  onMouseOutState: PropTypes.func.isRequired,
};