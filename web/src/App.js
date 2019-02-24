import React, { Component } from 'react';
import colorbrewer from 'colorbrewer';
import './App.css';
import styled from 'styled-components';
import Chips from './Chips';
import Top3Criteria from './Top3Criteria';
import TimeSlice from './TimeSlice';

class App extends Component {
  state = {
    pageIdx: 1,
    pages: [<Top3Criteria/>, <TimeSlice/>, <></>],
  }

  render() {

    return (
      <div className="App">
        <Chips
          items={['Top 3 Criteria', 'Time Slice', 'Case Studies - Hurricane']}
          onClick={pageIdx => this.setState({ pageIdx })}
          selectedItemId={this.state.pageIdx}
        />
        {this.state.pages[this.state.pageIdx]}
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

const SliderStartLabel = styled.div`
  position: absolute;
  left: 0;
  transform: translate(-50%, -50%);
`;

const SliderEndLabel = styled.div`
  position: absolute;
  right: 0;
  transform: translate(50%, -50%);
`;

const SliderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  width: 70%;
`;

export default App;
