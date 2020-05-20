import React from "react";
import "../../index.css";
import cas from "../../backgroundImages/cas.png"
import Resume from "../../backgroundImages/Resume.pdf"


function About(){
  return(
<>

      <div className="content section" id="about">
        <h3 className="center">ABOUT ME</h3>
        <hr></hr>
        <p className="center padding-10"><em>Full Stack Web Developer</em></p>
        <p>I am a full stack web developer with experience in Sales and Health Care. As a person with a natural creativity, I have always loved exhibiting my skills in the form of music and art as a hobbie. Sometimes, my creativity can be used in practical problem solving situations. As I began to learn about the aspects of coding, I realized that creativity and problem solving are the core elements of the career. Thus, I embarked on learning the skills need to be a proficent developer. From front end to back end, I have learned multiple of skills in create beautiful and functional apps. My journey has taken me from graduating from East Carolina University in Communications to creating exciting applications. The road will only getting more intriguing as the oppurtunites come to light. </p>
        <div className="row">
          <div className="col-md-12 center" id="aboutRow">      
          <br></br><br></br>
            <div className="row">
              <div className= "col-md-6">
                <h4>Christian Sanchez</h4>
                <br></br>
                <img src={cas} id="myPhoto" className="gradient-border" alt="Christian Sanchez" width="280" height="300"></img>
              </div>
              <div className="col-md-6">
                <h4>My Skills</h4>
                <br></br>
                <p>Front End: HTML, CSS and CSS Frameworks (such as Bootstrap and Materialize), React, JavaScript, JQuery, Node.js, Express. Back End: Passport, RESTful APIs, relational and non-relational databases, such as MySQL and Sequelize, MongoDB and Mongoose, client-side storage with IndexedDB API etc.</p>
    
                <br></br>
            
                <form method="get" action={Resume}>
                <button className="btn btn-outline-dark"id="resumeBtn" type="submit"><i className="fa fa-download fa-fw"></i> Download Resume</button>
                </form>
              </div>
      
            </div>
          </div>
        </div>

      </div>

      </>

  )
}

export default About;