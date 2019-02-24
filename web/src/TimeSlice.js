import React, { Component } from 'react';
import colorbrewer from 'colorbrewer';
import rawTimeSliceJson from './time_slice.json';
import Map from './Map';
import StepSlider from './StepSlider';
import './App.css';
import styled from 'styled-components';

let timeSliceJson = {}
for (let monthStr of Object.keys(rawTimeSliceJson)) {
  timeSliceJson[Number(monthStr)] = rawTimeSliceJson[monthStr];
}

class TimeSlice extends Component {
  state = {
    colorPalette: colorbrewer.Blues[8],
    stateName: 'California',
    month: 6,
    minMonth: 1,
    maxMonth: 12,
    // TODO: Hardcoding dataset min/max in component! This is bad :(
    minScore: 0,
    maxScore: 8,
    monthLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  }

  render() {
    const stateScores = timeSliceJson[this.state.month ];
    let colors = {};
    for (let state of Object.keys(stateScores)) {
      colors[state] = this.state.colorPalette[Math.floor(stateScores[state])];
    }
    

    return (
      <div className="App">
        <Title>Monthly Changes in Number of Days with Poor Mental Health Across States</Title>
        <Panel>
          <PanelLabel>
            {this.state.stateName} <PanelLabelMin> in </PanelLabelMin> {this.state.monthLabels[this.state.month - 1]}
          </PanelLabel>
          <PanelScore>
            {Number(stateScores[this.state.stateName]).toFixed(2)} days
          </PanelScore>
          <PanelDescription>Average reported number of days with mental health issues varied by month, which is likely to be associated with major events in the state</PanelDescription>
        </Panel>

        <MapContainer>
          <Map
            colors={colors}
            onMouseOverState={stateName => this.setState({ stateName })}
            onMouseOutState={() => {}}
          />
        </MapContainer>

        <SliderContainer>
          <SliderStartLabel>January</SliderStartLabel>
          <StepSlider
            value={this.state.month}
            minValue={this.state.minMonth}
            maxValue={this.state.maxMonth}
            onSlide={(_, month) => this.setState({ month })}
          />
          <SliderEndLabel>December</SliderEndLabel>
        </SliderContainer>
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
  width: 75%;
`;

const Panel = styled.div`
  background: white;
  box-shadow: 4px 13px 27px -5px rgba(50,50,93,.25), 4px 8px 16px -8px rgba(0,0,0,.3), 4px -6px 16px -6px rgba(0,0,0,.025);
  font-family: 'Lato', serif;
  font-weight: 700;
  height: 280px;
  position: fixed;
  right: 8%;
  text-align: left;
  top: 200px;
  width: 300px;
`;

const PanelLabel = styled.div`
  font-size: 24px;
  padding: 18px;
  text-align: center;
`;

const PanelLabelMin = styled.span`
  font-size: 14px;
`;

const PanelLabelDate = styled.span`
  color: #0084FF;
`;

const PanelScore = styled.div`
  font-size: 36px;
  padding: 8px 12px;
  text-align: center;
`;

const PanelDescription = styled.div`
  background: #000;
  bottom: 0;
  color: #FFF;
  padding: 18px;
  position: absolute;
`;

const MapContainer = styled.div`
  margin: 0 8%;
  width: 55%;
`;

const SliderStartLabel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
`;

const SliderEndLabel = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 60%;
`;

export default TimeSlice;
