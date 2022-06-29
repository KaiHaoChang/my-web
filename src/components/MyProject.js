import React from "react";
import ProjectCollection from './ProjectCollection';

const MyProject = () => {

  
  const renderProject = ProjectCollection.map(project => {
    const { id, title, url, gitUrl, pic} = project

    return (
      <div key={id} className="project-container">
        <div className="project-image">
          <img src={pic} alt={title} />
        </div>
        <div className="content">
          <h1 className="title">{title}</h1>
          <a target='blank' href={url}>see more</a>
          <a target='blank' href={gitUrl}>Github</a>
        </div>
      </div>
    )
  } )

  return (
    <div className="projects-container">
      {renderProject}
    </div>
  )
}

export default MyProject