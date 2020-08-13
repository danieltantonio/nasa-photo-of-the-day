import React, { useState, useEffect } from 'react';
// import './ContentSection.css';
import styled, { keyframes } from 'styled-components';

const ContentSectionComp = styled.div`
  background: lightgrey;
  display: flex;
  flex-direction: column;
  
  .Image-Section {
    background-color: white;
  }
`;


function ContentSection(props) {
    const {data, timeMachine, onDateChange, onSubmitChange} = props;

    const onSubmit = (e) => {
      e.preventDefault();
      onSubmitChange(timeMachine)
    };

    const onInputChange = e => {
      const { name, value } = e.target;
      onDateChange(name, value);
    }

    return(
      <ContentSectionComp className="Content-Section">
          <div className='time-machine'>
            <p>Choose another picture by date:</p>
            <form onSubmit={onSubmit}>
              <label>Month: </label>
              <input type='number' name='month' min={1} max={12} value={timeMachine.month} onChange={onInputChange}/>
              <label> Day: </label>
              <input type='number' name='day' min={1} max={31} value={timeMachine.day} onChange={onInputChange}/>
              <label> Year: </label>
              <input type='number' name='year' min={1996} max={2020} value={timeMachine.year} onChange={onInputChange}/>
              <button>Submit</button>
            </form>
          </div>
          <div className="Image-Section">
            <img src={data.url} />
          </div>
          <div className="Text-Section">
            <h3>{data.title}</h3>
            <h4>{data.copyright}</h4>
            <p>{data.explanation}</p>
          </div>
      </ContentSectionComp>
  );
};

export default ContentSection;