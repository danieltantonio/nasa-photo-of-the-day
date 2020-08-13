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
    const {data} = props;

    return(
      <ContentSectionComp className="Content-Section">
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