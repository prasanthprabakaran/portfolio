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
      <h1 id='about-me'>About Me</h1>
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
            new web applications. Certified Trained Fresher in Full Stack Developer Program 
            from GUVI IITM Research Park. Living in Chennai,India
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
            href='https://drive.google.com/file/d/1fX1dRqX3pnAEzFqfWFdW4N2IAJXiHr9k/view?usp=sharing' 
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
            <img id='skills' src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
            alt='HTML5'/>
            <img id='skills' src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
            alt='CSS3'/>
            <img id='skills' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'
            alt='JavaScript'/>
            <img id='skills' src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
            alt='React'/>
            <img id='skills' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white'
            alt='Redux'/>
            <img id='skills' src='https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'
            alt='Bootstrap'/>
            <img id='skills' src='https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white'
            alt='MaterialUI'/>
            <img id='skills' src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
            alt='React Router DOM'/>            
            {/* <span>
              ReactJS, Redux, HTML, CSS, NPM, Bootstrap
              MaterialUI, StyledComponents, React-Router-Dom, Axios, React-Hooks
            </span> */}
          </li>
          <li className='item'>
            <h2>Back-end</h2>
            <img id='skills' src='	https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'
            alt='ExpressJS'/>
            <img id='skills' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'
            alt='NodeJS'/>
            <img id='skills' src='https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white'
            alt='JWT'/>            
            {/* <span>
              NodeJS, ExpressJS,JWT-Web-tokens, DotEnv, Mongoose, Cors, Postman
            </span> */}
          </li>
          <li className='item'>
            <h2>Database</h2>
            <img id='skills' src='https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
            alt='MongoDB'/>
            {/* <span>MongoDB</span> */}
          </li>
          <li className='item'>
            <h2>Tools</h2>
            <img id='skills' src='https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white' 
            alt='NPM'/>
            <img id='skills' src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white' 
            alt='POSTMAN'/>
            <img id='skills' src='https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white' 
            alt='VSCode'/>
            <img id='skills' src='https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white'
            alt='GIT' />
            <img id='skills' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' 
            alt='Github' />
          </li>
        </ol>
      </div>
    </div>
    
  );
}

export default Home;