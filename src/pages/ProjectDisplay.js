import React from 'react'
import {useParams} from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";
import { GitHub } from '@mui/icons-material';
import "../styles/ProjectDisplay.css";
import { OpenInNew } from '@mui/icons-material';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h1> {project.name}</h1>
      <div className='proj-sec'>
        <div className='tit'>
          <p className='des'>{project.description}</p>
          <p>
            <b>Stack:</b>{' '}
            {project.skills.map((t) => (
              <span>{t}</span>
            ))}
          </p>
          <div className='view'>
            <a href={project.FrontUrl} target='_blank' rel='noreferrer'>
              <button>
                <GitHub />
                Front-end Code
              </button>
            </a>
            <a href={project.BackUrl} target='_blank' rel='noreferrer'>
              <button>
                <GitHub />
                Back-end Code
              </button>
            </a>
            <a href={project.AppLink} target='_blank' rel='noreferrer'>
              {' '}
              <button className='view-btn'>
                <OpenInNew />
                Live
              </button>
            </a>
          </div>
        </div>
        <img src={project.image} alt={`${project.name}`} />
      </div>
    </div>
  );
}

export default ProjectDisplay