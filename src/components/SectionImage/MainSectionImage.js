import React from "react";
import "./SectionImage.css"
import Typist from 'react-typist';
import home from "../../backgroundImages/home.png";

function MainSectionImage(){
  return(
    <>
    <div className="bgImg" id="home" style={{height: window.innerHeight, backgroundImage: `url(${home})`}}>
      <div id="bgTextLeft">
      
      <Typist>
        <span className="wide" id="nameSpan">
          Christian Sanchez</span>
        <br></br>
        <span className="wide" id="jobSpan">Full Stack Web Developer</span>
      </Typist>

      </div>
      <div id="bgTextRight">
          <a href="https://github.com/cas81695"><i className="fa fa-github iconsTop"></i></a>
          <a href="https://www.linkedin.com/in/christian-sanchez-181467103/"><i className="fa fa-linkedin iconsTop"></i></a>    
      </div>
    </div>


    </>
  )
}

export default MainSectionImage;