import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { GitHub } from '@mui/icons-material';
import "../styles/Home.css"
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> 
          Hi,
          <span className='wave'>{' '}</span>My Name is{' '}
          <span className='name-shadow'>Prasanth</span>
        </h2>
        <h1>
          <Typewriter 
            options={{
              strings: [
                'Full Stack Developer',
                'React Developer',
                'NodeJS Developer',
                'REST Api Developer'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <div className='prompt'>
          <p>
            A Software developer with a passion for learning and creating 
            new web applications and to maintain them. 
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
            href='https://drive.google.com/file/d/1F7kDJ--PI6LE_6fHBbuW9BFhtYy9y3r-/view?usp=share_link' 
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