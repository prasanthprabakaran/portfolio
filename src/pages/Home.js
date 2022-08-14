import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";
import { GitHub } from '@mui/icons-material';
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Prasanth </h2>
        <div className='prompt'>
          <p>
            A Full-Stack developer with a passion for learning and creating.
          </p>
          <a target="_blank" href='https://www.linkedin.com/in/prasanthprabakaran/' rel="noreferrer"><LinkedInIcon /></a>
          
          {/* <a target="_blank" href='' rel="noreferrer"><EmailIcon/></a> */}

          <a target="_blank" href='https://github.com/prasanthprabakaran' rel="noreferrer"><GitHub/></a>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-end</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM, Bootstrap
              MaterialUI, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2>Back-end</h2>
            <span>
              NodeJS, ExpressJS, MongoDB, Mongoose, Cors,
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
    
  );
}

export default Home;