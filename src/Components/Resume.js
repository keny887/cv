import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { ReactComponent as WorkIcon } from "../work.svg"
import timelineElements from "../timelineElements"




class Resume extends Component {
  render() {
    if (this.props.data) {

      var education = this.props.data.education.map(function (education) {
        return <div key={education.id}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      
      var programmingSkills = this.props.data.skills.map(skills => {
        return <li key={skills.name} style={{fontWeight: skills.style}}>{skills.name}</li>
      })
      var cloudAndVevOps = this.props.data.devops.map(devops => {
        return <li key={devops.name} style={{fontWeight: devops.style}}>{devops.name}</li>
      })
    }

    let workIconStyles = { background: 'rgb(33, 150, 243)' }


    return (
      <section id="resume">

        <div className="row work">

          <div id="header-work" className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="main-colii">
          <VerticalTimeline animate={false}>
        {timelineElements.map(element => {

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={workIconStyles} 
              icon={<WorkIcon />} 
              position={"right"}
            >
              <h3 className="vertical-timeline-element-title">
                {element.company}
              </h3>
              <h4 className="info">{element.title}</h4>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Progamming-Skills, DevOps and Cloud Technologies</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className='blockList'>
              <ul className='block'>
                {programmingSkills}
                <br />
                <br />
                {cloudAndVevOps}
              </ul>            
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
