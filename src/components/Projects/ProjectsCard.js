import React from "react"
import "./Projects.css"


function ProjectCard(props){
return(
<>
    <div className="col-md-6 padding" >
      <a  href={props.link} target="_blank" rel="noopener noreferrer"> <img  src={props.image} className="pfPic" alt={props.projectName} />
      <div className="banner">
        <h4>{props.projectName}</h4>
        <p id="subtext">
          {props.technologies}
          </p>
      </div>
      </a>
      </div>  
    </>
    )
}

export default ProjectCard;