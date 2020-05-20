import React from 'react';
import ProjectsCard from './ProjectsCard.js'; 
import burger from "../../projectImages/burger.png"
import net from "../../projectImages/net.png"
import vote from "../../projectImages/vote.png"
import EmployeeDir from "../../projectImages/EmployeeDir.png"
import planner from "../../projectImages/planner.png"
import workoutTracker from "../../projectImages/WorkoutTracker.png"
import budget from "../../projectImages/budget.png"
import weather from "../../projectImages/weather.png"


 
function Projects() {
  return (
<>
    <div>
      <div className="row">
      <ProjectsCard
        link="https://cas81695.github.io/Day-Planner/"
        image={planner}
        projectName="Day Planner"

      />
      <ProjectsCard
        link="https://cas81695.github.io/Weather-Dashboard/"
        image={weather}
        projectName="Weather Dashboard"

      />
      </div>

      <div className="row">
      <ProjectsCard
        link="https://immense-basin-17135.herokuapp.com/"
        image={burger}
        projectName="Burger Handlebars"
 
      />
      <ProjectsCard
        link="https://github.com/cas81695/Project-One"
        image={vote}
        projectName="Know Your Vote"

      />
      </div>

      <div className="row">
      <ProjectsCard
        link="https://cas81695.github.io/Employee-Directory/"
        image={EmployeeDir}
        projectName="Employee Directory"
 
      />
      <ProjectsCard
        link="https://vast-headland-47194.herokuapp.com/"
        image={net}
        projectName="Quest for the Net"

      />
      </div>

      <div className="row">
      <ProjectsCard
        link="https://obscure-ridge-91951.herokuapp.com/"
        image={workoutTracker}
        projectName="Workout Tracker"

      />
      <ProjectsCard
        link="https://dry-savannah-70140.herokuapp.com/"
        image={budget}
        projectName="Budget Tracker"

      />
      </div>
    
    </div>
    </>
  )
}
 
export default Projects;