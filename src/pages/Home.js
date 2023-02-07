import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
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
          <a 
            target="_blank" 
            href='https://www.linkedin.com/in/prasanthprabakaran/' 
            rel="noreferrer">
              <LinkedInIcon />
          </a>
          
          <a
            target="_blank" 
            href='mailto:iprasanthpraba@gmail.com' 
            rel="noreferrer">
              <EmailIcon/>
          </a>

          <a
            target="_blank" 
            href='https://github.com/prasanthprabakaran' 
            rel="noreferrer">
              <GitHub/>
          </a>
          <a
            target="_blank" 
            href='https://drive.google.com/drive/u/1/folders/1rj0a-U7aVgiYLj5-el98WuFDMq6eWYjl' 
            rel="noreferrer">
              <button className='resume-btn'>Resume</button>
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-end</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, Bootstrap
              MaterialUI, StyledComponents, React-Router-Dom, Axios, React-Hooks
            </span>
          </li>
          <li className='item'>
            <h2>Back-end</h2>
            <span>
              NodeJS, ExpressJS,JWT-Web-tokens, DotEnv, Mongoose, Cors, Postman
            </span>
          </li>
          <li className='item'>
            <h2>Database</h2>
            <span>MongoDB</span>
          </li>
        </ol>
      </div>
    </div>
    
  );
}

export default Home;