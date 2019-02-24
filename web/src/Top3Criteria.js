import React, { Component } from 'react';
import top3Criteria from './top3_criteria.json';
import Map from './Map';
import './App.css';
import styled from 'styled-components';

class Top3Criteria extends Component {
  state = {
    stateName: 'California',
  }

  render() {
    return (
      <div>
        {/* TODO: Fix styling of panel!!! */}
        <Panel>
          {this.state.stateName}
          {top3Criteria[this.state.stateName].map(criteria => (
            <div>
              {`${criteria.label}: ${criteria.value}`}
            </div>
          ))}
        </Panel>

        <MapContainer>
          <Map
            colors={{}}
            onMouseOverState={stateName => this.setState({ stateName })}
            onMouseOutState={() => { }}
          // onMouseOutState={_ => this.setState({ stateName: null })}
          />
        </MapContainer>
      </div>
    );
  }
}


const Panel = styled.div`
  background: white;
  box-shadow: 4px 13px 27px -5px rgba(50,50,93,.25), 4px 8px 16px -8px rgba(0,0,0,.3), 4px -6px 16px -6px rgba(0,0,0,.025);
  font-family: 'Lato', serif;
  font-weight: 700;
  height: 450px;
  padding: 18px;
  position: fixed;
  right: 3%;
  text-align: left;
  top: 60px;
  width: 300px;
`;

const MapContainer = styled.div`
  margin: 0 3%;
  width: 70%;
`;

export default Top3Criteria;
