import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../styles/Footer.css";
import GitHub from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <a target="_blank" href='https://www.linkedin.com/in/prasanthprabakaran/' rel="noreferrer"><LinkedInIcon /></a>
          

          <a target="_blank" href='https://github.com/prasanthprabakaran' rel="noreferrer"><GitHub/></a>
      </div>
      <p>&copy; 2022 Prasanth Prabakaran</p>
    </div>
  );
}

export default Footer