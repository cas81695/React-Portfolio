import React from "react";
import "../../index.css";
import SectionImage from "../../components/SectionImage/SectionImage";
import Projects from "../../components/Projects/ProjectsCard.js";
import work from "../../backgroundImages/work.png"


function Portfolio(){
  return (
    <div id="portfolio">
    <SectionImage bgIMG={work} sectionName={"PORTFOLIO"}/>

    <div className="content section" id="portfolioSection">
      <h3 className="center">MY PORTFOLIO</h3>
      <hr></hr>
      <p className="center padding-10">
        <em>Here are some of the projects I've done.
          Click on the images to view the deployed application or click 
          <a className="githubInText" href="https://github.com/cas81695"> here </a>
          to see the Github repositories of my applications.</em> </p> 
     
    
    <Projects />
    </div>
    </div>
    )
  }

export default Portfolio;