import React from 'react';
import Header from './components/header';
import CareerObjective from './components/careerobjective';
import Education from './components/education';
import Experience from './components/Experience';
import Projects from './components/projects';
import TechnicalSkills from './components/technicalskills';
import Certificates from './components/certificates';
import Awards from './components/awards';
import Decalartion from './components/declaration';

function App() {
  return (
    <div className="App">
      <h1>RESUME</h1>
      <Header
        name="N Pardha Sarathi"
        email="palas30413@gmail.com"
        mobilenumber="7330742213"
      />
      <CareerObjective objective=" I am seeking to start my startups. My aspiration is to have time freedom and financial freedom."
      />
      <Education
        qualifications={{
          qualifications1: "Little Flower High School",
          qualifications2: "NARAYANA",
          qualifications3: "MALLAREDDY UNIVERSITY, COMPUTER SCIENCE ENGINEERING, HYDERABAD",
          qualifications4: "NOT COMPLETED",
        }}
      />
      <Experience
        talent={
          <ul>
            <li>I have done my own website using frontend and backend</li>
            <li>done 5 COURSERA courses</li>
          </ul>
        }
      />
      <Projects
        props={{
          project1: "R&V - Bridging gap between education and clarity",
          project2: "YOUTUBE - front end",
          project3: "PARKING SYSTEM- AN APPLICATION MADE WITH JAVA PROGRAMMING"
        }}
      />
      <TechnicalSkills
        skills={{
          skills1: "JAVA, PYTHON, JAVA SCRIPT",
          skills2: "WEB TECHNOLOGIES: HTML5, CSS3",
          skills3: "DATABASE MANAGEMENT SYSTEMS: MONGO DB, MYSQL"
        }}
      />
      <Certificates
        props={{
          cert1: "PYTHON PROGRAMING BY COURSERA",
          cert2: "FULL-STACK DEVELOPEMENT CERTIFICATE BY IBM",
          cert3: "AWS CLOUDCOMPUTING BY AMAZON WEB SERVICES"
        }}
      />
      <Awards 
      props={{
        award1: 'Acadmeic Excellence Award',
        award2:'Best Project in the Departmental Techno Quiz',
        award3:'Best Leadership Award'

      }}
      />
      <Decalartion 
        declare="I hereby declare that all the details provided above are true to the best of my knowledge."
        location="Hyderabad"
        />
    </div>
  );
}

export default App;
