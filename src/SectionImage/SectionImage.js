import React from "react";
import Fade from 'react-reveal/Fade';

function SectionImage (props){
  return(
    <>
      <div className="bgImg" id="portfolio"style={{height: window.innerHeight, backgroundImage: `url(${props.bgIMG})` }}>
        <div className="absolute">
          <Fade left>
          <span className="sectionSpan wide">{props.sectionName}</span>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default SectionImage;