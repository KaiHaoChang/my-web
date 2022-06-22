import React from "react";

const personalInfos = [
  {
    id: 1,
    titleCh: "作品集",
    titleEg: "Project",
    descriptionCh: "前端相關作品",
    descriptionEg: "Front-end related projects"
  },
  {
    id: 2,
    titleCh: "經歷",
    titleEg: "Experience",
    descriptionCh: "前端相關作品",
    descriptionEg: "Working Experiences"
  },
  {
    id: 3,
    titleCh: "關於我",
    titleEg: "About me",
    descriptionCh: "前端相關作品",
    descriptionEg: "My Story"
  }
]

const renderPersonalInfos = () => {
  return (
    <div className="personalInfos-containers">
      {personalInfos.map(personalInfo => {
        const { id, titleCh, titleEg, descriptionCh, descriptionEg } = personalInfo;
        return (
          <div key={id} className='personalInfos-container'>
            <a href="/" className="tittle-container">
              <h1 className="title">{titleCh}</h1>
              <p className="title">{titleEg}</p>         
            </a>
            <div className="description-container">
              <p className="description">{descriptionCh}</p>
              <p className="description">{descriptionEg}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}


const PersonalInfos = renderPersonalInfos
export default PersonalInfos;