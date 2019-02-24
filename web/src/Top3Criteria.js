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
        <Title>Multiplicative Effect on Mental Health using Negative Binomial Regression Esimator</Title>
        {/* TODO: Fix styling of panel!!! */}
        <Panel>
          <PanelItemLabel>{this.state.stateName}</PanelItemLabel>
          {top3Criteria[this.state.stateName].map(criteria => (
            <PanelItem>
              <div>{criteria.label}</div>
              <div>{Number(criteria.value).toFixed(1)}x</div>
            </PanelItem>
          ))}
          <PanelDescription>Compared to the general population in this state, these subpopulations are most at risk of getting mental health problems</PanelDescription>
        </Panel>

        <MapContainer>
          <Map
            colors={{}}
            onMouseOverState={stateName => this.setState({ stateName })}
            onMouseOutState={() => { }}
          />
        </MapContainer>
      </div>
    );
  }
}

const Title = styled.div`
  font-family: 'Lato', serif;
  font-weight: 700;
  font-size: 24px;
  box-shadow: 4px 13px 27px -5px rgba(50,50,93,.25), 4px 8px 16px -8px rgba(0,0,0,.3), 4px -6px 16px -6px rgba(0,0,0,.025);
  margin: 24px auto;
  padding: 18px;
  width: 75%;
`;

const Panel = styled.div`
  background: white;
  box-shadow: 4px 13px 27px -5px rgba(50,50,93,.25), 4px 8px 16px -8px rgba(0,0,0,.3), 4px -6px 16px -6px rgba(0,0,0,.025);
  font-family: 'Lato', serif;
  font-weight: 700;
  height: 400px;
  position: fixed;
  right: 5%;
  text-align: left;
  top: 170px;
  width: 300px;
`;

const PanelItemLabel = styled.div`
  font-size: 36px;
  padding: 18px;
`;

const PanelItem = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  justify-content: space-between;
  margin: 16px 0;
  padding: 0 18px;
`;

const PanelDescription = styled.div`
  background: #000;
  bottom: 0;
  color: #FFF;
  padding: 18px;
  position: absolute;
`;

const MapContainer = styled.div`
  margin: 0 5%;
  width: 65%;
`;

export default Top3Criteria;
