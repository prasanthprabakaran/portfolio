import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id}) {
  const navigate = useNavigate();
  return (
    <div 
      className='projectItem'
      onclick={() => {
        Navigate("/project/" + id);
      }}
    >
     <div style={{ backgroundImage: `url(${image})`}} className="bgImage" />
     <h1>{name}</h1> 
    </div>
  )
}

export default ProjectItem