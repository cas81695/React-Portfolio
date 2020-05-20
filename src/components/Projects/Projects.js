import React from 'react';
import ProjectsCard from './ProjectsCard.js'; 
import burger from "../../projectImages/burger.png"
import  from "../../projectImages/CQ.png"
import vote from "../../projectImages/vote.png"
import employeeDir from "../../projectImages/employeeDir.png"
import dayPlanner from "../../projectImages/dayPlanner.png"
import workoutTracker from "../../projectImages/WorkoutTracker.png"
import budget from "../../projectImages/budget.png"
import weather from "../../projectImages/weather.png"

 
function Projects() {
  return (
<>
    <div>
      <div className="row">
      <ProjectsCard
        link="https://steffield-workout-tracker.herokuapp.com/"
        image={workoutTracker}
        projectName="Workout Tracker"
        technologies="MongoDB, Mongoose, Express, Chart.js, Semantic UI, Node"
      />
      <ProjectsCard
        link="https://code--query.herokuapp.com/"
        image={codeQuery}
        projectName="Code Query"
        technologies="MySQL, Sequelize, Node, Express, Handlebars, Passport, Socket.io, Jdenticon, SimpleMDE, Markdown.it, Bulma"
      />
      </div>

      <div className="row">
      <ProjectsCard
        link="https://steffield.github.io/User-Directory/"
        image={EmpDir}
        projectName="Employee Directory"
        technologies="React.js, Axios, Third Party API randomuserapi.me, Bootstrap"
      />
      <ProjectsCard
        link="https://steffield.github.io/Project-One//"
        image={election}
        projectName="Know Your Vote"
        technologies="Google Civic Information API, Google Maps APi, JavaScript, JQuery, Bootstrap"
      />
      </div>

      <div className="row">
      <ProjectsCard
        link="https://steffield-burger-app.herokuapp.com/"
        image={burger}
        projectName="Burger App"
        technologies="MySQL, Node, Express, Materialize, JavaScript"
      />
      <ProjectsCard
        link="https://steffield-pwa-budget-tracker.herokuapp.com/"
        image={budget}
        projectName="On-/ Offline Budget Tracker"
        technologies="MongoDB, Mongoose, Chart.js, Express, IndexedDB, Bootstrap"
      />
      </div>

      <div className="row">
      <ProjectsCard
        link="https://steffield.github.io/DayPlanner/"
        image={Planner}
        projectName="Day Planner"
        technologies="Moment.js, JavasCript, localStorage"
      />
      <ProjectsCard
        link="https://steffield.github.io/WeatherApp/"
        image={weather}
        projectName="Weather App"
        technologies="OpenWeatherMap API, Moment.js, Node, jQuery, Bootstrap"
      />
      </div>
    
    </div>
    </>
  )
}
 
export default Projects;