import React, { useState, useEffect } from 'react';
import './ContentSection.css';

function ContentSection(props) {
    const {data} = props;

    return(
      <div className="Content-Section">
          <div className="Image-Section">
            <img src={data.url} />
          </div>
          <div className="Text-Section">
            <h3>{data.title}</h3>
            <h4>{data.copyright}</h4>
            <p>{data.explanation}</p>
          </div>
      </div>
  );
};

export default ContentSection;