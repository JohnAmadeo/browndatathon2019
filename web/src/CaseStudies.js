import React, { Component } from 'react';
import top3Criteria from './top3_criteria.json';
import StaticMap from './StaticMap';
import './App.css';
import styled from 'styled-components';
import snowstorm1 from './snowstorm1.png';
import snowstorm2 from './snowstorm2.png';
import hurricane1 from './hurricane1.png';
import hurricane2 from './hurricane2.png';

class CaseStudies extends Component {
  state = {
    highlighted: new Set(['Maine', 'Connecticut', 'New Hampshire', 'Vermont', 'New York', 'New Jersey', 'Rhode Island', 'Massachusetts', 'Florida']),
    showFloridaModal: false,
    showNortheastModal: false
  }

  onClick = stateName => {
    console.log(stateName);
    if (!this.state.highlighted.has(stateName)) {
      this.setState({
        showFloridaModal: false,
        showNortheastModal: false,
      });
      return;
    }

    if (stateName === 'Florida') {
      this.setState({ showFloridaModal: true })
    } else {
      this.setState({ showNortheastModal: true })
    }
  }

  render() {
    return (
      <div>
        <Title>Case Studies: Disproportionate Mental Health Effects of Natural Disasters on Vulnerable Groups</Title>
        {this.state.showFloridaModal && (
          <Panel>
            <img src={hurricane1} alt={'hurricane'} />
            <img src={hurricane2} alt={'hurricane'} />
          </Panel>
        )}
        {this.state.showNortheastModal && (
          <Panel>
            <img src={snowstorm1} alt={'snowstorm'} />
            <img src={snowstorm2} alt={'snowstorm'} />
          </Panel>
        )}

        <MapContainer>
          <StaticMap
            colors={{}}
            onClick={this.onClick}
            highlighted={this.state.highlighted}
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
  margin: 20px auto;
  padding: 14px;
  width: 60%;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: #000;
  color: #FFF;
  border: 1px solid black;
  border-radius: 24px;
  font-family: 'Lato', serif;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 16px;
  margin: 12px 12px 12px 4px;
`;

const Panel = styled.div`
  background: white;
  box-shadow: 4px 13px 27px -5px rgba(50,50,93,.25), 4px 8px 16px -8px rgba(0,0,0,.3), 4px -6px 16px -6px rgba(0,0,0,.025);
  font-family: 'Lato', serif;
  font-weight: 400;
  position: absolute;
  width: 65%;
  height: 520px;
  left: 50%;
  transform: translateX(-50%);
  overflow: scroll;

  img {
    width: 100%;
  }
`;

const PanelImageTab = styled.div`
  // border: 1px solid blue;
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  
  img {
    width: 100%;
  }
`;

const PanelTextTab = styled.div`
  // border: 1px solid blue;
  box-sizing: border-box;
  display: inline-block;
  font-size 16px;
  font-weight: 400;
  padding: 18px;
  vertical-align: top;
  text-align: left;
  width: 50%;
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
  margin: 0 auto;
  width: 65%;
`;

export default CaseStudies;
