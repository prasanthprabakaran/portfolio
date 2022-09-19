import React from 'react'
import {useParams} from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";
import { GitHub } from '@mui/icons-material';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>     
      <a target="_blank" href={project.link} rel="noreferrer">
      <img src={project.image} alt={project.name}/>
      </a>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {project.url? <a target="_blank" href={project.url} rel="noreferrer"><GitHub/></a> : ""}
    </div>
  );
}

export default ProjectDisplay