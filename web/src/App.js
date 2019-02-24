import React, { Component } from 'react';
import colorbrewer from 'colorbrewer';
import './App.css';
import styled from 'styled-components';
import Chips from './Chips';
import Top3Criteria from './Top3Criteria';
import TimeSlice from './TimeSlice';
import CaseStudies from './CaseStudies';

class App extends Component {
  state = {
    pageIdx: 0,
    pages: [<Top3Criteria />, <CaseStudies />, <TimeSlice/>],
  }

  render() {
    return (
      <div className="App" style={{overflowX: 'hidden'}}>
        <ChipsContainer>
          <Chips
            items={['Risk Factors', 'Case Studies', 'Time Slice']}
            onClick={pageIdx => this.setState({ pageIdx })}
            selectedItemId={this.state.pageIdx}
          />
        </ChipsContainer>
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

const ChipsContainer = styled.div`
  position: fixed;
  right: 12px;
  bottom: 12px;
`;

export default App;
